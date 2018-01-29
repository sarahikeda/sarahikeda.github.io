/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  config.toolbarGroups = [
    { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
    { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
    { name: 'forms' },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
    { name: 'links' },
    { name: 'insert' },
    { name: 'styles' },
    { name: 'colors' },
    { name: 'tools' },
    { name: 'others' },
  ];

  config.floatingtools = 'Basic';
  config.floatingtools_Basic =
  [
  	['Bold', 'Italic', 'NumberedList', 'BulletedList', 'Link', 'Blockquote', 'Anchor']
  ];

  config.removePlugins = 'paragraph, forms, editing'
  // The default plugins included in the basic setup define some buttons that
  // are not needed in a basic editor. They are removed here.
  config.removeButtons = 'Clipboard, Undo,Cut,Copy,Paste,Undo,Redo,Underline,Strike,Subscript,Superscript,Source,Language';

  config.autoGrow_minHeight = 200;
  config.autoGrow_maxHeight = 600;
  config.autoGrow_bottomSpace = 50;

  // Dialog windows are also simplified.
  config.removeDialogTabs = 'link:advanced';
};
