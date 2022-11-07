/* global $ */
(function () {
  'use strict';

  async function fetchVideos() {
    try {
      const response = await fetch('videos.json');
      if (! response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const videos = await response.json();
      return videos;
    } catch(e) {
      console.error(e);
    }
  }

  //let theActiveVideo;

  async function displayVideoList() {
    const videos = await fetchVideos();
    const videoList = $("#sidebar ul");
    const videoPlayer = $('video');
    videos.forEach(video => {
      const theLi = $(`<li>
           <span>${video.name}</span>
           <img src="${video.picture}">
         </li>
      `).appendTo(videoList)
      .click(function () {
        videoPlayer.attr('src', video.url);
        videoPlayer.attr('controls', true);
        // videoPlayer[0].play();

        //this.style = 'color: gray; background-color: yellow';
        /*theLi.css({
          color: 'gray',
          backgroundColor: 'yellow'
        });

        if (theActiveVideo) {
          theActiveVideo.css('background-color', 'white');
        }

        theActiveVideo = theLi;*/

        $('.active').removeClass('active');
        theLi.addClass('active visited');
      });
    });

    $('#loading').hide();
    videoPlayer.show();
    $('#sidebar').show();
  }

  displayVideoList();
}());