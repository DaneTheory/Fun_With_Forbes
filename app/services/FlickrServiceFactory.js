import $ from 'jquery';
import fetch from 'node-fetch';

import FlickrConfig from '../configs/FlickrConfigs';


function FlickrServiceFactory() {
        this.base_url        =    FlickrConfig.BASE_URL;
        this.api_key         =    FlickrConfig.API_KEY;
        this.getRecentImgs   =    FlickrConfig.RECENT_METHOD;
        this.searchImgs      =    FlickrConfig.SEARCH_METHOD;
}

FlickrServiceFactory.prototype.fetch = function (search='', page='') {
  return new Promise((resolve, reject) => {
    const reqParams = {
      'api_key'         :   this.api_key,
      'per_page'        :   10,
      'format'          :   'json',
      'nojsoncallback'  :   1,
      'page'            :   (page != null && page > 0) ? page : 1,
      'method'          :   (search != null && search.length > 0) ?
                              this.searchImgs : this.getRecentImgs,
    };

    if((search != null && search.length > 0)) {
      reqParams.text = search;
    };

    $.ajax({
      type: "GET",
      dataType: "json",
      url: this.base_url,
      data: reqParams,
      success: resolve,
      error: reject

    });
  });
};

module.exports = FlickrServiceFactory;
