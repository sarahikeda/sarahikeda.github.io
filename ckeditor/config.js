/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  config.toolbarGroups = [
    { name: 'document' },
    { name: 'clipboard',   groups: [ 'clipboard' ] },
    { name: 'editing' },
    { name: 'forms' },
    { name: 'basicstyles'},
    { name: 'paragraph'},
    { name: 'links' },
    { name: 'insert' },
    { name: 'tools' },
    { name: 'others' },
  ];


  config.removePlugins = 'paragraph, forms, editing'
  // The default plugins included in the basic setup define some buttons that
  // are not needed in a basic editor. They are removed here.
  config.removeButtons = 'Unlink,NewPage,Preview,Image,PasteText,PasteFromWord,HorizontalRule,SpecialChar,TextColor,BGColor,ShowBlocks,PageBreak,Maximize,Clipboard, Undo,Cut,Copy,Paste,Undo,Redo,Underline,Strike,Subscript,Superscript,Source,Language,Print,Smiley,Flash,Table,Iframe,Preview,Print';

  config.autoGrow_minHeight = 100;
  config.autoGrow_maxHeight = 600;
  config.autoGrow_bottomSpace = 50;

  config.floatingtools = 'Basic';
  config.floatingtools_Basic =
  [
    ['Bold', 'Italic', 'NumberedList', 'BulletedList', 'Link', 'Blockquote', 'Anchor']
  ];
  // Dialog windows are also simplified.
  config.removeDialogTabs = 'link:advanced';
};
