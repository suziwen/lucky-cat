(function () {
var code = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(DOMUtils.DOM.getViewPort().h - 200, 500));
  };
  var $_a6a2up9ajew5es6v = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_gahygc9cjew5es6w = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_a6a2up9ajew5es6v.getMinWidth(editor);
    var minHeight = $_a6a2up9ajew5es6v.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_gahygc9cjew5es6w.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_gahygc9cjew5es6w.getContent(editor));
  };
  var $_5i3rim99jew5es6t = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_5i3rim99jew5es6t.open(editor);
    });
  };
  var $_4ne8hi98jew5es6t = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_5i3rim99jew5es6t.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_5i3rim99jew5es6t.open(editor);
      }
    });
  };
  var $_dfutxs9djew5es6x = { register: register$1 };

  PluginManager.add('code', function (editor) {
    $_4ne8hi98jew5es6t.register(editor);
    $_dfutxs9djew5es6x.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
