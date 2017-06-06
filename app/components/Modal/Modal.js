import React from 'react';

import CloseBttn from '../../components/CloseBttn/CloseBttn';
import ModalNavBttn from '../../components/ModalNavBttn/ModalNavBttn';

import './styles.css';

export default class Modal extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {
            isVisible: false
        };
    }

    _toggleModal() {
        const modalContainer = document.querySelector('#modalContainer');
        if(!this.state.isVisible) {
            this.setState({
                isVisible: true
            }, function () {
                modalContainer.classList.toggle('modal__container--hidden');
                modalContainer.classList.toggle('modal__container--visible');
            });
        } else {
            this.setState({
                isVisible: false
            }, function () {
                modalContainer.classList.toggle('modal__container--visible');
                modalContainer.classList.toggle('modal__container--hidden');
            });
        }
    };

    _closeModalHandler(){
        location.hash = '';
        this._toggleModal()
    }

    componentDidMount() {
        this._toggleModal();
    }

    getPhotoById(id) {
        for (var i = 0; i < this.props.photos.length; i++) {
            if (this.props.photos[i].id === id) {
                return this.props.photos[i];
            }
        }
    }

    getNextPhotoId() {
        var photoIndex = this.props.photos.indexOf(this.photo);
        if (photoIndex !== -1 && this.props.photos[photoIndex + 1] !== undefined) {
            return this.props.photos[photoIndex + 1].id;
        }
    }

    getPreviousPhotoId() {
        var photoIndex = this.props.photos.indexOf(this.photo);
        if (photoIndex !== -1 && this.props.photos[photoIndex - 1] !== undefined) {
            return this.props.photos[photoIndex - 1].id;
        }
    }


    render() {
        const { isVisible } = this.props

        this.photo = this.getPhotoById(this.props.currentPhotoId);

        if (this.photo === undefined) {
            return <div></div>;
        }

        const src = `http://farm${this.photo.farm}.static.flickr.com/${this.photo.server}/${this.photo.id}_${this.photo.secret}.jpg`;

        const photoIndex = this.props.photos.indexOf(this.photo);

        let next = '';
        let previous = '';

        if (this.props.photos[photoIndex + 1] !== undefined) {
            next = (
                <div id="nextBttn" className="modal__bttn">
                    <a href={'#photo/'+this.props.photos[photoIndex + 1].id}>
                        <ModalNavBttn />
                    </a>
                </div>
            );
        }
        if (this.props.photos[photoIndex - 1] !== undefined) {
            previous = (
                <div id="prevBttn" className="modal__bttn">
                    <a href={'#photo/'+this.props.photos[photoIndex - 1].id}>
                        <ModalNavBttn />
                    </a>
                </div>
            );
        }

        return (
            <div id="modalContainer"
                 className="modal__container--hidden">
                <div className="modal__content">
                    <div className="modal__header">
                        <div className="modal--close" onClick={this._closeModalHandler.bind(this)}>
                            <CloseBttn />
                        </div>
                    </div>
                    <div className="modal__body">
                        <img className="modal__photo" src={src} />
                        {previous} {next}
                    </div>
                </div>
            </div>
        );
    }
}
