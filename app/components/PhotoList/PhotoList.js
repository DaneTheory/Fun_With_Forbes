import React from 'react';
import Photo from '../Photo/Photo';

import './styles.css'; 

export default
class PhotoListContainer extends React.Component {
    render() {
        return (
            <div className="photoList__items">
                {this.props.photos.map((photo, index) => {
                    return <Photo key={index} data={photo}/>;
                })}
            </div>
        );
    }
}
