import React from 'react';

import './styles.css';


export default
class Photo extends React.Component {
    render() {

        var src = `http://farm${this.props.data.farm}.static.flickr.com/${this.props.data.server}/${this.props.data.id}_${this.props.data.secret}.jpg`;

        return (
            <div className="photoItem">
                <a href={"#photo/"+this.props.data.id}>
                    <img className="photo" src={src} />
                </a>
            </div>
        );
    }
}
