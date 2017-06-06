import React from 'react';

import './styles.css';


export default class Pagination extends React.Component {

        _onPageChange(e) {
            e.preventDefault();
            this.setState({
                page: e.target.getAttribute('data-page')
            });
            this.props.onChange ?
            this.props.onChange(e.target.getAttribute('data-page')) :
            this.props.page
        };

    componentDidMount() {
        this.setState({
            page: 1,
            totalPages: 100,
        });
    }

    render() {
        const currentPage = parseInt(this.props.page);
        const totalPages = parseInt(this.props.totalPages);
        let pageOfPagesComponent;
        let pageNav = [];

        const start = (currentPage === 1) ? 1 : currentPage;
        const end = (start + 4 > totalPages) ? totalPages : start + 4;

        if(!currentPage) {
            pageOfPagesComponent = `Fetching Flickr Images...`;
        } else {
            pageOfPagesComponent = `Page ${currentPage}  of  ${totalPages}`;

                    if (currentPage !== 1) {
                        pageNav.push(
                            {
                             text: '< Back',
                             number: currentPage - 1,
                             current: false
                            }
                        );
                    }

                    for (let i = start; i <= end; i++) {
                        if (i === currentPage) {
                            pageNav.push(
                                {
                                 text: currentPage,
                                 number: currentPage,
                                 current: true
                                }
                            );
                        } else {
                            if (i >= currentPage - 4 && i < currentPage + 4) {
                                pageNav.push(
                                    {
                                     text: i,
                                     number: i,
                                     current: false
                                    }
                                );
                            }
                        }
                    }

                    if (currentPage < totalPages) {
                        pageNav.push(
                            {
                             text: 'Next >',
                             number: (currentPage + 1),
                             current: false}
                         );
                    }
        };

        return (
            <div className="pagination__wrapper">
                    <h5 id="pageOfPages">
                        {pageOfPagesComponent}
                    </h5>
                <ul className="pagination__items">
                    {pageNav.map((page, index) => {
                        return <li className={page.current ? 'current' : 1 }
                                   key={index}>
                                   <a href='#'
                                      onClick={this._onPageChange.bind(this)}
                                      data-page={page.number}>{page.text}
                                   </a>
                               </li>;
                    })}
                </ul>
            </div>
        );
    }
};
