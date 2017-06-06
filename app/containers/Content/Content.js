import React from 'react';

import actions from '../../actions/';

import PhotoListContainer from '../../components/PhotoList/PhotoList';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
// import Pagination from '../../components/Paginator';

import './styles.css';


export default class Content extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                query: '',
                page: 1,

            };
        };

        _refreshPhotoListEvent(){
            // actions.FetchPhotos('dog', this.state.page)
            actions.FetchPhotos(this.state.query, this.state.page);
        };

        _onPageChange(page) {
          this.setState({
            page: page
          }, function () {
            this._refreshPhotoListEvent();
          });
        };

        componentDidMount() {
            this._refreshPhotoListEvent();
        };

    render() {
        const {loading, photos, currentPhotoId} = this.props;
        let content;
        let modal;

        this.props.loading === true ?
            content=<Loader /> :
            content=<PhotoListContainer photos={photos.photo || []} />


        if (currentPhotoId !== undefined && photos.photo !== undefined && photos.photo.length > 0) {
            modal = <Modal photos={photos.photo} currentPhotoId={currentPhotoId} />
        }

      return (
          <div className="content__wrapper">
            <div className="content__photoList">
                {content}
            </div>
            {modal}
          </div>
      );
    };
};
