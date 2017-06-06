import React from 'react';
import Logo from '../../components/Logo/Logo';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';

import './styles.css';


export default class Hero extends React.Component {
    render() {
      return (
          <div>
            <div className="top__wrapper">
                <div className="logo">
                    <Logo />
                </div>
                <div className="title">
                    <Title />
                </div>
            </div>
            <div className="bottom__wrapper">
                <Search {...this.props} />
            </div>
        </div>
      );
    };
};
