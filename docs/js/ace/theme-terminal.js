ace.define("ace/theme/terminal",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-terminal";
exports.cssText = ".ace-terminal .ace_gutter {\
background: #1a0005;\
color: steelblue\
}\
.ace-terminal .ace_print-margin {\
width: 1px;\
background: #1a1a1a\
}\
.ace-terminal {\
background-color: black;\
color: #DEDEDE\
}\
.ace-terminal .ace_cursor {\
color: #9F9F9F;\
border-left-color: #9F9F9F;\
}\
.ace-terminal .ace_marker-layer .ace_selection {\
background: #888888\
}\
.ace-terminal.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px black;\
}\
.ace-terminal .ace_marker-layer .ace_step {\
background: rgb(0, 0, 0)\
}\
.ace-terminal .ace_marker-layer .ace_bracket {\
background: #090;\
}\
.ace-terminal .ace_marker-layer .ace_bracket-start {\
background: #090;\
}\
.ace-terminal .ace_marker-layer .ace_bracket-unmatched {\
margin: -1px 0 0 -1px;\
border: 1px solid #900\
}\
.ace-terminal .ace_marker-layer .ace_active-line {\
background: #2A2A2A\
}\
.ace-terminal .ace_gutter-active-line {\
background-color: #2A112A\
}\
.ace-terminal .ace_marker-layer .ace_selected-word {\
border: 1px solid #424242\
}\
.ace-terminal .ace_invisible {\
color: #343434\
}\
.ace-terminal .ace_keyword,\
.ace-terminal .ace_meta,\
.ace-terminal .ace_storage,\
.ace-terminal .ace_storage.ace_type,\
.ace-terminal .ace_support.ace_type {\
color: tomato\
}\
.ace-terminal .ace_keyword.ace_operator {\
color: deeppink\
}\
.ace-terminal .ace_constant.ace_character,\
.ace-terminal .ace_constant.ace_language,\
.ace-terminal .ace_constant.ace_numeric,\
.ace-terminal .ace_keyword.ace_other.ace_unit,\
.ace-terminal .ace_support.ace_constant,\
.ace-terminal .ace_variable.ace_parameter {\
color: #E78C45\
}\
.ace-terminal .ace_constant.ace_other {\
color: gold\
}\
.ace-terminal .ace_invalid {\
color: yellow;\
background-color: red\
}\
.ace-terminal .ace_invalid.ace_deprecated {\
color: #CED2CF;\
background-color: #B798BF\
}\
.ace-terminal .ace_fold {\
background-color: #7AA6DA;\
border-color: #DEDEDE\
}\
.ace-terminal .ace_entity.ace_name.ace_function,\
.ace-terminal .ace_support.ace_function,\
.ace-terminal .ace_variable {\
color: #7AA6DA\
}\
.ace-terminal .ace_support.ace_class,\
.ace-terminal .ace_support.ace_type {\
color: #E7C547\
}\
.ace-terminal .ace_heading,\
.ace-terminal .ace_string {\
color: #B9CA4A\
}\
.ace-terminal .ace_entity.ace_name.ace_tag,\
.ace-terminal .ace_entity.ace_other.ace_attribute-name,\
.ace-terminal .ace_meta.ace_tag,\
.ace-terminal .ace_string.ace_regexp,\
.ace-terminal .ace_variable {\
color: #D54E53\
}\
.ace-terminal .ace_comment {\
color: orangered\
}\
.ace-terminal .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLBWV/8PAAK4AYnhiq+xAAAAAElFTkSuQmCC) right repeat-y;\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
