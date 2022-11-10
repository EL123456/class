/*global $*/
(function () {
  'use strict';

  const tagInput = $('#tag');
  async function fetchJson() {
    try {
      const response = await fetch(`json/${tagInput.val()}Result.json`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  let pictures;
  let currentIndex = 0;
  const pictureImg = $('#picture img');
  const pictureTitle = $('#picture figcaption');
  function showCurrentPicture() {
    console.log(currentIndex, pictures.length);
    //pictureImg.attr('src', pictures[currentIndex].media.m.replace('https://live.staticflickr.com/65535/', 'images/').replace('_m', ''));
    //pictureImg.attr('src', pictures[currentIndex].media.m);
    pictureImg.attr({
      src: pictures[currentIndex].src,
      alt: pictures[currentIndex].title
    });
    pictureTitle.text(pictures[currentIndex].title);
  }

  const controls = $('.control');
  // const picturesElem = $('#pictures');
  $('#searchForm').submit(async e => {
    e.preventDefault();
    const data = await fetchJson();
    /*data.items.forEach(picture => {
      /*picturesElem.append(`
        <figure>
          <img src="${picture.media.m.replace('https://live.staticflickr.com/65535/','images/').replace('_m', '')}" alt="${picture.title}">
          <figcaption>${picture.title}</figcaption>
        </figure>`);
    });*/

    /*data.items.forEach(picture => {
      picture.media.m = picture.media.m.replace('https://live.staticflickr.com/65535/', 'images/').replace('_m', '');
    });*/

    pictures = data.items.map(picture => {
      return {
        src: picture.media.m.replace('https://live.staticflickr.com/65535/', 'images/').replace('_m', ''),
        title: picture.title
      };
    });
    controls.show();
    showCurrentPicture();
  });

  $('#prev').click(() => {
    if(--currentIndex < 0) {
      currentIndex = pictures.length - 1;
    }
    showCurrentPicture();
  });

  $('#next').click(() => {
    if (++currentIndex === pictures.length) {
      currentIndex = 0;
    }
    showCurrentPicture();
  });
}());