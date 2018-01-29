/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';


  config.floatingtools = 'Basic';
  config.floatingtools_Basic =
  [
  	['Bold', 'Italic', 'NumberedList', 'BulletedList', 'Link', 'Blockquote', 'Anchor']
  ];

  // The default plugins included in the basic setup define some buttons that
  // are not needed in a basic editor. They are removed here.
  config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Underline,Strike,Subscript,Superscript';

  // Dialog windows are also simplified.
  config.removeDialogTabs = 'link:advanced';
};
