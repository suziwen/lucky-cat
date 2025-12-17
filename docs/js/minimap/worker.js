/*jshint worker:true*/
/*
* Copyright (c) Andr3as
* as-is and without warranty under the MIT License.
* See http://opensource.org/licenses/MIT for more information.
* This information must remain intact.
*/
//importScripts('prism.js');

self.addEventListener('message', function(e) {
    var code = e.data.code;
    var mode = e.data.mode;
    mode = 'aaaaa';
    //Run prism.js
    //if (Prism.languages[mode] !== undefined) {
    //    code = Prism.highlight(code, Prism.languages[mode]);
    //}
    //Post result
    postMessage({code: code});
}, false);
