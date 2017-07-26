'use strict';

const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const templateGlobal = `<div>
    <a class="youtube-link" href="#"><img class="thumbnail" src=""></a>
    <h3 class="video-title"></h3>
    <p class="video-discription"></p>
    <p class="video-release-date"></p>
    </div> 
    `;

//let globalData;

function getDataFromApi(searchTerm) {
  const query = {
    q: `${searchTerm}`,
    // per_page: 10,
    part: 'snippet',
    key: 'AIzaSyBQV-GhhCOVYxkTVYtSzufauAvpVxNr_4o',
    maxResults:10  
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, function(data){
      console.log(data);
      //globalData = data;
    displayYouTubeSearchData(data)
     showResults(data.items)
  });
};

function renderResult(result) {
    let template = templateGlobal;
    // console.log(template);
    // console.log(item);
    console.log(result);
    var ytUrl = 'http://youtube.com/?v=';
    $(template).find('.video-description').text(result.snippet.description);
    $(template).find(`.video-release-date`).text(result.snippet.publishedAt);
    $(template).find(`.video-title`).text(result.snippet.title);
    $(template).find(`.thumbnail`).attr("src", result.snippet.thumbnails.default.url);
    //$(template).find(`.youtube-link")`).attr("href", `youtu.be/${result.id.videoId}`);
  //return template
}

function displayYouTubeSearchData(data) {
    const result = data.items.map(function(item) {
        return renderResult(item);
    });
    console.log('RESULT',result);
    // $('#js-search-results').html("result");
    document.getElementById('js-search-results').innerHTML = result;
}


function showResults(result) {
    var html = " ";
    $.each(result, function(index, value) {
        var title = value.snippet.title;
        var videoLink = "https://www.youtube.com/watch?v=" + value.id.videoId;
        html += `<div><h3>${value.snippet.title}</h3><img src="${value.snippet.thumbnails.default.url}"/><a href="${videoLink}">${videoLink}</a><p>${value.snippet.description}</p><p>${value.snippet.publishedAt}</p></div>`;
    })
	$('#js-search-results').html(html);
	 console.log(html);
}



function displayYouTubeSearchData(data) {
  const results = data.items.map((item) => {
    renderResult(item);
  });
  $('.js-search-results').html(results);
}

$('.the-one').click(function(event) {
  event.preventDefault();
  let typedInput = $("#textSearch").val();
console.log(typedInput);
  getDataFromApi(typedInput);
  $("#textSearch").val('');
  
   console.log('am i broken here?');
});