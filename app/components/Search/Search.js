import React from 'react';

import actions from '../../actions/';

import Pagination from '../../components/Pagination/Pagination';

import './styles.css';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        query: '',
        page: 1,
        resultsUpdated: false,
        clearResults: false,
      };
  };

  _refreshPhotoListEvent() {
    actions.FetchPhotos(this.state.query, this.state.page);
  };

  _onPageChange(page) {
    this.setState({
      page: page
    }, function () {
      this._refreshPhotoListEvent();
    });
  };

  _onQueryChangeEvent(e) {
    this.setState({
      query: e.target.value,
    });
  };

  _clearSearchBarInput() {
    this.setState({
      query: '',
      page: 1,
      clearResults: true,
    });
  };

  _displaySearchQuery(){
    if(this.state.resultsUpdated != false && this.state.clearResults != true && this.state.query != '') {
      return `Flickr Results For: ${this.state.query}`;
    } else if (this.state.resultsUpdated != false && this.state.clearResults != true && this.state.query === '') {
      return `Awaiting user search input`;
    }
    else {
      return `Displaying Recent Flickr Uploads`;
    }

  }

  _onSearchEvent() {
    if(this.state.query === '') {
      this.setState({
        page: 1,
        query: '',
        resultsUpdated: true,
        clearResults: true,
      });
    } else {
      this.setState({
        page: this.state.page,
        query: this.state.query,
        resultsUpdated: true,
        clearResults: false,
      });
    };
    this._refreshPhotoListEvent()
  };

  _expandSearchBarEvent() {
    const searchBarInput = document.querySelector('#searchBar');
    const searchBarToggleBttn = document.querySelector('#searchBarToggleBttn');
    const searchBttnWrapper = document.querySelector('.search__button__wrapper');

    searchBarInput.classList.toggle('square');
    searchBarToggleBttn.classList.toggle('close');
    searchBarInput.classList.toggle('search__input__placeholder--show');

    searchBarInput.classList.contains('square') ?
    searchBttnWrapper.style.opacity = 1 : searchBttnWrapper.style.opacity = 0

    searchBarInput.classList.contains('search__input__placeholder--show') ?
    searchBarInput.style.color = '#00c7ec' : searchBarInput.style.color = 'transparent'

    if (searchBarInput.style.color === 'transparent') {
      this._clearSearchBarInput();
      actions.FetchPhotos('', 1);
    } else {
      searchBarInput.focus();
    }

  };

    _onKeyPressEvent(e) {
      if (this.state.resultsUpdated != false && this.state.clearResults != true && this.state.query === '') {
        this._expandSearchBarEvent();
      }
      if (e.charCode == 13) {
        e.preventDefault()
        this._onSearchEvent();
      };
    };

  render(){
    const { photos } = this.props;
    // console.log(photos);
    return(
      <div className="search__pagination__wrapper">
        <form className="search__wrapper" role="form">
          <label className="search__inner">
            <div className="search__bar__wrapper">
              <input id="searchBar"
                    className="search__input"
                    type="text"
                    placeholder="Type here to browse Flickr photos..."
                    value={this.state.query}
                    onChange={this._onQueryChangeEvent.bind(this)} onKeyPress={this._onKeyPressEvent.bind(this)} />
              <button id="searchBarToggleBttn"
                      className="search__button--toggle"
                      type="reset"
                      onClick={this._expandSearchBarEvent.bind(this)}>
              </button>
            </div>
            <div className="search__button__wrapper">
              <button id="searchSubmit"
                      className="search__button--submit"
                      type="button"
                      onClick={this._onSearchEvent.bind(this)}>
                        <span>Search</span>
              </button>
            </div>
            <div id="searchResults">
              {this._displaySearchQuery()}
            </div>
          </label>
        </form>
          <Pagination page={photos.page} totalPages={photos.pages}
                      onChange={this._onPageChange.bind(this)} />
      </div>
    )
  }
}
