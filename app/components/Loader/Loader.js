import React from 'react';

import './styles.css';


export default class Loader extends React.Component {
  render(){
    return(
      <div id="loaderWrapper">
        <img id="loader" src="../../../images/loader.gif"/>
      </div>
    );
  }
}
