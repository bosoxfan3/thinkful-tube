const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromApi(searchTerm, callback) {
    const query = {
        q: `${searchTerm}`,
        per_page: 10,
        part: `snippet`,
        key: 'AIzaSyBQV-GhhCOVYxkTVYtSzufauAvpVxNr_4o',      
    }
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

// function renderResult(result) {
//     return  `
//     <div>
//     <a href="`youtu.be/${result.items[i].id.videoId}`" ><img src="`${result.items[i].snippet.thumbnails.default.url}`"> </a>
//     <h3> </h3>
//     <p> </p>
//     </div> 
//     `;
// }

$('.the-one').click(function(event) {
    event.preventDefault();
    //renderResult();
    console.log('am i broken here?');
});