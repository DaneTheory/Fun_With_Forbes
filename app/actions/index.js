import fetch from 'node-fetch';

import * as ActionTypes from '../constants';
import store from '../stores';

import FlickrServiceFactory from '../services/FlickrServiceFactory';


const flickrServiceFactory = new FlickrServiceFactory();


function FetchPhotos(query, page) {
    store.dispatch({
      type: ActionTypes.SHOW_LOADER,
    })
  flickrServiceFactory.fetch(query, page)
    .then((data) => {
      store.dispatch({
        type: ActionTypes.SHOW_PHOTOS,
        data: data.photos,
      });
    })
    .catch((error)=>{
      store.dispatch({
        type: ActionTypes.SHOW_ERROR,
      });
    });
};

function ToggleModal(id) {
  store.dispatch({
    type: ActionTypes.SHOW_MODAL,
    id: id,
  });
};

export default {
    FetchPhotos,
    ToggleModal
};
