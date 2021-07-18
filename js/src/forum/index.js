import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import ImageGallery from './components/ImageGallery';
import Page from "flarum/common/components/Page";

app.initializers.add('justoverclock/image-gallery', () => {
  app.routes.Gallery = {
    path: '/gallery',
    component: ImageGallery,
  }
});
extend(Page.prototype, 'oncreate', function () {
  const assetsFolder = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-image-gallery/';
  const apikey = "d3b223508088ca68804ec22efd343d1f";
  const galId = "72157680008410536";
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key="+ apikey +"&gallery_id="+ galId +"&format=json&nojsoncallback=1",
    "method": "GET",
    "headers": {}
  }

  $.ajax(settings).done(function (data) {

    $("#galleryTitle").append(data.photos.photo[0].title + " Gallery");
    $.each( data.photos.photo, function( i, gp ) {

      var farmId = gp.farm;
      var serverId = gp.server;
      var id = gp.id;
      var secret = gp.secret;

      $("#flickr").append('<a href="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg""><img class="flickrimg" src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/></a>');

    });
  });
});
