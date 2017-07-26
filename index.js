'use strict';

const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const query = {
    q: `${searchTerm}`,
    per_page: 10,
    part: 'snippet',
    key: 'AIzaSyBQV-GhhCOVYxkTVYtSzufauAvpVxNr_4o',      
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResult() {
  return  `
    <div>
    <a href=""><img src=""></a>
    <h3></h3>
    <p></p>
    </div> 
    `;
}



function displayYouTubeSearchData(data) {
  const results = data.items.map((item, index) =>
    renderResult(item));
  $('.js-search-results').html(results);
}

$('.the-one').click(function(event) {
  event.preventDefault();
  renderResult();
  console.log('am i broken here?');
});