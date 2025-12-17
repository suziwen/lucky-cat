/*!
 * Lunr languages, `Chinese` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Chad Liu
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

/**
 * export the module via AMD, CommonJS or as a browser global
 * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
 */
;
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory)
  } else if (typeof exports === 'object') {
    /**
     * Node. Does not work with strict CommonJS, but
     * only CommonJS-like environments that support module.exports,
     * like Node.
     */
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    factory()(root.lunr);
  }
}(this, function() {
  /**
   * Just return a value to define the module export.
   * This example returns an object, but the module
   * can return a function as the exported value.
   */
  return function(lunr) {
    /* throw error if lunr is not yet included */
    if ('undefined' === typeof lunr) {
      throw new Error('Lunr is not present. Please include / require Lunr before this script.');
    }


    /* register specific locale function */
    lunr.zh = function() {
      try{
        this.pipeline.reset();
        // change the tokenizer for japanese one
        var _tempGlobal = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
        if (!_tempGlobal.Segmentit && !Intl.Segmenter) {
          throw new Error("Segmintit 未正确初始化");
        }
        if (!xsjSegmentit) {
          if (typeof require === 'function' || (Intl && Intl.Segmenter)) {
            var segmenter = new Intl.Segmenter("zh-CN", {granularity: "word"});
            xsjSegmentit = {
              doSegment: function(inputStr, opts){
                var segments = segmenter.segment(inputStr);
                var result = []
                for (var segmentInfo of segments) {
                  var segment = segmentInfo.segment;
                  var index = segmentInfo.index;
                  var isWordLike = segmentInfo.isWordLike;
                  if (isWordLike){
                    result.push(segment)
                  }
                }
                return result;
              }
            }
          } else {
            xsjSegmentit = Segmentit.useDefault(new Segmentit.Segment());
            xsjSegmentit.loadDict("小书匠|0x0080|101\n书匠|0x0080|101")
          }
        }
        lunr.tokenizer = lunr.zh.tokenizer;
      } catch (e) {
        console.error(e);
      }
    };
    var xsjSegmentit = null;

    lunr.zh.tokenizer = function (obj, type) {
        if (!arguments.length || obj == null || obj == undefined) return []
        if (Array.isArray(obj)) return obj.map(function (t) { return t.toLowerCase() })

        var str = obj.toString().replace(/^\s+/, '')

        for (var i = str.length - 1; i >= 0; i--) {
            if (/\S/.test(str.charAt(i))) {
                str = str.substring(0, i + 1)
                break
            }
        }
      // TODO   can split str by \n, then cached to optm
        var singleCJKChars = [];
        if (type  === 'update') {
          str.replace(/[\u4E00-\u9FA5\uF900-\uFA2D]/gm, function(char){
            if (singleCJKChars.indexOf(char) < 0) {
              singleCJKChars.push(char);
            }
          })
        }
        var singleCJKCharInfo = {}
        singleCJKChars.forEach(function(char){
          if (singleCJKCharInfo[char]) {
            singleCJKCharInfo[char]++;
          } else {
            singleCJKCharInfo[char] = 1;
          }
        });
        var noEnStr = str.replace(/[a-zA-Z0-9]/g, ' ')
        var segmentChars = xsjSegmentit.doSegment(noEnStr, {simple: true, stripStopword: true, stripPunctuation: true, search: type == 'query'});
        // english word
        var enStr = str.replace(/[^a-zA-Z0-9]/g, ' ');
        enStr = enStr.replace(/\s+/g, ' ').trim().toLowerCase();
        enStrs = enStr.split(' ');
        segmentChars =  segmentChars.concat(enStrs);

        if (type == 'query') {
          return segmentChars;
        }
        var segmentCharInfo = {};
        segmentChars.forEach(function(word){
          if (!singleCJKCharInfo[word]) {
            if (segmentCharInfo[word]){
              segmentCharInfo[word]++;
            } else {
              segmentCharInfo[word] = 1;
            }
          }
        });
        Object.assign(segmentCharInfo, singleCJKCharInfo);
        return Object.keys(segmentCharInfo).map(function(key){
          return [key, segmentCharInfo[key]];
        });
    }

    /* lunr stemmer function */
    lunr.zh.stemmer = (function() {
      
      /* TODO chinese stemmer  */
      return function(word) {
        return word;
      }
    })();

    //lunr.Pipeline.registerFunction(lunr.zh.stemmer, 'stemmer-zh');

  };
}))
