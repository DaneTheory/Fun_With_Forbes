# Fun_With_Forbes
A ReactJS app that displays phots via Flickr's API using Redux to maintain state.

## Instructions:
1.) Download or clone the repo
<br>
2.) Using terminal, cd into the project path
<br>
3.) run `npm i` to install deps
<br>
4.) After deps successfully installed, run `npm start` and wait for successful compilation.
<br>
5.) Open your browser. Navigate to `http://localhost:8080/` to view the app.
<br>
Or visit `http://localhost:8080/webpack-dev-server/` to preview the application using webpack's dev server. 
<br>

## Docs
###### Due to time constraints completing other coding challenges I'm adding important details here on the README versus providing code comments.
### Overview
This application is built using ReactJS alongside Redux to maintain state. Photos provided via Flickr.
<br>
#### Challenge requirements: 
* Use flickr api to get a list of photos and display them on the page. (Completed)
* Paginate the list 10 photos per page. (Completed)
* When a photo is clicked, show it in an overlay. (Completed)

###### Here's some extra goodies!
#### Extra Fun stuff: 
* Responsive design providing a mobile, tablet, and desktop experience. (Completed)
* Fun stylings for the UI. (Completed)
* User search functionality. On initial load, the application displays Flickr's most recent photos. However, a search input has been provided for extra fun! (Completed)
* A ticker is provided when navigating between pages to show current page and total search results. (Completed)
* No React pulgins were used. Modal functionality, pagination, and search are all pure vanilla JS goodness. (Completed)
* No jQuery or CSS frameworks like Bootstrap. All design and code are as vanilla as she gets. (Completed)
(NOTE: Since I chose to fetch Flickr photos using REST API, jQuery was used for easy jsonp support. The alternative would be to use Flickr feeds to aggregate photos.
* Instead of using Redux Thunkware to handle asychronous calls, I wrote a Factory service that handles the business logic in fetching Flickr photos. (Completed)
<br>

## Final Thoughts
Because of time restraints, I didn't setup a nice webpack config for development. I wanted to use SCSS for styling, but just did not have the time. Also, the final application is not a perfect production ready build. With more time I would have really liked to script out solid build automation. As it stands, this app is as basic as it gets.

# I hope you enjoy. Cheers!
