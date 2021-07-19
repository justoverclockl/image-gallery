/*
 * This file is part of justoverclock/first-visit-indexpage.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class ImageGallery extends Page {

    view() {
        return m('.IndexPage', [
            IndexPage.prototype.hero(),
            m('.container',
                m('.sideNavContainer', [
                    m('nav.IndexPage-nav.sideNav', m('ul', listItems(IndexPage.prototype.sidebarItems().toArray()))),
                    m('.IndexPage-results.sideNavOffset', [
                        m('h1', m('div', { id: 'galleryTitle' })),
                        m('div', {className: 'clearboth'}, m('div', { id: 'flickr' })),
                    ]),
                ])
            ),
        ]);
    }
}
