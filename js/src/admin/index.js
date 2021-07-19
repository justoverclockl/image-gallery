/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

app.initializers.add('justoverclock/image-gallery', () => {
    app.extensionData
      .for('justoverclock-image-gallery')
      .registerSetting({
        setting: 'justoverclock-image-gallery.apiKey',
        name: 'apiKey',
        type: 'text',
        label: app.translator.trans('image-gallery.admin.apiKey'),
        help: app.translator.trans('image-gallery.admin.apiKey-help'),
    })
      .for('justoverclock-image-gallery')
      .registerSetting({
        setting: 'justoverclock-image-gallery.galId',
        name: 'galId',
        type: 'text',
        label: app.translator.trans('image-gallery.admin.galId'),
        help: app.translator.trans('image-gallery.admin.galId-help'),
    });
});
