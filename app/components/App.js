import React from 'react';
// import PhotoList from './PhotoList';
// import Pagination from './Paginator';
// import Modal from './Modal';
import actions from '../actions';
import Hero from '../containers/Hero/';
import Content from '../containers/Content/Content';
import store from '../stores/'

import './styles.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            query: '',
        };
    }

    _refreshPhotoListEvent(){
        // actions.FetchPhotos('dog', 2)
        actions.FetchPhotos(this.state.query, this.state.page);
    };

    componentDidMount() {
        this._refreshPhotoListEvent();
    };

    render() {
        return (
            <div id="region__hero">
                <Hero {...this.props} />
                <div>
                </div>
                    <div id="region__content">
                        <Content {...this.props} />
                    </div>
            </div>
        );
    }
}
