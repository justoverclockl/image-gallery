/*
 * This file is part of justoverclock/image-gallery.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import LinkButton from 'flarum/components/LinkButton';
import ImageGallery from './components/ImageGallery';
import Page from 'flarum/common/components/Page';
import IndexPage from 'flarum/forum/components/IndexPage';

/*  global $ */

app.initializers.add('justoverclock/image-gallery', () => {
    app.routes.Gallery = {
        path: '/gallery',
        component: ImageGallery,
    };
});
extend(IndexPage.prototype, 'navItems', (navItems) => {
    navItems.add(
        'Gallery',
        <LinkButton href={app.route('Gallery')} icon="fas fa-camera-retro">
            {app.translator.trans('image-gallery.forum.link-title')}
        </LinkButton>,
        100
    );

    return navItems;
});
extend(Page.prototype, 'oncreate', function () {
    const apikey = app.forum.attribute('apiKey');
    const galId = app.forum.attribute('galId');
    var settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=' + apikey + '&gallery_id=' + galId + '&format=json&nojsoncallback=1',
        method: 'GET',
        headers: {},
    };

    $.ajax(settings).done(function (data) {
        $('#galleryTitle').append(data.photos.photo[0].title + ' Gallery');
        $.each(data.photos.photo, function (i, gp) {
            var farmId = gp.farm;
            var serverId = gp.server;
            var id = gp.id;
            var secret = gp.secret;

            $('#flickr').append(
                '<a href="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret +
                    '.jpg" data-lightbox="roadtrip" target="_blank"><img class="flickrimg" src="https://farm' + farmId + '.staticflickr.com/' +
                    serverId + '/' + id + '_' + secret + '.jpg"/></a>'
            );
        });
    });
});
