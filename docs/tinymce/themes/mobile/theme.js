(function () {
var mobile = (function () {
  'use strict';

  var noop = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      x[_i] = arguments[_i];
    }
  };
  var noarg = function (f) {
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      x[_i - 1] = arguments[_i];
    }
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never = constant(false);
  var always = constant(true);
  var $_canvefwjjew5ex06 = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never,
    always: always
  };

  var $_6at0t9wijew5ex03 = {
    contextmenu: $_canvefwjjew5ex06.constant('contextmenu'),
    touchstart: $_canvefwjjew5ex06.constant('touchstart'),
    touchmove: $_canvefwjjew5ex06.constant('touchmove'),
    touchend: $_canvefwjjew5ex06.constant('touchend'),
    gesturestart: $_canvefwjjew5ex06.constant('gesturestart'),
    mousedown: $_canvefwjjew5ex06.constant('mousedown'),
    mousemove: $_canvefwjjew5ex06.constant('mousemove'),
    mouseout: $_canvefwjjew5ex06.constant('mouseout'),
    mouseup: $_canvefwjjew5ex06.constant('mouseup'),
    mouseover: $_canvefwjjew5ex06.constant('mouseover'),
    focusin: $_canvefwjjew5ex06.constant('focusin'),
    keydown: $_canvefwjjew5ex06.constant('keydown'),
    input: $_canvefwjjew5ex06.constant('input'),
    change: $_canvefwjjew5ex06.constant('change'),
    focus: $_canvefwjjew5ex06.constant('focus'),
    click: $_canvefwjjew5ex06.constant('click'),
    transitionend: $_canvefwjjew5ex06.constant('transitionend'),
    selectstart: $_canvefwjjew5ex06.constant('selectstart')
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_cukkt1wljew5ex0b = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_cvr9wwojew5ex0h = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_cvr9wwojew5ex0h.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_5jngz3wnjew5ex0d = {
    unknown: unknown$1,
    nu: nu$1,
    edge: $_canvefwjjew5ex06.constant(edge),
    chrome: $_canvefwjjew5ex06.constant(chrome),
    ie: $_canvefwjjew5ex06.constant(ie),
    opera: $_canvefwjjew5ex06.constant(opera),
    firefox: $_canvefwjjew5ex06.constant(firefox),
    safari: $_canvefwjjew5ex06.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_cvr9wwojew5ex0h.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_2jllgfwpjew5ex0i = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_canvefwjjew5ex06.constant(windows),
    ios: $_canvefwjjew5ex06.constant(ios),
    android: $_canvefwjjew5ex06.constant(android),
    linux: $_canvefwjjew5ex06.constant(linux),
    osx: $_canvefwjjew5ex06.constant(osx),
    solaris: $_canvefwjjew5ex06.constant(solaris),
    freebsd: $_canvefwjjew5ex06.constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_canvefwjjew5ex06.constant(isiPad),
      isiPhone: $_canvefwjjew5ex06.constant(isiPhone),
      isTablet: $_canvefwjjew5ex06.constant(isTablet),
      isPhone: $_canvefwjjew5ex06.constant(isPhone),
      isTouch: $_canvefwjjew5ex06.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_canvefwjjew5ex06.constant(iOSwebview)
    };
  }

  var never$1 = $_canvefwjjew5ex06.never;
  var always$1 = $_canvefwjjew5ex06.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_canvefwjjew5ex06.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find$1 = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var $_8gfg1pwsjew5ex0r = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find$1,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_8gfg1pwsjew5ex0r.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_cvr9wwojew5ex0h.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_cvr9wwojew5ex0h.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_au0euewrjew5ex0o = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_g8wga9wwjew5ex15 = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? Option.none() : Option.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? Option.none() : Option.some(str.substring(1));
  };
  var $_8g4oxuwxjew5ex16 = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_g8wga9wwjew5ex15.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_g8wga9wwjew5ex15.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_g8wga9wwjew5ex15.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_g8wga9wwjew5ex15.addToEnd(str, prefix);
  };
  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_8g4oxuwxjew5ex16.head(str).bind(function (head) {
      return $_8g4oxuwxjew5ex16.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_5mrdhqwvjew5ex13 = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$1,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_5mrdhqwvjew5ex13.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_5mrdhqwvjew5ex13.contains(uastring, 'edge/') && $_5mrdhqwvjew5ex13.contains(uastring, 'chrome') && $_5mrdhqwvjew5ex13.contains(uastring, 'safari') && $_5mrdhqwvjew5ex13.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_5mrdhqwvjew5ex13.contains(uastring, 'chrome') && !$_5mrdhqwvjew5ex13.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_5mrdhqwvjew5ex13.contains(uastring, 'msie') || $_5mrdhqwvjew5ex13.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_5mrdhqwvjew5ex13.contains(uastring, 'safari') || $_5mrdhqwvjew5ex13.contains(uastring, 'mobile/')) && $_5mrdhqwvjew5ex13.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_5mrdhqwvjew5ex13.contains(uastring, 'iphone') || $_5mrdhqwvjew5ex13.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_8qjp85wujew5ex0z = {
    browsers: $_canvefwjjew5ex06.constant(browsers),
    oses: $_canvefwjjew5ex06.constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_8qjp85wujew5ex0z.browsers();
    var oses = $_8qjp85wujew5ex0z.oses();
    var browser = $_au0euewrjew5ex0o.detectBrowser(browsers, userAgent).fold($_5jngz3wnjew5ex0d.unknown, $_5jngz3wnjew5ex0d.nu);
    var os = $_au0euewrjew5ex0o.detectOs(oses, userAgent).fold($_2jllgfwpjew5ex0i.unknown, $_2jllgfwpjew5ex0i.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_bb2aifwmjew5ex0c = { detect: detect$2 };

  var detect$3 = $_cukkt1wljew5ex0b.cached(function () {
    var userAgent = navigator.userAgent;
    return $_bb2aifwmjew5ex0c.detect(userAgent);
  });
  var $_5em8cowkjew5ex09 = { detect: detect$3 };

  var alloy = { tap: $_canvefwjjew5ex06.constant('alloy.tap') };
  var $_7v4jjhwhjew5ewzm = {
    focus: $_canvefwjjew5ex06.constant('alloy.focus'),
    postBlur: $_canvefwjjew5ex06.constant('alloy.blur.post'),
    receive: $_canvefwjjew5ex06.constant('alloy.receive'),
    execute: $_canvefwjjew5ex06.constant('alloy.execute'),
    focusItem: $_canvefwjjew5ex06.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_5em8cowkjew5ex09.detect().deviceType.isTouch() ? alloy.tap : $_6at0t9wijew5ex03.click,
    longpress: $_canvefwjjew5ex06.constant('alloy.longpress'),
    sandboxClose: $_canvefwjjew5ex06.constant('alloy.sandbox.close'),
    systemInit: $_canvefwjjew5ex06.constant('alloy.system.init'),
    windowScroll: $_canvefwjjew5ex06.constant('alloy.system.scroll'),
    attachedToDom: $_canvefwjjew5ex06.constant('alloy.system.attached'),
    detachedFromDom: $_canvefwjjew5ex06.constant('alloy.system.detached'),
    changeTab: $_canvefwjjew5ex06.constant('alloy.change.tab'),
    dismissTab: $_canvefwjjew5ex06.constant('alloy.dismiss.tab')
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_d6mwwbwzjew5ex1e = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_d6mwwbwzjew5ex1e.isObject(old) && $_d6mwwbwzjew5ex1e.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_dq5f6lwyjew5ex17 = {
    deepMerge: deepMerge,
    merge: merge
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_4355kjx0jew5ex1g = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_7v4jjhwhjew5ewzm.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_dq5f6lwyjew5ex17.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_4355kjx0jew5ex1g.map(data, $_canvefwjjew5ex06.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_8ij4bdwgjew5ewz4 = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  function Immutable () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_8gfg1pwsjew5ex0r.each(fields, function (name, i) {
        struct[name] = $_canvefwjjew5ex06.constant(values[i]);
      });
      return struct;
    };
  }

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_d6mwwbwzjew5ex1e.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_8gfg1pwsjew5ex0r.each(array, function (a) {
      if (!$_d6mwwbwzjew5ex1e.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_8gfg1pwsjew5ex0r.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_ajjqgex7jew5ex2o = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  function MixedBag (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_ajjqgex7jew5ex2o.validateStrArr('required', required);
    $_ajjqgex7jew5ex2o.validateStrArr('optional', optional);
    $_ajjqgex7jew5ex2o.checkDupes(everything);
    return function (obj) {
      var keys = $_4355kjx0jew5ex1g.keys(obj);
      var allReqd = $_8gfg1pwsjew5ex0r.forall(required, function (req) {
        return $_8gfg1pwsjew5ex0r.contains(keys, req);
      });
      if (!allReqd)
        $_ajjqgex7jew5ex2o.reqMessage(required, keys);
      var unsupported = $_8gfg1pwsjew5ex0r.filter(keys, function (key) {
        return !$_8gfg1pwsjew5ex0r.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_ajjqgex7jew5ex2o.unsuppMessage(unsupported);
      var r = {};
      $_8gfg1pwsjew5ex0r.each(required, function (req) {
        r[req] = $_canvefwjjew5ex06.constant(obj[req]);
      });
      $_8gfg1pwsjew5ex0r.each(optional, function (opt) {
        r[opt] = $_canvefwjjew5ex06.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  }

  var $_boyhvrx4jew5ex2k = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_a10doix8jew5ex2q = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_alw6qoxcjew5ex31 = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_alw6qoxcjew5ex31.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_a8qo8dxbjew5ex2z = { getOrDie: getOrDie };

  var node = function () {
    var f = $_a8qo8dxbjew5ex2z.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_f6t973xajew5ex2y = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_canvefwjjew5ex06.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return Option.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_6l42pqxfjew5ex38 = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_cfz5ztxgjew5ex3c = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_cfz5ztxgjew5ex3c.ELEMENT;
  var DOCUMENT = $_cfz5ztxgjew5ex3c.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_8gfg1pwsjew5ex0r.map(base.querySelectorAll(selector), $_6l42pqxfjew5ex38.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map($_6l42pqxfjew5ex38.fromDom);
  };
  var $_hx3byxejew5ex33 = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_8gfg1pwsjew5ex0r.exists(elements, $_canvefwjjew5ex06.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_f6t973xajew5ex2y.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_5em8cowkjew5ex09.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_4ki9avx9jew5ex2r = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_hx3byxejew5ex33.is
  };

  var owner = function (element) {
    return $_6l42pqxfjew5ex38.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_6l42pqxfjew5ex38.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_6l42pqxfjew5ex38.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map($_6l42pqxfjew5ex38.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_8gfg1pwsjew5ex0r.findIndex(kin, function (elem) {
        return $_4ki9avx9jew5ex2r.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_d6mwwbwzjew5ex1e.isFunction(isRoot) ? isRoot : $_canvefwjjew5ex06.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_6l42pqxfjew5ex38.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_8gfg1pwsjew5ex0r.filter(elements, function (x) {
        return !$_4ki9avx9jew5ex2r.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map($_6l42pqxfjew5ex38.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map($_6l42pqxfjew5ex38.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map($_6l42pqxfjew5ex38.fromDom);
  };
  var prevSiblings = function (element) {
    return $_8gfg1pwsjew5ex0r.reverse($_a10doix8jew5ex2q.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_a10doix8jew5ex2q.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_8gfg1pwsjew5ex0r.map(dom.childNodes, $_6l42pqxfjew5ex38.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map($_6l42pqxfjew5ex38.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_boyhvrx4jew5ex2k.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_ggckh3x3jew5ex2a = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var before = function (marker, element) {
    var parent = $_ggckh3x3jew5ex2a.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_ggckh3x3jew5ex2a.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_ggckh3x3jew5ex2a.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_ggckh3x3jew5ex2a.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_ggckh3x3jew5ex2a.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_6ub189x2jew5ex27 = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_8gfg1pwsjew5ex0r.each(elements, function (x) {
      $_6ub189x2jew5ex27.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_8gfg1pwsjew5ex0r.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_6ub189x2jew5ex27.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_8gfg1pwsjew5ex0r.each(elements.slice().reverse(), function (x) {
      $_6ub189x2jew5ex27.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_8gfg1pwsjew5ex0r.each(elements, function (x) {
      $_6ub189x2jew5ex27.append(parent, x);
    });
  };
  var $_6exptpxijew5ex3f = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_8gfg1pwsjew5ex0r.each($_ggckh3x3jew5ex2a.children(element), function (rogue) {
      remove(rogue);
    });
  };
  var remove = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_ggckh3x3jew5ex2a.children(wrapper);
    if (children.length > 0)
      $_6exptpxijew5ex3f.before(wrapper, children);
    remove(wrapper);
  };
  var $_dus6xhxhjew5ex3d = {
    empty: empty,
    remove: remove,
    unwrap: unwrap
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_cfz5ztxgjew5ex3c.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_cfz5ztxgjew5ex3c.ELEMENT);
  var isText = isType$1($_cfz5ztxgjew5ex3c.TEXT);
  var isDocument = isType$1($_cfz5ztxgjew5ex3c.DOCUMENT);
  var $_3s4ecrxkjew5ex3m = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_3s4ecrxkjew5ex3m.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_cukkt1wljew5ex0b.cached(function () {
    return getBody($_6l42pqxfjew5ex38.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_6l42pqxfjew5ex38.fromDom(body);
  };
  var $_1b1xj3xjjew5ex3i = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_8ij4bdwgjew5ewz4.emit(component, $_7v4jjhwhjew5ewzm.detachedFromDom());
    var children = component.components();
    $_8gfg1pwsjew5ex0r.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_8gfg1pwsjew5ex0r.each(children, fireAttaching);
    $_8ij4bdwgjew5ewz4.emit(component, $_7v4jjhwhjew5ewzm.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_6ub189x2jew5ex27.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_1b1xj3xjjew5ex3i.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_dus6xhxhjew5ex3d.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_ggckh3x3jew5ex2a.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold(Option.none, Option.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_8gfg1pwsjew5ex0r.each(subs, doDetach);
    $_dus6xhxhjew5ex3d.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_6ub189x2jew5ex27.append(element, guiSystem.element());
    var children = $_ggckh3x3jew5ex2a.children(guiSystem.element());
    $_8gfg1pwsjew5ex0r.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_ggckh3x3jew5ex2a.children(guiSystem.element());
    $_8gfg1pwsjew5ex0r.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_dus6xhxhjew5ex3d.remove(guiSystem.element());
  };
  var $_7ds2sdx1jew5ex1r = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_ggckh3x3jew5ex2a.children($_6l42pqxfjew5ex38.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_8gfg1pwsjew5ex0r.map(tags, function (x) {
      return $_6l42pqxfjew5ex38.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_8gfg1pwsjew5ex0r.map(texts, function (x) {
      return $_6l42pqxfjew5ex38.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_8gfg1pwsjew5ex0r.map(nodes, $_6l42pqxfjew5ex38.fromDom);
  };
  var $_473jifxpjew5ex4z = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get = function (element) {
    return element.dom().innerHTML;
  };
  var set = function (element, content) {
    var owner = $_ggckh3x3jew5ex2a.owner(element);
    var docDom = owner.dom();
    var fragment = $_6l42pqxfjew5ex38.fromDom(docDom.createDocumentFragment());
    var contentElements = $_473jifxpjew5ex4z.fromHtml(content, docDom);
    $_6exptpxijew5ex3f.append(fragment, contentElements);
    $_dus6xhxhjew5ex3d.empty(element);
    $_6ub189x2jew5ex27.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_6l42pqxfjew5ex38.fromTag('div');
    var clone = $_6l42pqxfjew5ex38.fromDom(element.dom().cloneNode(true));
    $_6ub189x2jew5ex27.append(container, clone);
    return get(container);
  };
  var $_bg62awxojew5ex4y = {
    get: get,
    set: set,
    getOuter: getOuter
  };

  var rawSet = function (dom, key, value) {
    if ($_d6mwwbwzjew5ex1e.isString(value) || $_d6mwwbwzjew5ex1e.isBoolean(value) || $_d6mwwbwzjew5ex1e.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set$1 = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_4355kjx0jew5ex1g.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get$1 = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_8gfg1pwsjew5ex0r.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set$1(destination, attr, get$1(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_3s4ecrxkjew5ex3m.isElement(source) || !$_3s4ecrxkjew5ex3m.isElement(destination))
      return;
    $_8gfg1pwsjew5ex0r.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_cwmn4ixrjew5ex55 = {
    clone: clone,
    set: set$1,
    setAll: setAll,
    get: get$1,
    has: has,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var clone$1 = function (original, deep) {
    return $_6l42pqxfjew5ex38.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_6l42pqxfjew5ex38.fromTag(tag);
    var attributes = $_cwmn4ixrjew5ex55.clone(original);
    $_cwmn4ixrjew5ex55.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_ggckh3x3jew5ex2a.children(deep$1(original));
    $_6exptpxijew5ex3f.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_6ub189x2jew5ex27.before(original, nu);
    var children = $_ggckh3x3jew5ex2a.children(original);
    $_6exptpxijew5ex3f.append(nu, children);
    $_dus6xhxhjew5ex3d.remove(original);
    return nu;
  };
  var $_1h48dwxqjew5ex53 = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_1h48dwxqjew5ex53.shallow(element);
    return $_bg62awxojew5ex4y.getOuter(clone);
  };
  var $_7m54x5xnjew5ex4u = { getHtml: getHtml };

  var element = function (elem) {
    return $_7m54x5xnjew5ex4u.getHtml(elem);
  };
  var $_8z0teyxmjew5ex4t = { element: element };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: $_canvefwjjew5ex06.always,
      isError: $_canvefwjjew5ex06.never,
      getOr: $_canvefwjjew5ex06.constant(o),
      getOrThunk: $_canvefwjjew5ex06.constant(o),
      getOrDie: $_canvefwjjew5ex06.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_canvefwjjew5ex06.die(String(message))();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_canvefwjjew5ex06.never,
      isValue: $_canvefwjjew5ex06.never,
      isError: $_canvefwjjew5ex06.always,
      getOr: $_canvefwjjew5ex06.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_canvefwjjew5ex06.noop,
      bind: bind,
      exists: $_canvefwjjew5ex06.never,
      forall: $_canvefwjjew5ex06.always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var generate = function (cases) {
    if (!$_d6mwwbwzjew5ex1e.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_8gfg1pwsjew5ex0r.each(cases, function (acase, count) {
      var keys = $_4355kjx0jew5ex1g.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_d6mwwbwzjew5ex1e.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_4355kjx0jew5ex1g.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_8gfg1pwsjew5ex0r.forall(constructors, function (reqKey) {
            return $_8gfg1pwsjew5ex0r.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_9ui8pqxwjew5ex6u = { generate: generate };

  var comparison = $_9ui8pqxwjew5ex6u.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_8gfg1pwsjew5ex0r.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_b2cdmixvjew5ex6s = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return Result.value($_dq5f6lwyjew5ex17.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_canvefwjjew5ex06.compose(Result.error, $_8gfg1pwsjew5ex0r.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_b2cdmixvjew5ex6s.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_b2cdmixvjew5ex6s.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : Result.value(partitions.values);
  };
  var $_4cxdguxtjew5ex61 = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow = function (obj, fields) {
    var r = {};
    $_8gfg1pwsjew5ex0r.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey = function (array, key) {
    var obj = {};
    $_8gfg1pwsjew5ex0r.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude = function (obj, fields) {
    var r = {};
    $_4355kjx0jew5ex1g.each(obj, function (v, k) {
      if (!$_8gfg1pwsjew5ex0r.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_ah2yqtxxjew5ex78 = {
    narrow: narrow,
    exclude: exclude,
    indexOnKey: indexOnKey
  };

  var readOpt = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? Option.from(obj[key]) : Option.none();
    };
  };
  var readOr = function (key, fallback) {
    return function (obj) {
      return readOpt(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom = function (obj, key) {
    return readOpt(key)(obj);
  };
  var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_6us4jjxyjew5ex7r = {
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    hasKey: hasKey
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll = function (keyvalues) {
    var r = {};
    $_8gfg1pwsjew5ex0r.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_7vgkn5xzjew5ex7v = {
    wrap: wrap$1,
    wrapAll: wrapAll
  };

  var narrow$1 = function (obj, fields) {
    return $_ah2yqtxxjew5ex78.narrow(obj, fields);
  };
  var exclude$1 = function (obj, fields) {
    return $_ah2yqtxxjew5ex78.exclude(obj, fields);
  };
  var readOpt$1 = function (key) {
    return $_6us4jjxyjew5ex7r.readOpt(key);
  };
  var readOr$1 = function (key, fallback) {
    return $_6us4jjxyjew5ex7r.readOr(key, fallback);
  };
  var readOptFrom$1 = function (obj, key) {
    return $_6us4jjxyjew5ex7r.readOptFrom(obj, key);
  };
  var wrap$2 = function (key, value) {
    return $_7vgkn5xzjew5ex7v.wrap(key, value);
  };
  var wrapAll$1 = function (keyvalues) {
    return $_7vgkn5xzjew5ex7v.wrapAll(keyvalues);
  };
  var indexOnKey$1 = function (array, key) {
    return $_ah2yqtxxjew5ex78.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_4cxdguxtjew5ex61.consolidateObj(objs, base);
  };
  var hasKey$1 = function (obj, key) {
    return $_6us4jjxyjew5ex7r.hasKey(obj, key);
  };
  var $_2kiiw5xsjew5ex5p = {
    narrow: narrow$1,
    exclude: exclude$1,
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    wrap: wrap$2,
    wrapAll: wrapAll$1,
    indexOnKey: indexOnKey$1,
    hasKey: hasKey$1,
    consolidate: consolidate
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return Option.none();
      }
    }
    return Option.some(f.apply(null, r));
  };
  var $_8mb1tzy0jew5ex80 = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_8gfg1pwsjew5ex0r.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_8gfg1pwsjew5ex0r.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_canvefwjjew5ex06.noop,
    logEventStopped: $_canvefwjjew5ex06.noop,
    logNoParent: $_canvefwjjew5ex06.noop,
    logEventNoHandlers: $_canvefwjjew5ex06.noop,
    logEventResponse: $_canvefwjjew5ex06.noop,
    write: $_canvefwjjew5ex06.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_8gfg1pwsjew5ex0r.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_8gfg1pwsjew5ex0r.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_7v4jjhwhjew5ewzm.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_8gfg1pwsjew5ex0r.map(sequence, function (s) {
              if (!$_8gfg1pwsjew5ex0r.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_8z0teyxmjew5ex4t.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_8z0teyxmjew5ex4t.element(c.element()),
        '(initComponents)': $_8gfg1pwsjew5ex0r.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_8gfg1pwsjew5ex0r.map(c.components(), go),
        '(bound.events)': $_4355kjx0jew5ex1g.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_4355kjx0jew5ex1g.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_4355kjx0jew5ex1g.keys(systems);
          return $_8mb1tzy0jew5ex80.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_2kiiw5xsjew5ex5p.wrap($_8z0teyxmjew5ex4t.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_9u510wxljew5ex4g = {
    logHandler: logHandler,
    noLogger: $_canvefwjjew5ex06.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_canvefwjjew5ex06.constant(debugging),
    registerInspector: registerInspector
  };

  var isSource = function (component, simulatedEvent) {
    return $_4ki9avx9jew5ex2r.eq(component.element(), simulatedEvent.event().target());
  };
  var $_5v0hdny5jew5exak = { isSource: isSource };

  var adt = $_9ui8pqxwjew5ex6u.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted = function (fallback) {
    return adt.defaultedThunk($_canvefwjjew5ex06.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_canvefwjjew5ex06.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_canvefwjjew5ex06.constant(base));
  };
  var $_cbiwrgy8jew5exbz = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
  };

  var typeAdt = $_9ui8pqxwjew5ex6u.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    },
    { thunk: ['description'] },
    {
      func: [
        'args',
        'outputSchema'
      ]
    }
  ]);
  var fieldAdt = $_9ui8pqxwjew5ex6u.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_e1whf6yajew5excs = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var json = function () {
    return $_a8qo8dxbjew5ex2z.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_3mv3mdydjew5exdu = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_d6mwwbwzjew5ex1e.isObject(input) && $_4355kjx0jew5ex1g.keys(input).length > 100 ? ' removed due to size' : $_3mv3mdydjew5exdu.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_8gfg1pwsjew5ex0r.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_b80jarycjew5exdf = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$3 = function (path, getErrorInfo) {
    return Result.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$3(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_b80jarycjew5exdf.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$3(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$3(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_b80jarycjew5exdf.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$3(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$3(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_2el9jeybjew5exd4 = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var adt$1 = $_9ui8pqxwjew5ex6u.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_canvefwjjew5ex06.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_canvefwjjew5ex06.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_6us4jjxyjew5ex7r.readOptFrom(obj, key).fold(function () {
      return $_2el9jeybjew5exd4.missingStrict(path, key, obj);
    }, Result.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_6us4jjxyjew5ex7r.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_canvefwjjew5ex06.identity);
    return Result.value(v);
  };
  var optionAccess = function (obj, key) {
    return Result.value($_6us4jjxyjew5ex7r.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_6us4jjxyjew5ex7r.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return Result.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_7vgkn5xzjew5ex7v.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_7vgkn5xzjew5ex7v.wrap(okey, strength(Option.none()));
          return Result.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_7vgkn5xzjew5ex7v.wrap(okey, strength(Option.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_canvefwjjew5ex06.constant({})).map(function (v) {
            return $_dq5f6lwyjew5ex17.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return Result.value($_7vgkn5xzjew5ex7v.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_8gfg1pwsjew5ex0r.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_4cxdguxtjew5ex61.consolidateObj(results, {});
  };
  var value$2 = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val, strength).fold(function (err) {
        return $_2el9jeybjew5exd4.custom(path, err);
      }, Result.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_e1whf6yajew5excs.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_4355kjx0jew5ex1g.keys(obj);
    return $_8gfg1pwsjew5ex0r.filter(keys, function (k) {
      return $_2kiiw5xsjew5ex5p.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_8gfg1pwsjew5ex0r.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_dq5f6lwyjew5ex17.deepMerge(acc, $_2kiiw5xsjew5ex5p.wrap(key, true));
      }, $_canvefwjjew5ex06.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_d6mwwbwzjew5ex1e.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_8gfg1pwsjew5ex0r.filter(keys, function (k) {
        return !$_2kiiw5xsjew5ex5p.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_2el9jeybjew5exd4.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_8gfg1pwsjew5ex0r.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_e1whf6yajew5excs.typeAdt.objOf($_8gfg1pwsjew5ex0r.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_e1whf6yajew5excs.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_e1whf6yajew5excs.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_8gfg1pwsjew5ex0r.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_4cxdguxtjew5ex61.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_e1whf6yajew5excs.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value$2(validator)).extract(path, $_canvefwjjew5ex06.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_4355kjx0jew5ex1g.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_8gfg1pwsjew5ex0r.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_cbiwrgy8jew5exbz.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_e1whf6yajew5excs.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var func = function (args, schema, retriever) {
    var delegate = value$2(function (f, strength) {
      return $_d6mwwbwzjew5ex1e.isFunction(f) ? Result.value(function () {
        var gArgs = Array.prototype.slice.call(arguments, 0);
        var allowedArgs = gArgs.slice(0, args.length);
        var o = f.apply(null, allowedArgs);
        return retriever(o, strength);
      }) : Result.error('Not a function');
    });
    return {
      extract: delegate.extract,
      toString: function () {
        return 'function';
      },
      toDsl: function () {
        return $_e1whf6yajew5excs.typeAdt.func(args, schema);
      }
    };
  };
  var thunk = function (desc, processor) {
    var getP = $_cukkt1wljew5ex0b.cached(function () {
      return processor();
    });
    var extract = function (path, strength, val) {
      return getP().extract(path, strength, val);
    };
    var toString = function () {
      return getP().toString();
    };
    var toDsl = function () {
      return $_e1whf6yajew5excs.typeAdt.thunk(desc);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value$2(Result.value);
  var arrOfObj = $_canvefwjjew5ex06.compose(arr, obj);
  var $_dacwzcy9jew5excb = {
    anyValue: $_canvefwjjew5ex06.constant(anyValue),
    value: value$2,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot,
    thunk: thunk,
    func: func
  };

  var strict = function (key) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.strict(), $_dacwzcy9jew5excb.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.strict(), $_dacwzcy9jew5excb.value(function (f) {
      return $_d6mwwbwzjew5ex1e.isFunction(f) ? Result.value(f) : Result.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.asOption(), $_dacwzcy9jew5excb.value(function (v) {
      return Result.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.strict(), $_dacwzcy9jew5excb.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.strict(), $_dacwzcy9jew5excb.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.asOption(), $_dacwzcy9jew5excb.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.asOption(), $_dacwzcy9jew5excb.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.asOption(), $_dacwzcy9jew5excb.objOnly(objSchema));
  };
  var defaulted$1 = function (key, fallback) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.defaulted(fallback), $_dacwzcy9jew5excb.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_dacwzcy9jew5excb.field(key, key, $_cbiwrgy8jew5exbz.defaulted(fallback), $_dacwzcy9jew5excb.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_dacwzcy9jew5excb.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_dacwzcy9jew5excb.state(okey, instantiator);
  };
  var $_f9u1aky7jew5exbr = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted$1,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_2kiiw5xsjew5ex5p.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_2el9jeybjew5exd4.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_dacwzcy9jew5excb.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_2kiiw5xsjew5ex5p.readOptFrom(input, key);
      return choice.fold(function () {
        return $_2el9jeybjew5exd4.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_4355kjx0jew5ex1g.keys(branches);
    };
    var toDsl = function () {
      return $_e1whf6yajew5excs.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_jv37wyfjew5exek = { choose: choose };

  var anyValue$1 = $_dacwzcy9jew5excb.value(Result.value);
  var arrOfObj$1 = function (objFields) {
    return $_dacwzcy9jew5excb.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_dacwzcy9jew5excb.arr(anyValue$1);
  };
  var arrOf = $_dacwzcy9jew5excb.arr;
  var objOf = $_dacwzcy9jew5excb.obj;
  var objOfOnly = $_dacwzcy9jew5excb.objOnly;
  var setOf$1 = $_dacwzcy9jew5excb.setOf;
  var valueOf = function (validator) {
    return $_dacwzcy9jew5excb.value(function (v) {
      return validator(v);
    });
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return Result.error({
        input: obj,
        errors: errs
      });
    }, Result.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_canvefwjjew5ex06.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_canvefwjjew5ex06.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_canvefwjjew5ex06.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_b80jarycjew5exdf.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_b80jarycjew5exdf.formatObj(errInfo.input);
  };
  var choose$1 = function (key, branches) {
    return $_jv37wyfjew5exek.choose(key, branches);
  };
  var thunkOf = function (desc, schema) {
    return $_dacwzcy9jew5excb.thunk(desc, schema);
  };
  var funcOrDie = function (args, schema) {
    var retriever = function (output, strength) {
      return getOrDie$1(extract('()', schema, strength, output));
    };
    return $_dacwzcy9jew5excb.func(args, schema, retriever);
  };
  var $_bf8n0dyejew5exeb = {
    anyValue: $_canvefwjjew5ex06.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose$1,
    thunkOf: thunkOf,
    funcOrDie: funcOrDie
  };

  var nu$4 = function (parts) {
    if (!$_2kiiw5xsjew5ex5p.hasKey(parts, 'can') && !$_2kiiw5xsjew5ex5p.hasKey(parts, 'abort') && !$_2kiiw5xsjew5ex5p.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_3mv3mdydjew5exdu.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_bf8n0dyejew5exeb.asRawOrDie('Extracting event.handler', $_bf8n0dyejew5exeb.objOfOnly([
      $_f9u1aky7jew5exbr.defaulted('can', $_canvefwjjew5ex06.constant(true)),
      $_f9u1aky7jew5exbr.defaulted('abort', $_canvefwjjew5ex06.constant(false)),
      $_f9u1aky7jew5exbr.defaulted('run', $_canvefwjjew5ex06.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_8gfg1pwsjew5ex0r.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_8gfg1pwsjew5ex0r.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_d6mwwbwzjew5ex1e.isFunction(handler) ? {
      can: $_canvefwjjew5ex06.constant(true),
      abort: $_canvefwjjew5ex06.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_8gfg1pwsjew5ex0r.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$4({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_bwxx9iy6jew5exb3 = {
    read: read,
    fuse: fuse,
    nu: nu$4
  };

  var derive = $_2kiiw5xsjew5ex5p.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_bwxx9iy6jew5exb3.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_bwxx9iy6jew5exb3.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_bwxx9iy6jew5exb3.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_bwxx9iy6jew5exb3.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_bwxx9iy6jew5exb3.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_bwxx9iy6jew5exb3.nu({
          run: function (component, simulatedEvent) {
            if ($_5v0hdny5jew5exak.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_8ij4bdwgjew5ewz4.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_cd3e46y4jew5exah = {
    derive: derive,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_7v4jjhwhjew5ewzm.attachedToDom()),
    runOnDetached: runOnSourceName($_7v4jjhwhjew5ewzm.detachedFromDom()),
    runOnInit: runOnSourceName($_7v4jjhwhjew5ewzm.systemInit()),
    runOnExecute: runOnName($_7v4jjhwhjew5ewzm.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = Option.none;
  var $_3knckrygjew5exeo = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
  };

  var nu$5 = $_boyhvrx4jew5ex2k.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_3mv3mdydjew5exdu.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_8h8oz6yijew5exfp = {
    nu: nu$5,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$6 = $_boyhvrx4jew5ex2k.immutableBag([], fields);
  var derive$1 = function (settings) {
    var r = {};
    var keys = $_4355kjx0jew5ex1g.keys(settings);
    $_8gfg1pwsjew5ex0r.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$6(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_3mv3mdydjew5exdu.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_2kiiw5xsjew5ex5p.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_2kiiw5xsjew5ex5p.wrap(key, arr1);
      }, function (arr2) {
        return $_2kiiw5xsjew5ex5p.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_dq5f6lwyjew5ex17.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_dq5f6lwyjew5ex17.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_dq5f6lwyjew5ex17.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_2kiiw5xsjew5ex5p.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_2kiiw5xsjew5ex5p.wrap('value', value);
    }).getOr({}));
    return $_8h8oz6yijew5exfp.nu(raw);
  };
  var $_d2rguyhjew5exf6 = {
    nu: nu$6,
    derive: derive$1,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_cd3e46y4jew5exah.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_cd3e46y4jew5exah.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create = function (schema, name, active, apis, extra, state) {
    var configSchema = $_bf8n0dyejew5exeb.objOfOnly(schema);
    var schemaSchema = $_f9u1aky7jew5exbr.optionObjOf(name, [$_f9u1aky7jew5exbr.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_f9u1aky7jew5exbr.optionObjOf(name, [$_f9u1aky7jew5exbr.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_canvefwjjew5ex06.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_3knckrygjew5exeo.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_2kiiw5xsjew5ex5p.hasKey(info, name) ? info[name]() : Option.none();
    };
    var wrappedApis = $_4355kjx0jew5ex1g.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_4355kjx0jew5ex1g.map(extra, function (extraF, extraName) {
      return $_3knckrygjew5exeo.markAsExtraApi(extraF, extraName);
    });
    var me = $_dq5f6lwyjew5ex17.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_canvefwjjew5ex06.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_bf8n0dyejew5exeb.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_cukkt1wljew5ex0b.cached(function () {
              return $_bf8n0dyejew5exeb.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_2kiiw5xsjew5ex5p.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_d2rguyhjew5exf6.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_2kiiw5xsjew5ex5p.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_cst00oy3jew5ex9e = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create,
    createModes: createModes
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_d6mwwbwzjew5ex1e.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_ajjqgex7jew5ex2o.validateStrArr('required', required);
    $_ajjqgex7jew5ex2o.checkDupes(required);
    return function (obj) {
      var keys = $_4355kjx0jew5ex1g.keys(obj);
      var allReqd = $_8gfg1pwsjew5ex0r.forall(required, function (req) {
        return $_8gfg1pwsjew5ex0r.contains(keys, req);
      });
      if (!allReqd)
        $_ajjqgex7jew5ex2o.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_8gfg1pwsjew5ex0r.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_ajjqgex7jew5ex2o.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_8gfg1pwsjew5ex0r.filter(keys, function (key) {
      return !$_8gfg1pwsjew5ex0r.contains(required, key);
    });
    if (unsupported.length > 0)
      $_ajjqgex7jew5ex2o.unsuppMessage(unsupported);
  };
  var allowExtra = $_canvefwjjew5ex06.noop;
  var $_db9ss2yljew5exg0 = {
    exactly: $_canvefwjjew5ex06.curry(base, handleExact),
    ensure: $_canvefwjjew5ex06.curry(base, allowExtra),
    ensureWith: $_canvefwjjew5ex06.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_db9ss2yljew5exg0.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_4hobjhyjjew5exfv = { init: init };

  var derive$2 = function (capabilities) {
    return $_2kiiw5xsjew5ex5p.wrapAll(capabilities);
  };
  var simpleSchema = $_bf8n0dyejew5exeb.objOfOnly([
    $_f9u1aky7jew5exbr.strict('fields'),
    $_f9u1aky7jew5exbr.strict('name'),
    $_f9u1aky7jew5exbr.defaulted('active', {}),
    $_f9u1aky7jew5exbr.defaulted('apis', {}),
    $_f9u1aky7jew5exbr.defaulted('extra', {}),
    $_f9u1aky7jew5exbr.defaulted('state', $_4hobjhyjjew5exfv)
  ]);
  var create$1 = function (data) {
    var value = $_bf8n0dyejew5exeb.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_cst00oy3jew5ex9e.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_bf8n0dyejew5exeb.objOfOnly([
    $_f9u1aky7jew5exbr.strict('branchKey'),
    $_f9u1aky7jew5exbr.strict('branches'),
    $_f9u1aky7jew5exbr.strict('name'),
    $_f9u1aky7jew5exbr.defaulted('active', {}),
    $_f9u1aky7jew5exbr.defaulted('apis', {}),
    $_f9u1aky7jew5exbr.defaulted('extra', {}),
    $_f9u1aky7jew5exbr.defaulted('state', $_4hobjhyjjew5exfv)
  ]);
  var createModes$1 = function (data) {
    var value = $_bf8n0dyejew5exeb.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_cst00oy3jew5ex9e.createModes($_bf8n0dyejew5exeb.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_28kh8wy2jew5ex8l = {
    derive: derive$2,
    revoke: $_canvefwjjew5ex06.constant(undefined),
    noActive: $_canvefwjjew5ex06.constant({}),
    noApis: $_canvefwjjew5ex06.constant({}),
    noExtra: $_canvefwjjew5ex06.constant({}),
    noState: $_canvefwjjew5ex06.constant($_4hobjhyjjew5exfv),
    create: create$1,
    createModes: createModes$1
  };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read$1 = function (element, attr) {
    var value = $_cwmn4ixrjew5ex55.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_cwmn4ixrjew5ex55.set(element, attr, nu.join(' '));
  };
  var remove$2 = function (element, attr, id) {
    var nu = $_8gfg1pwsjew5ex0r.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_cwmn4ixrjew5ex55.set(element, attr, nu.join(' '));
    else
      $_cwmn4ixrjew5ex55.remove(element, attr);
  };
  var $_e8vapwyqjew5exgj = {
    read: read$1,
    add: add,
    remove: remove$2
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$2 = function (element) {
    return $_e8vapwyqjew5exgj.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_e8vapwyqjew5exgj.add(element, 'class', clazz);
  };
  var remove$3 = function (element, clazz) {
    return $_e8vapwyqjew5exgj.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if ($_8gfg1pwsjew5ex0r.contains(get$2(element), clazz)) {
      remove$3(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_4w70evypjew5exgf = {
    get: get$2,
    add: add$1,
    remove: remove$3,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_4w70evypjew5exgf.supports(element))
      element.dom().classList.add(clazz);
    else
      $_4w70evypjew5exgf.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_4w70evypjew5exgf.supports(element) ? element.dom().classList : $_4w70evypjew5exgf.get(element);
    if (classList.length === 0) {
      $_cwmn4ixrjew5ex55.remove(element, 'class');
    }
  };
  var remove$4 = function (element, clazz) {
    if ($_4w70evypjew5exgf.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_4w70evypjew5exgf.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_4w70evypjew5exgf.supports(element) ? element.dom().classList.toggle(clazz) : $_4w70evypjew5exgf.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_4w70evypjew5exgf.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_4w70evypjew5exgf.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_4w70evypjew5exgf.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_4w70evypjew5exgf.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_bn0n6qynjew5exgc = {
    add: add$2,
    remove: remove$4,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var swap = function (element, addCls, removeCls) {
    $_bn0n6qynjew5exgc.remove(element, removeCls);
    $_bn0n6qynjew5exgc.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_bn0n6qynjew5exgc.remove(component.element(), swapConfig.alpha());
    $_bn0n6qynjew5exgc.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_bn0n6qynjew5exgc.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_bn0n6qynjew5exgc.has(component.element(), swapConfig.omega());
  };
  var $_cku2n1ymjew5exg8 = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_f9u1aky7jew5exbr.strict('alpha'),
    $_f9u1aky7jew5exbr.strict('omega')
  ];

  var Swapping = $_28kh8wy2jew5ex8l.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_cku2n1ymjew5exg8
  });

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : $_d6mwwbwzjew5ex1e.isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_1b1xj3xjjew5ex3i.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_d6mwwbwzjew5ex1e.isFunction(isRoot) ? isRoot : $_canvefwjjew5ex06.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_6l42pqxfjew5ex38.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1($_6l42pqxfjew5ex38.fromDom(element.parentNode), function (x) {
      return !$_4ki9avx9jew5ex2r.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = $_8gfg1pwsjew5ex0r.find(scope.dom().childNodes, $_canvefwjjew5ex06.compose(predicate, $_6l42pqxfjew5ex38.fromDom));
    return result.map($_6l42pqxfjew5ex38.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_6l42pqxfjew5ex38.fromDom(element.childNodes[i])))
          return Option.some($_6l42pqxfjew5ex38.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_6a8c1uyvjew5exgv = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var any$1 = function (predicate) {
    return $_6a8c1uyvjew5exgv.first(predicate).isSome();
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    return $_6a8c1uyvjew5exgv.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    return $_6a8c1uyvjew5exgv.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$1 = function (scope, predicate) {
    return $_6a8c1uyvjew5exgv.sibling(scope, predicate).isSome();
  };
  var child$2 = function (scope, predicate) {
    return $_6a8c1uyvjew5exgv.child(scope, predicate).isSome();
  };
  var descendant$1 = function (scope, predicate) {
    return $_6a8c1uyvjew5exgv.descendant(scope, predicate).isSome();
  };
  var $_bjgnbcyujew5exgu = {
    any: any$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_ggckh3x3jew5ex2a.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return Option.from(doc.activeElement).map($_6l42pqxfjew5ex38.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_ggckh3x3jew5ex2a.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_bjgnbcyujew5exgu.closest(a, $_canvefwjjew5ex06.curry($_4ki9avx9jew5ex2r.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_canvefwjjew5ex06.noop);
  };
  var search = function (element) {
    return active($_ggckh3x3jew5ex2a.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_g2xew8ytjew5exgp = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_mq7lcyzjew5exh7 = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_cq1vg3z0jew5exh8 = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_8tfhkpz1jew5exhd = {
    formatChanged: $_canvefwjjew5ex06.constant(formatChanged),
    orientationChanged: $_canvefwjjew5ex06.constant(orientationChanged),
    dropupDismissed: $_canvefwjjew5ex06.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_8gfg1pwsjew5ex0r.filter(channels, function (ch) {
      return $_8gfg1pwsjew5ex0r.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.run($_7v4jjhwhjew5ewzm.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_4355kjx0jew5ex1g.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_8gfg1pwsjew5ex0r.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_bf8n0dyejew5exeb.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_8z0teyxmjew5ex4t.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_aualumz4jew5exi0 = { events: events };

  var menuFields = [
    $_f9u1aky7jew5exbr.strict('menu'),
    $_f9u1aky7jew5exbr.strict('selectedMenu')
  ];
  var itemFields = [
    $_f9u1aky7jew5exbr.strict('item'),
    $_f9u1aky7jew5exbr.strict('selectedItem')
  ];
  var schema = $_bf8n0dyejew5exeb.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_bf8n0dyejew5exeb.objOfOnly(itemFields);
  var $_cvydwpz7jew5exja = {
    menuFields: $_canvefwjjew5ex06.constant(menuFields),
    itemFields: $_canvefwjjew5ex06.constant(itemFields),
    schema: $_canvefwjjew5ex06.constant(schema),
    itemSchema: $_canvefwjjew5ex06.constant(itemSchema)
  };

  var initSize = $_f9u1aky7jew5exbr.strictObjOf('initSize', [
    $_f9u1aky7jew5exbr.strict('numColumns'),
    $_f9u1aky7jew5exbr.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_f9u1aky7jew5exbr.strictOf('markers', $_cvydwpz7jew5exja.itemSchema());
  };
  var menuMarkers = function () {
    return $_f9u1aky7jew5exbr.strictOf('markers', $_cvydwpz7jew5exja.schema());
  };
  var tieredMenuMarkers = function () {
    return $_f9u1aky7jew5exbr.strictObjOf('markers', [$_f9u1aky7jew5exbr.strict('backgroundMenu')].concat($_cvydwpz7jew5exja.menuFields()).concat($_cvydwpz7jew5exja.itemFields()));
  };
  var markers = function (required) {
    return $_f9u1aky7jew5exbr.strictObjOf('markers', $_8gfg1pwsjew5ex0r.map(required, $_f9u1aky7jew5exbr.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_9u510wxljew5ex4g.getTrace();
    return $_f9u1aky7jew5exbr.field(fieldName, fieldName, presence, $_bf8n0dyejew5exeb.valueOf(function (f) {
      return Result.value(function () {
        $_9u510wxljew5ex4g.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_cbiwrgy8jew5exbz.defaulted($_canvefwjjew5ex06.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_cbiwrgy8jew5exbz.defaulted(Option.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_cbiwrgy8jew5exbz.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_cbiwrgy8jew5exbz.strict());
  };
  var output$1 = function (name, value) {
    return $_f9u1aky7jew5exbr.state(name, $_canvefwjjew5ex06.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_f9u1aky7jew5exbr.state(name, $_canvefwjjew5ex06.identity);
  };
  var $_behq97z6jew5exio = {
    initSize: $_canvefwjjew5ex06.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_f9u1aky7jew5exbr.strictOf('channels', $_bf8n0dyejew5exeb.setOf(Result.value, $_bf8n0dyejew5exeb.objOfOnly([
      $_behq97z6jew5exio.onStrictHandler('onReceive'),
      $_f9u1aky7jew5exbr.defaulted('schema', $_bf8n0dyejew5exeb.anyValue())
    ])))];

  var Receiving = $_28kh8wy2jew5ex8l.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_aualumz4jew5exi0
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_bn0n6qynjew5exgc.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_bn0n6qynjew5exgc.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_bn0n6qynjew5exgc.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_bn0n6qynjew5exgc.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_apiyd1zajew5exk5 = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_d2rguyhjew5exf6.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_cst00oy3jew5ex9e.executeEvent(toggleConfig, toggleState, $_apiyd1zajew5exk5.toggle);
    var load = $_cst00oy3jew5ex9e.loadEvent(toggleConfig, toggleState, $_apiyd1zajew5exk5.onLoad);
    return $_cd3e46y4jew5exah.derive($_8gfg1pwsjew5ex0r.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_c6ecimz9jew5exjp = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_cwmn4ixrjew5ex55.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_cwmn4ixrjew5ex55.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_cwmn4ixrjew5ex55.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_cwmn4ixrjew5ex55.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_3s4ecrxkjew5ex3m.name(elem);
    var suffix = rawTag === 'input' && $_cwmn4ixrjew5ex55.has(elem, 'type') ? ':' + $_cwmn4ixrjew5ex55.get(elem, 'type') : '';
    return $_2kiiw5xsjew5ex5p.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_cwmn4ixrjew5ex55.has(elem, 'role'))
      return Option.none();
    else {
      var role = $_cwmn4ixrjew5ex55.get(elem, 'role');
      return $_2kiiw5xsjew5ex5p.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_8gfg1pwsjew5ex0r.each(attributes, function (attr) {
      $_cwmn4ixrjew5ex55.set(component.element(), attr, status);
    });
  };
  var $_er17mvzcjew5exku = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_f9u1aky7jew5exbr.defaulted('selected', false),
    $_f9u1aky7jew5exbr.strict('toggleClass'),
    $_f9u1aky7jew5exbr.defaulted('toggleOnExecute', true),
    $_f9u1aky7jew5exbr.defaultedOf('aria', { mode: 'none' }, $_bf8n0dyejew5exeb.choose('mode', {
      'pressed': [
        $_f9u1aky7jew5exbr.defaulted('syncWithExpanded', false),
        $_behq97z6jew5exio.output('update', $_er17mvzcjew5exku.updatePressed)
      ],
      'checked': [$_behq97z6jew5exio.output('update', $_er17mvzcjew5exku.updateChecked)],
      'expanded': [$_behq97z6jew5exio.output('update', $_er17mvzcjew5exku.updateExpanded)],
      'selected': [$_behq97z6jew5exio.output('update', $_er17mvzcjew5exku.updateSelected)],
      'none': [$_behq97z6jew5exio.output('update', $_canvefwjjew5ex06.noop)]
    }))
  ];

  var Toggling = $_28kh8wy2jew5ex8l.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_c6ecimz9jew5exjp,
    apis: $_apiyd1zajew5exk5
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_2kiiw5xsjew5ex5p.wrap($_8tfhkpz1jew5exhd.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_2kiiw5xsjew5ex5p.wrap($_8tfhkpz1jew5exhd.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_5e9sbezdjew5exl4 = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_chb5sszejew5exl7 = {
    resolve: resolve$1,
    prefix: $_canvefwjjew5ex06.constant(prefix)
  };

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_g2xew8ytjew5exgp.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_g2xew8ytjew5exgp.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_g2xew8ytjew5exgp.hasFocus(component.element());
  };
  var $_vq3pzjjew5exmj = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$1 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_d2rguyhjew5exf6.nu({});
    else
      return $_d2rguyhjew5exf6.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$2 = function (focusConfig) {
    return $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.run($_7v4jjhwhjew5ewzm.focus(), function (component, simulatedEvent) {
        $_vq3pzjjew5exmj.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_82hklrzijew5exmi = {
    exhibit: exhibit$1,
    events: events$2
  };

  var FocusSchema = [
    $_behq97z6jew5exio.onHandler('onFocus'),
    $_f9u1aky7jew5exbr.defaulted('ignore', false)
  ];

  var Focusing = $_28kh8wy2jew5ex8l.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_82hklrzijew5exmi,
    apis: $_vq3pzjjew5exmj
  });

  var $_bu7wavzpjew5exp7 = {
    BACKSPACE: $_canvefwjjew5ex06.constant([8]),
    TAB: $_canvefwjjew5ex06.constant([9]),
    ENTER: $_canvefwjjew5ex06.constant([13]),
    SHIFT: $_canvefwjjew5ex06.constant([16]),
    CTRL: $_canvefwjjew5ex06.constant([17]),
    ALT: $_canvefwjjew5ex06.constant([18]),
    CAPSLOCK: $_canvefwjjew5ex06.constant([20]),
    ESCAPE: $_canvefwjjew5ex06.constant([27]),
    SPACE: $_canvefwjjew5ex06.constant([32]),
    PAGEUP: $_canvefwjjew5ex06.constant([33]),
    PAGEDOWN: $_canvefwjjew5ex06.constant([34]),
    END: $_canvefwjjew5ex06.constant([35]),
    HOME: $_canvefwjjew5ex06.constant([36]),
    LEFT: $_canvefwjjew5ex06.constant([37]),
    UP: $_canvefwjjew5ex06.constant([38]),
    RIGHT: $_canvefwjjew5ex06.constant([39]),
    DOWN: $_canvefwjjew5ex06.constant([40]),
    INSERT: $_canvefwjjew5ex06.constant([45]),
    DEL: $_canvefwjjew5ex06.constant([46]),
    META: $_canvefwjjew5ex06.constant([
      91,
      93,
      224
    ]),
    F10: $_canvefwjjew5ex06.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_fvrnkhzujew5exr0 = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$2 = function (predicate) {
    return descendants($_1b1xj3xjjew5ex3i.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return $_8gfg1pwsjew5ex0r.filter($_ggckh3x3jew5ex2a.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return $_8gfg1pwsjew5ex0r.filter($_ggckh3x3jew5ex2a.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return $_8gfg1pwsjew5ex0r.filter($_ggckh3x3jew5ex2a.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    $_8gfg1pwsjew5ex0r.each($_ggckh3x3jew5ex2a.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_61c1vnzwjew5exr2 = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$3 = function (selector) {
    return $_hx3byxejew5ex33.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_61c1vnzwjew5exr2.ancestors(scope, function (e) {
      return $_hx3byxejew5ex33.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_61c1vnzwjew5exr2.siblings(scope, function (e) {
      return $_hx3byxejew5ex33.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_61c1vnzwjew5exr2.children(scope, function (e) {
      return $_hx3byxejew5ex33.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_hx3byxejew5ex33.all(selector, scope);
  };
  var $_9ipr2mzvjew5exr1 = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var first$2 = function (selector) {
    return $_hx3byxejew5ex33.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_6a8c1uyvjew5exgv.ancestor(scope, function (e) {
      return $_hx3byxejew5ex33.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_6a8c1uyvjew5exgv.sibling(scope, function (e) {
      return $_hx3byxejew5ex33.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_6a8c1uyvjew5exgv.child(scope, function (e) {
      return $_hx3byxejew5ex33.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_hx3byxejew5ex33.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_hx3byxejew5ex33.is, ancestor$2, scope, selector, isRoot);
  };
  var $_5q4kn4zxjew5exr5 = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_9ipr2mzvjew5exr1.descendants(component.element(), '.' + hConfig.highlightClass());
    $_8gfg1pwsjew5ex0r.each(highlighted, function (h) {
      $_bn0n6qynjew5exgc.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_bn0n6qynjew5exgc.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_bn0n6qynjew5exgc.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_9ipr2mzvjew5exr1.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_8mb1tzy0jew5ex80.cat($_8gfg1pwsjew5ex0r.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_8gfg1pwsjew5ex0r.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_bn0n6qynjew5exgc.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_5q4kn4zxjew5exr5.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_9ipr2mzvjew5exr1.descendants(component.element(), '.' + hConfig.itemClass());
    return Option.from(items[index]).fold(function () {
      return Result.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_5q4kn4zxjew5exr5.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_9ipr2mzvjew5exr1.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_9ipr2mzvjew5exr1.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_8gfg1pwsjew5ex0r.findIndex(items, function (item) {
      return $_bn0n6qynjew5exgc.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_fvrnkhzujew5exr0.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_elf874ztjew5exqm = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_f9u1aky7jew5exbr.strict('highlightClass'),
    $_f9u1aky7jew5exbr.strict('itemClass'),
    $_behq97z6jew5exio.onHandler('onHighlight'),
    $_behq97z6jew5exio.onHandler('onDehighlight')
  ];

  var Highlighting = $_28kh8wy2jew5ex8l.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_elf874ztjew5exqm
  });

  var dom = function () {
    var get = function (component) {
      return $_g2xew8ytjew5exgp.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_canvefwjjew5ex06.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_f4lrbzzrjew5exq1 = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_8gfg1pwsjew5ex0r.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_8gfg1pwsjew5ex0r.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_8x0x8g100jew5exs9 = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_canvefwjjew5ex06.not(isShift),
    isControl: isControl,
    isNotControl: $_canvefwjjew5ex06.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_8x0x8g100jew5exs9.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_8gfg1pwsjew5ex0r.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_adknlzzzjew5exrx = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_f9u1aky7jew5exbr.defaulted('focusManager', $_f4lrbzzrjew5exq1.dom()),
        $_behq97z6jew5exio.output('handler', me),
        $_behq97z6jew5exio.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_adknlzzzjew5exrx.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_cd3e46y4jew5exah.derive(optFocusIn.map(function (focusIn) {
        return $_cd3e46y4jew5exah.run($_7v4jjhwhjew5ewzm.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_dq5f6lwyjew5ex17.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_7y2dv0zqjew5exph = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_8gfg1pwsjew5ex0r.reverse(values.slice(0, index));
    var after = $_8gfg1pwsjew5ex0r.reverse(values.slice(index + 1));
    return $_8gfg1pwsjew5ex0r.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_8gfg1pwsjew5ex0r.reverse(values.slice(0, index));
    return $_8gfg1pwsjew5ex0r.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_8gfg1pwsjew5ex0r.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_8gfg1pwsjew5ex0r.find(after, predicate);
  };
  var $_7pfsat101jew5exsm = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_s9g3b104jew5ext4 = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_d6mwwbwzjew5ex1e.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_s9g3b104jew5ext4.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_s9g3b104jew5ext4.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$2 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_4355kjx0jew5ex1g.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_4355kjx0jew5ex1g.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$3 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_1b1xj3xjjew5ex3i.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_s9g3b104jew5ext4.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_s9g3b104jew5ext4.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_6l42pqxfjew5ex38.fromTag(tag);
    set$2(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_cwmn4ixrjew5ex55.has(element, 'style') && $_5mrdhqwvjew5ex13.trim($_cwmn4ixrjew5ex55.get(element, 'style')) === '') {
      $_cwmn4ixrjew5ex55.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_cwmn4ixrjew5ex55.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_cwmn4ixrjew5ex55.remove : $_cwmn4ixrjew5ex55.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_s9g3b104jew5ext4.isSupported(sourceDom) && $_s9g3b104jew5ext4.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$2(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_3s4ecrxkjew5ex3m.isElement(source) || !$_3s4ecrxkjew5ex3m.isElement(destination))
      return;
    $_8gfg1pwsjew5ex0r.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_4njywe103jew5exsr = {
    copy: copy$1,
    set: set$2,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$3,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!$_d6mwwbwzjew5ex1e.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_s9g3b104jew5ext4.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_4njywe103jew5exsr.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_8gfg1pwsjew5ex0r.foldl(properties, function (acc, property) {
        var val = $_4njywe103jew5exsr.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api = Dimension('height', function (element) {
    return $_1b1xj3xjjew5ex3i.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$3 = function (element, h) {
    api.set(element, h);
  };
  var get$4 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api.max(element, value, inclusions);
    $_4njywe103jew5exsr.set(element, 'max-height', absMax + 'px');
  };
  var $_3y0dbe102jew5exsp = {
    set: set$3,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_f9u1aky7jew5exbr.option('onEscape'),
      $_f9u1aky7jew5exbr.option('onEnter'),
      $_f9u1aky7jew5exbr.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_f9u1aky7jew5exbr.defaulted('firstTabstop', 0),
      $_f9u1aky7jew5exbr.defaulted('useTabstopAt', $_canvefwjjew5ex06.constant(true)),
      $_f9u1aky7jew5exbr.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_5q4kn4zxjew5exr5.closest(element, sel);
      }).getOr(element);
      return $_3y0dbe102jew5exsp.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_9ipr2mzvjew5exr1.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_8gfg1pwsjew5ex0r.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return Option.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_5q4kn4zxjew5exr5.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? Option.some(true) : Option.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return Option.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_9ipr2mzvjew5exr1.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_8gfg1pwsjew5ex0r.findIndex(tabstops, $_canvefwjjew5ex06.curry($_4ki9avx9jew5ex2r.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_7pfsat101jew5exsm.cyclePrev : $_7pfsat101jew5exsm.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_7pfsat101jew5exsm.cycleNext : $_7pfsat101jew5exsm.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_canvefwjjew5ex06.constant([
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
        $_8x0x8g100jew5exs9.isShift,
        $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB())
      ]), goBackwards),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB()), goForwards),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ESCAPE()), exit),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
        $_8x0x8g100jew5exs9.isNotShift,
        $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ENTER())
      ]), execute)
    ]);
    var getEvents = $_canvefwjjew5ex06.constant({});
    var getApis = $_canvefwjjew5ex06.constant({});
    return $_7y2dv0zqjew5exph.typical(schema, $_4hobjhyjjew5exfv.init, getRules, getEvents, getApis, Option.some(focusIn));
  };
  var $_9wzcydzojew5exoh = { create: create$2 };

  var AcyclicType = $_9wzcydzojew5exoh.create($_f9u1aky7jew5exbr.state('cyclic', $_canvefwjjew5ex06.constant(false)));

  var CyclicType = $_9wzcydzojew5exoh.create($_f9u1aky7jew5exbr.state('cyclic', $_canvefwjjew5ex06.constant(true)));

  var inside = function (target) {
    return $_3s4ecrxkjew5ex3m.name(target) === 'input' && $_cwmn4ixrjew5ex55.get(target, 'type') !== 'radio' || $_3s4ecrxkjew5ex3m.name(target) === 'textarea';
  };
  var $_64sue7108jew5exty = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_8ij4bdwgjew5ewz4.dispatch(component, focused, $_7v4jjhwhjew5ewzm.execute());
    return Option.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_64sue7108jew5exty.inside(focused) && $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_e57fps109jew5exua = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_f9u1aky7jew5exbr.defaulted('execute', $_e57fps109jew5exua.defaultExecute),
    $_f9u1aky7jew5exbr.defaulted('useSpace', false),
    $_f9u1aky7jew5exbr.defaulted('useEnter', true),
    $_f9u1aky7jew5exbr.defaulted('useControlEnter', false),
    $_f9u1aky7jew5exbr.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_64sue7108jew5exty.inside(component.element()) ? $_bu7wavzpjew5exp7.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_bu7wavzpjew5exp7.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_bu7wavzpjew5exp7.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
        $_8x0x8g100jew5exs9.isControl,
        $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_canvefwjjew5ex06.constant({});
  var getApis = $_canvefwjjew5ex06.constant({});
  var ExecutionType = $_7y2dv0zqjew5exph.typical(schema$1, $_4hobjhyjjew5exfv.init, getRules, getEvents, getApis, Option.none());

  var flatgrid = function (spec) {
    var dimensions = Cell(Option.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set(Option.some({
        numRows: $_canvefwjjew5ex06.constant(numRows),
        numColumns: $_canvefwjjew5ex06.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_canvefwjjew5ex06.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_9vwwi310bjew5exvg = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_4njywe103jew5exsr.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_nf77m10djew5exw7 = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_nf77m10djew5exw7.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_nf77m10djew5exw7.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_m08jw10cjew5exw4 = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_boyhvrx4jew5ex2k.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_8gfg1pwsjew5ex0r.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_1roq6810fjew5exwn = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_4njywe103jew5exsr.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_canvefwjjew5ex06.curry($_4njywe103jew5exsr.set, element, property, initial);
    var on = $_canvefwjjew5ex06.curry($_4njywe103jew5exsr.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_d0b7b910gjew5exx4 = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_d0b7b910gjew5exx4.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_canvefwjjew5ex06.curry($_4ki9avx9jew5ex2r.eq, current);
    var candidates = $_9ipr2mzvjew5exr1.descendants(container, selector);
    var visible = $_8gfg1pwsjew5ex0r.filter(candidates, $_d0b7b910gjew5exx4.isVisible);
    return $_1roq6810fjew5exwn.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_8gfg1pwsjew5ex0r.findIndex(elements, function (elem) {
      return $_4ki9avx9jew5ex2r.eq(target, elem);
    });
  };
  var $_5pdvh910ejew5exwa = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_fvrnkhzujew5exr0.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return Option.some({
        row: $_canvefwjjew5ex06.constant(oldRow),
        column: $_canvefwjjew5ex06.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_fvrnkhzujew5exr0.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_fvrnkhzujew5exr0.cap(oldColumn, 0, colsInRow - 1);
      return Option.some({
        row: $_canvefwjjew5ex06.constant(newRow),
        column: $_canvefwjjew5ex06.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_1jcxgy10hjew5exxo = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_f9u1aky7jew5exbr.strict('selector'),
    $_f9u1aky7jew5exbr.defaulted('execute', $_e57fps109jew5exua.defaultExecute),
    $_behq97z6jew5exio.onKeyboardHandler('onEscape'),
    $_f9u1aky7jew5exbr.defaulted('captureTab', false),
    $_behq97z6jew5exio.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_5q4kn4zxjew5exr5.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_5q4kn4zxjew5exr5.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_5pdvh910ejew5exwa.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? Option.some(true) : Option.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_1jcxgy10hjew5exxo.cycleLeft);
  var moveRight = doMove($_1jcxgy10hjew5exxo.cycleRight);
  var moveNorth = doMove($_1jcxgy10hjew5exxo.cycleUp);
  var moveSouth = doMove($_1jcxgy10hjew5exxo.cycleDown);
  var getRules$1 = $_canvefwjjew5ex06.constant([
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.LEFT()), $_m08jw10cjew5exw4.west(moveLeft, moveRight)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.RIGHT()), $_m08jw10cjew5exw4.east(moveLeft, moveRight)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.UP()), $_m08jw10cjew5exw4.north(moveNorth)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.DOWN()), $_m08jw10cjew5exw4.south(moveSouth)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
      $_8x0x8g100jew5exs9.isShift,
      $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB())
    ]), handleTab),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
      $_8x0x8g100jew5exs9.isNotShift,
      $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB())
    ]), handleTab),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ESCAPE()), doEscape),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.SPACE().concat($_bu7wavzpjew5exp7.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_canvefwjjew5ex06.constant({});
  var getApis$1 = {};
  var FlatgridType = $_7y2dv0zqjew5exph.typical(schema$2, $_9vwwi310bjew5exvg.flatgrid, getRules$1, getEvents$1, getApis$1, Option.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_5pdvh910ejew5exwa.locateVisible(container, current, selector, $_canvefwjjew5ex06.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_fvrnkhzujew5exr0.cycleBy(index, delta, 0, candidates.length - 1);
      return Option.from(candidates[newIndex]);
    });
  };
  var $_914yir10jjew5exyg = { horizontal: horizontal };

  var schema$3 = [
    $_f9u1aky7jew5exbr.strict('selector'),
    $_f9u1aky7jew5exbr.defaulted('getInitial', Option.none),
    $_f9u1aky7jew5exbr.defaulted('execute', $_e57fps109jew5exua.defaultExecute),
    $_f9u1aky7jew5exbr.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_5q4kn4zxjew5exr5.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_5q4kn4zxjew5exr5.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_914yir10jjew5exyg.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_914yir10jjew5exyg.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : Option.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.LEFT().concat($_bu7wavzpjew5exp7.UP())), doMove$1($_m08jw10cjew5exw4.west(moveLeft$1, moveRight$1))),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.RIGHT().concat($_bu7wavzpjew5exp7.DOWN())), doMove$1($_m08jw10cjew5exw4.east(moveLeft$1, moveRight$1))),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ENTER()), execute$2),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_canvefwjjew5ex06.constant({});
  var getApis$2 = $_canvefwjjew5ex06.constant({});
  var FlowType = $_7y2dv0zqjew5exph.typical(schema$3, $_4hobjhyjjew5exfv.init, getRules$2, getEvents$2, getApis$2, Option.some(focusIn$1));

  var outcome = $_boyhvrx4jew5ex2k.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return Option.from(matrix[rowIndex]).bind(function (row) {
      return Option.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_fvrnkhzujew5exr0.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_fvrnkhzujew5exr0.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_fvrnkhzujew5exr0.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_fvrnkhzujew5exr0.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_fvrnkhzujew5exr0.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_fvrnkhzujew5exr0.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_ed9vbh10ljew5exzd = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$2,
    moveRight: moveRight$2,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_f9u1aky7jew5exbr.strictObjOf('selectors', [
      $_f9u1aky7jew5exbr.strict('row'),
      $_f9u1aky7jew5exbr.strict('cell')
    ]),
    $_f9u1aky7jew5exbr.defaulted('cycles', true),
    $_f9u1aky7jew5exbr.defaulted('previousSelector', Option.none),
    $_f9u1aky7jew5exbr.defaulted('execute', $_e57fps109jew5exua.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_5q4kn4zxjew5exr5.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_g2xew8ytjew5exgp.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_8gfg1pwsjew5ex0r.map(rows, function (row) {
      return $_9ipr2mzvjew5exr1.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_5q4kn4zxjew5exr5.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_9ipr2mzvjew5exr1.descendants(inRow, matrixConfig.selectors().cell());
        return $_5pdvh910ejew5exwa.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_9ipr2mzvjew5exr1.descendants(element, matrixConfig.selectors().row());
          return $_5pdvh910ejew5exwa.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$3 = doMove$2($_ed9vbh10ljew5exzd.cycleLeft, $_ed9vbh10ljew5exzd.moveLeft);
  var moveRight$3 = doMove$2($_ed9vbh10ljew5exzd.cycleRight, $_ed9vbh10ljew5exzd.moveRight);
  var moveNorth$1 = doMove$2($_ed9vbh10ljew5exzd.cycleUp, $_ed9vbh10ljew5exzd.moveUp);
  var moveSouth$1 = doMove$2($_ed9vbh10ljew5exzd.cycleDown, $_ed9vbh10ljew5exzd.moveDown);
  var getRules$3 = $_canvefwjjew5ex06.constant([
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.LEFT()), $_m08jw10cjew5exw4.west(moveLeft$3, moveRight$3)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.RIGHT()), $_m08jw10cjew5exw4.east(moveLeft$3, moveRight$3)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.UP()), $_m08jw10cjew5exw4.north(moveNorth$1)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.DOWN()), $_m08jw10cjew5exw4.south(moveSouth$1)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.SPACE().concat($_bu7wavzpjew5exp7.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_canvefwjjew5ex06.constant({});
  var getApis$3 = $_canvefwjjew5ex06.constant({});
  var MatrixType = $_7y2dv0zqjew5exph.typical(schema$4, $_4hobjhyjjew5exfv.init, getRules$3, getEvents$3, getApis$3, Option.some(focusIn$2));

  var schema$5 = [
    $_f9u1aky7jew5exbr.strict('selector'),
    $_f9u1aky7jew5exbr.defaulted('execute', $_e57fps109jew5exua.defaultExecute),
    $_f9u1aky7jew5exbr.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_5q4kn4zxjew5exr5.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_914yir10jjew5exyg.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_914yir10jjew5exyg.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_m08jw10cjew5exw4.move(moveUp$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_m08jw10cjew5exw4.move(moveDown$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var getRules$4 = $_canvefwjjew5ex06.constant([
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.UP()), $_m08jw10cjew5exw4.move(moveUp$1)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.DOWN()), $_m08jw10cjew5exw4.move(moveDown$1)),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
      $_8x0x8g100jew5exs9.isShift,
      $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB())
    ]), fireShiftTab),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
      $_8x0x8g100jew5exs9.isNotShift,
      $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB())
    ]), fireTab),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ENTER()), execute$4),
    $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_canvefwjjew5ex06.constant({});
  var getApis$4 = $_canvefwjjew5ex06.constant({});
  var MenuType = $_7y2dv0zqjew5exph.typical(schema$5, $_4hobjhyjjew5exfv.init, getRules$4, getEvents$4, getApis$4, Option.some(focusIn$3));

  var schema$6 = [
    $_behq97z6jew5exio.onKeyboardHandler('onSpace'),
    $_behq97z6jew5exio.onKeyboardHandler('onEnter'),
    $_behq97z6jew5exio.onKeyboardHandler('onShiftEnter'),
    $_behq97z6jew5exio.onKeyboardHandler('onLeft'),
    $_behq97z6jew5exio.onKeyboardHandler('onRight'),
    $_behq97z6jew5exio.onKeyboardHandler('onTab'),
    $_behq97z6jew5exio.onKeyboardHandler('onShiftTab'),
    $_behq97z6jew5exio.onKeyboardHandler('onUp'),
    $_behq97z6jew5exio.onKeyboardHandler('onDown'),
    $_behq97z6jew5exio.onKeyboardHandler('onEscape'),
    $_f9u1aky7jew5exbr.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.SPACE()), executeInfo.onSpace()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
        $_8x0x8g100jew5exs9.isNotShift,
        $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ENTER())
      ]), executeInfo.onEnter()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
        $_8x0x8g100jew5exs9.isShift,
        $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
        $_8x0x8g100jew5exs9.isShift,
        $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB())
      ]), executeInfo.onShiftTab()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.and([
        $_8x0x8g100jew5exs9.isNotShift,
        $_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.TAB())
      ]), executeInfo.onTab()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.UP()), executeInfo.onUp()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.DOWN()), executeInfo.onDown()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.LEFT()), executeInfo.onLeft()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.RIGHT()), executeInfo.onRight()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.SPACE()), executeInfo.onSpace()),
      $_adknlzzzjew5exrx.rule($_8x0x8g100jew5exs9.inSet($_bu7wavzpjew5exp7.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_canvefwjjew5ex06.constant({});
  var getApis$5 = $_canvefwjjew5ex06.constant({});
  var SpecialType = $_7y2dv0zqjew5exph.typical(schema$6, $_4hobjhyjjew5exfv.init, getRules$5, getEvents$5, getApis$5, Option.some(focusIn$4));

  var $_ejfd8jzmjew5exno = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_28kh8wy2jew5ex8l.createModes({
    branchKey: 'mode',
    branches: $_ejfd8jzmjew5exno,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_2kiiw5xsjew5ex5p.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_9vwwi310bjew5exvg
  });

  var field$1 = function (name, forbidden) {
    return $_f9u1aky7jew5exbr.defaultedObjOf(name, {}, $_8gfg1pwsjew5ex0r.map(forbidden, function (f) {
      return $_f9u1aky7jew5exbr.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_f9u1aky7jew5exbr.state('dump', $_canvefwjjew5ex06.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_f340m10ojew5ey0j = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_cvl6pz10rjew5ey20 = { generate: generate$1 };

  var premadeTag = $_cvl6pz10rjew5ey20.generate('alloy-premade');
  var apiConfig = $_cvl6pz10rjew5ey20.generate('api');
  var premade = function (comp) {
    return $_2kiiw5xsjew5ex5p.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_2kiiw5xsjew5ex5p.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_3knckrygjew5exeo.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_25b61210qjew5ey1u = {
    apiConfig: $_canvefwjjew5ex06.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_9ui8pqxwjew5ex6u.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_f9u1aky7jew5exbr.defaulted('factory', { sketch: $_canvefwjjew5ex06.identity });
  var fSchema = $_f9u1aky7jew5exbr.defaulted('schema', []);
  var fName = $_f9u1aky7jew5exbr.strict('name');
  var fPname = $_f9u1aky7jew5exbr.field('pname', 'pname', $_cbiwrgy8jew5exbz.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_cvl6pz10rjew5ey20.generate(typeSpec.name) + '>';
  }), $_bf8n0dyejew5exeb.anyValue());
  var fDefaults = $_f9u1aky7jew5exbr.defaulted('defaults', $_canvefwjjew5ex06.constant({}));
  var fOverrides = $_f9u1aky7jew5exbr.defaulted('overrides', $_canvefwjjew5ex06.constant({}));
  var requiredSpec = $_bf8n0dyejew5exeb.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_bf8n0dyejew5exeb.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_bf8n0dyejew5exeb.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_bf8n0dyejew5exeb.objOf([
    fFactory,
    fSchema,
    fName,
    $_f9u1aky7jew5exbr.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold(Option.some, Option.none, Option.some, Option.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_canvefwjjew5ex06.identity, $_canvefwjjew5ex06.identity, $_canvefwjjew5ex06.identity, $_canvefwjjew5ex06.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_bf8n0dyejew5exeb.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_aecs1b10vjew5ey49 = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_canvefwjjew5ex06.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_9ui8pqxwjew5ex6u.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_8gfg1pwsjew5ex0r.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_canvefwjjew5ex06.constant(compSpec));
    return $_2kiiw5xsjew5ex5p.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_4355kjx0jew5ex1g.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_3mv3mdydjew5exdu.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_canvefwjjew5ex06.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_2kiiw5xsjew5ex5p.readOptFrom(value, 'components').getOr([]);
      var substituted = $_8gfg1pwsjew5ex0r.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_dq5f6lwyjew5ex17.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_8gfg1pwsjew5ex0r.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_canvefwjjew5ex06.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_4355kjx0jew5ex1g.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_4355kjx0jew5ex1g.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_3mv3mdydjew5exdu.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_45mjry10wjew5ey4x = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_canvefwjjew5ex06.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_dq5f6lwyjew5ex17.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_2kiiw5xsjew5ex5p.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_8gfg1pwsjew5ex0r.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_45mjry10wjew5ey4x.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_canvefwjjew5ex06.constant(combine(detail, data, partSpec[$_aecs1b10vjew5ey49.original()]()));
      }, function (data) {
        internals[data.pname()] = $_45mjry10wjew5ey4x.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_45mjry10wjew5ey4x.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_8gfg1pwsjew5ex0r.map(units, function (u) {
            return data.factory().sketch($_dq5f6lwyjew5ex17.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_canvefwjjew5ex06.constant(internals),
      externals: $_canvefwjjew5ex06.constant(externals)
    };
  };
  var $_1pcz8b10ujew5ey3v = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_8gfg1pwsjew5ex0r.each(parts, function (part) {
      $_aecs1b10vjew5ey49.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_bf8n0dyejew5exeb.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_bf8n0dyejew5exeb.objOf(np.schema()), config);
          return $_dq5f6lwyjew5ex17.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_45mjry10wjew5ey4x.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_45mjry10wjew5ey4x.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_8gfg1pwsjew5ex0r.bind(parts, function (part) {
      return part.fold(Option.none, Option.some, Option.none, Option.none).map(function (data) {
        return $_f9u1aky7jew5exbr.strictObjOf(data.name(), data.schema().concat([$_behq97z6jew5exio.snapshot($_aecs1b10vjew5ey49.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_8gfg1pwsjew5ex0r.map(parts, $_aecs1b10vjew5ey49.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_1pcz8b10ujew5ey3v.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_45mjry10wjew5ey4x.substitutePlaces(Option.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_8gfg1pwsjew5ex0r.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_4355kjx0jew5ex1g.map(r, $_canvefwjjew5ex06.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_4355kjx0jew5ex1g.map(detail.partUids(), function (pUid, k) {
      return $_canvefwjjew5ex06.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_8gfg1pwsjew5ex0r.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_4355kjx0jew5ex1g.map(r, $_canvefwjjew5ex06.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_2kiiw5xsjew5ex5p.wrapAll($_8gfg1pwsjew5ex0r.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_f9u1aky7jew5exbr.field('partUids', 'partUids', $_cbiwrgy8jew5exbz.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_bf8n0dyejew5exeb.anyValue());
  };
  var $_a8k3zw10tjew5ey30 = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$1 = 'alloy-id-';
  var idAttr = 'data-alloy-id';
  var $_3dw9de10yjew5ey60 = {
    prefix: $_canvefwjjew5ex06.constant(prefix$1),
    idAttr: $_canvefwjjew5ex06.constant(idAttr)
  };

  var prefix$2 = $_3dw9de10yjew5ey60.prefix();
  var idAttr$1 = $_3dw9de10yjew5ey60.idAttr();
  var write = function (label, elem) {
    var id = $_cvl6pz10rjew5ey20.generate(prefix$2 + label);
    $_cwmn4ixrjew5ex55.set(elem, idAttr$1, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_cwmn4ixrjew5ex55.set(elem, idAttr$1, uid);
  };
  var read$2 = function (elem) {
    var id = $_3s4ecrxkjew5ex3m.isElement(elem) ? $_cwmn4ixrjew5ex55.get(elem, idAttr$1) : null;
    return Option.from(id);
  };
  var find$3 = function (container, id) {
    return $_5q4kn4zxjew5exr5.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_cvl6pz10rjew5ey20.generate(prefix);
  };
  var revoke = function (elem) {
    $_cwmn4ixrjew5ex55.remove(elem, idAttr$1);
  };
  var $_8o9vo010xjew5ey5l = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_canvefwjjew5ex06.constant(idAttr$1)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_behq97z6jew5exio.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_f9u1aky7jew5exbr.strictObjOf('parts', $_8gfg1pwsjew5ex0r.flatten([
      $_8gfg1pwsjew5ex0r.map(partNames, $_f9u1aky7jew5exbr.strict),
      $_8gfg1pwsjew5ex0r.map(optPartNames, function (optPart) {
        return $_f9u1aky7jew5exbr.defaulted(optPart, $_45mjry10wjew5ey4x.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_f9u1aky7jew5exbr.state('partUids', function (spec) {
      if (!$_2kiiw5xsjew5ex5p.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_3mv3mdydjew5exdu.stringify(spec, null, 2));
      }
      var uids = $_4355kjx0jew5ex1g.map(spec.parts, function (v, k) {
        return $_2kiiw5xsjew5ex5p.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_f9u1aky7jew5exbr.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_f9u1aky7jew5exbr.strict('uid'),
      $_f9u1aky7jew5exbr.defaulted('dom', {}),
      $_f9u1aky7jew5exbr.defaulted('components', []),
      $_behq97z6jew5exio.snapshot('originalSpec'),
      $_f9u1aky7jew5exbr.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_bf8n0dyejew5exeb.asRawOrDie(label + ' [SpecSchema]', $_bf8n0dyejew5exeb.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_bf8n0dyejew5exeb.asStructOrDie(label + ' [SpecSchema]', $_bf8n0dyejew5exeb.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_dq5f6lwyjew5ex17.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_dq5f6lwyjew5ex17.deepMerge(original, behaviours);
  };
  var $_1v292x10zjew5ey67 = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_1v292x10zjew5ey67.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_dq5f6lwyjew5ex17.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_2kiiw5xsjew5ex5p.wrap(owner, spec) });
  };
  var composite = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_a8k3zw10tjew5ey30.schemas(partTypes);
    var partUidsSchema = $_a8k3zw10tjew5ey30.defaultUidsSchema(partTypes);
    var detail = $_1v292x10zjew5ey67.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_a8k3zw10tjew5ey30.substitutes(owner, detail, partTypes);
    var components = $_a8k3zw10tjew5ey30.components(owner, detail, subs.internals());
    return $_dq5f6lwyjew5ex17.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_2kiiw5xsjew5ex5p.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_dq5f6lwyjew5ex17.deepMerge({ uid: $_8o9vo010xjew5ey5l.generate('uid') }, spec);
  };
  var $_3ik5ut10sjew5ey2b = {
    supplyUid: supplyUid,
    single: single,
    composite: composite
  };

  var singleSchema = $_bf8n0dyejew5exeb.objOfOnly([
    $_f9u1aky7jew5exbr.strict('name'),
    $_f9u1aky7jew5exbr.strict('factory'),
    $_f9u1aky7jew5exbr.strict('configFields'),
    $_f9u1aky7jew5exbr.defaulted('apis', {}),
    $_f9u1aky7jew5exbr.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_bf8n0dyejew5exeb.objOfOnly([
    $_f9u1aky7jew5exbr.strict('name'),
    $_f9u1aky7jew5exbr.strict('factory'),
    $_f9u1aky7jew5exbr.strict('configFields'),
    $_f9u1aky7jew5exbr.strict('partFields'),
    $_f9u1aky7jew5exbr.defaulted('apis', {}),
    $_f9u1aky7jew5exbr.defaulted('extraApis', {})
  ]);
  var single$1 = function (rawConfig) {
    var config = $_bf8n0dyejew5exeb.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_3ik5ut10sjew5ey2b.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_4355kjx0jew5ex1g.map(config.apis, $_25b61210qjew5ey1u.makeApi);
    var extraApis = $_4355kjx0jew5ex1g.map(config.extraApis, function (f, k) {
      return $_3knckrygjew5exeo.markAsExtraApi(f, k);
    });
    return $_dq5f6lwyjew5ex17.deepMerge({
      name: $_canvefwjjew5ex06.constant(config.name),
      partFields: $_canvefwjjew5ex06.constant([]),
      configFields: $_canvefwjjew5ex06.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite$1 = function (rawConfig) {
    var config = $_bf8n0dyejew5exeb.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_3ik5ut10sjew5ey2b.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_a8k3zw10tjew5ey30.generate(config.name, config.partFields);
    var apis = $_4355kjx0jew5ex1g.map(config.apis, $_25b61210qjew5ey1u.makeApi);
    var extraApis = $_4355kjx0jew5ex1g.map(config.extraApis, function (f, k) {
      return $_3knckrygjew5exeo.markAsExtraApi(f, k);
    });
    return $_dq5f6lwyjew5ex17.deepMerge({
      name: $_canvefwjjew5ex06.constant(config.name),
      partFields: $_canvefwjjew5ex06.constant(config.partFields),
      configFields: $_canvefwjjew5ex06.constant(config.configFields),
      sketch: sketch,
      parts: $_canvefwjjew5ex06.constant(parts)
    }, apis, extraApis);
  };
  var $_alx4m710pjew5ey14 = {
    single: single$1,
    composite: composite$1
  };

  var events$3 = function (optAction) {
    var executeHandler = function (action) {
      return $_cd3e46y4jew5exah.run($_7v4jjhwhjew5ewzm.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_8ij4bdwgjew5ewz4.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_5em8cowkjew5ex09.detect().deviceType.isTouch() ? [$_cd3e46y4jew5exah.run($_7v4jjhwhjew5ewzm.tap(), onClick)] : [
      $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.click(), onClick),
      $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.mousedown(), onMousedown)
    ];
    return $_cd3e46y4jew5exah.derive($_8gfg1pwsjew5ex0r.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_c70swf110jew5ey6o = { events: events$3 };

  var factory = function (detail, spec) {
    var events = $_c70swf110jew5ey6o.events(detail.action());
    var optType = $_2kiiw5xsjew5ex5p.readOptFrom(detail.dom(), 'attributes').bind($_2kiiw5xsjew5ex5p.readOpt('type'));
    var optTag = $_2kiiw5xsjew5ex5p.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_f340m10ojew5ey0j.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_dq5f6lwyjew5ex17.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_alx4m710pjew5ey14.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_f9u1aky7jew5exbr.defaulted('uid', undefined),
      $_f9u1aky7jew5exbr.strict('dom'),
      $_f9u1aky7jew5exbr.defaulted('components', []),
      $_f340m10ojew5ey0j.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_f9u1aky7jew5exbr.option('action'),
      $_f9u1aky7jew5exbr.option('role'),
      $_f9u1aky7jew5exbr.defaulted('eventOrder', {})
    ]
  });

  var exhibit$2 = function (base, unselectConfig) {
    return $_d2rguyhjew5exf6.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$4 = function (unselectConfig) {
    return $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.abort($_6at0t9wijew5ex03.selectstart(), $_canvefwjjew5ex06.constant(true))]);
  };
  var $_38gpaw112jew5ey76 = {
    events: events$4,
    exhibit: exhibit$2
  };

  var Unselecting = $_28kh8wy2jew5ex8l.create({
    fields: [],
    name: 'unselecting',
    active: $_38gpaw112jew5ey76
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_8gfg1pwsjew5ex0r.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_dq5f6lwyjew5ex17.deepMerge(b, $_2kiiw5xsjew5ex5p.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_6l42pqxfjew5ex38.fromHtml(html);
    var children = $_ggckh3x3jew5ex2a.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_bg62awxojew5ex4y.get(elem) };
    return $_dq5f6lwyjew5ex17.deepMerge({
      tag: $_3s4ecrxkjew5ex3m.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_dq5f6lwyjew5ex17.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_2z173n114jew5ey7t = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_5mrdhqwvjew5ex13.supplant(rawHtml, { prefix: $_chb5sszejew5exl7.prefix() });
    return $_2z173n114jew5ey7t.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_wki84113jew5ey7a = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_28kh8wy2jew5ex8l.derive([
      Toggling.config({
        toggleClass: $_chb5sszejew5exl7.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_5e9sbezdjew5exl4.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_wki84113jew5ey7a.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_5slfa1zfjew5exl9 = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_9kb13i119jew5eya8 = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch = $_5em8cowkjew5ex09.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch && evt.touches !== undefined && evt.touches.length === 1)
      return Option.some(evt.touches[0]);
    else if (isTouch && evt.touches !== undefined)
      return Option.none();
    else if (!isTouch && evt.clientX !== undefined)
      return Option.some(evt);
    else
      return Option.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_8ij4bdwgjew5ewz4.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_9kb13i119jew5eya8.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_9kb13i119jew5eya8.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_9kb13i119jew5eya8.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_2mqoh9118jew5ey9s = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_canvefwjjew5ex06.constant(changeEvent)
  };

  var platform = $_5em8cowkjew5ex09.detect();
  var isTouch$1 = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_aecs1b10vjew5ey49.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.runActionExtra($_6at0t9wijew5ex03.touchstart(), action, [detail])]);
        var mouseEvents = $_cd3e46y4jew5exah.derive([
          $_cd3e46y4jew5exah.runActionExtra($_6at0t9wijew5ex03.mousedown(), action, [detail]),
          $_cd3e46y4jew5exah.runActionExtra($_6at0t9wijew5ex03.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch$1 ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_2mqoh9118jew5ey9s.setToLedge);
  var redgePart = edgePart('right', $_2mqoh9118jew5ey9s.setToRedge);
  var thumbPart = $_aecs1b10vjew5ey49.required({
    name: 'thumb',
    defaults: $_canvefwjjew5ex06.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_cd3e46y4jew5exah.derive([
          $_cd3e46y4jew5exah.redirectToPart($_6at0t9wijew5ex03.touchstart(), detail, 'spectrum'),
          $_cd3e46y4jew5exah.redirectToPart($_6at0t9wijew5ex03.touchmove(), detail, 'spectrum'),
          $_cd3e46y4jew5exah.redirectToPart($_6at0t9wijew5ex03.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_aecs1b10vjew5ey49.required({
    schema: [$_f9u1aky7jew5exbr.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_2mqoh9118jew5ey9s.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_cd3e46y4jew5exah.derive([
        $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.touchstart(), moveToX),
        $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.touchmove(), moveToX)
      ]);
      var mouseEvents = $_cd3e46y4jew5exah.derive([
        $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.mousedown(), moveToX),
        $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_28kh8wy2jew5ex8l.derive(isTouch$1 ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_2mqoh9118jew5ey9s.moveLeft(spectrum, detail);
              return Option.some(true);
            },
            onRight: function (spectrum) {
              $_2mqoh9118jew5ey9s.moveRight(spectrum, detail);
              return Option.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch$1 ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_9zm1sg11djew5eybr = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_cd3e46y4jew5exah.runOnAttached(function (comp, se) {
        $_9zm1sg11djew5eybr.onLoad(comp, repConfig, repState);
      }),
      $_cd3e46y4jew5exah.runOnDetached(function (comp, se) {
        $_9zm1sg11djew5eybr.onUnload(comp, repConfig, repState);
      })
    ] : [$_cst00oy3jew5ex9e.loadEvent(repConfig, repState, $_9zm1sg11djew5eybr.onLoad)];
    return $_cd3e46y4jew5exah.derive(es);
  };
  var $_c4sig011cjew5eybl = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_1wjgux11gjew5eyco = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_2kiiw5xsjew5ex5p.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_f9u1aky7jew5exbr.option('initialValue'),
    $_f9u1aky7jew5exbr.strict('getFallbackEntry'),
    $_f9u1aky7jew5exbr.strict('getDataKey'),
    $_f9u1aky7jew5exbr.strict('setData'),
    $_behq97z6jew5exio.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_1wjgux11gjew5eyco.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_f9u1aky7jew5exbr.strict('getValue'),
    $_f9u1aky7jew5exbr.defaulted('setValue', $_canvefwjjew5ex06.noop),
    $_f9u1aky7jew5exbr.option('initialValue'),
    $_behq97z6jew5exio.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_canvefwjjew5ex06.noop,
      state: $_4hobjhyjjew5exfv.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_f9u1aky7jew5exbr.option('initialValue'),
    $_behq97z6jew5exio.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_1wjgux11gjew5eyco.memory
    })
  ];

  var RepresentSchema = [
    $_f9u1aky7jew5exbr.defaultedOf('store', { mode: 'memory' }, $_bf8n0dyejew5exeb.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_behq97z6jew5exio.onHandler('onSetValue'),
    $_f9u1aky7jew5exbr.defaulted('resetOnDom', false)
  ];

  var me = $_28kh8wy2jew5ex8l.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_c4sig011cjew5eybl,
    apis: $_9zm1sg11djew5eybr,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_1wjgux11gjew5eyco
  });

  var isTouch$2 = $_5em8cowkjew5ex09.detect().deviceType.isTouch();
  var SliderSchema = [
    $_f9u1aky7jew5exbr.strict('min'),
    $_f9u1aky7jew5exbr.strict('max'),
    $_f9u1aky7jew5exbr.defaulted('stepSize', 1),
    $_f9u1aky7jew5exbr.defaulted('onChange', $_canvefwjjew5ex06.noop),
    $_f9u1aky7jew5exbr.defaulted('onInit', $_canvefwjjew5ex06.noop),
    $_f9u1aky7jew5exbr.defaulted('onDragStart', $_canvefwjjew5ex06.noop),
    $_f9u1aky7jew5exbr.defaulted('onDragEnd', $_canvefwjjew5ex06.noop),
    $_f9u1aky7jew5exbr.defaulted('snapToGrid', false),
    $_f9u1aky7jew5exbr.option('snapStart'),
    $_f9u1aky7jew5exbr.strict('getInitialValue'),
    $_f340m10ojew5ey0j.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_f9u1aky7jew5exbr.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_f9u1aky7jew5exbr.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_4njywe103jew5exsr.set(element, 'max-width', absMax + 'px');
  };
  var $_3zjly311kjew5eye1 = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_5em8cowkjew5ex09.detect().deviceType.isTouch();
  var sketch$1 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_a8k3zw10tjew5ey30.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_a8k3zw10tjew5ey30.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_a8k3zw10tjew5ey30.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_a8k3zw10tjew5ey30.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_3zjly311kjew5eye1.get(thumb.element()) / 2;
      $_4njywe103jew5exsr.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_4njywe103jew5exsr.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return Option.some(true);
      } else {
        return Option.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive($_8gfg1pwsjew5ex0r.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_a8k3zw10tjew5ey30.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_canvefwjjew5ex06.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_f340m10ojew5ey0j.get(detail.sliderBehaviours())),
      events: $_cd3e46y4jew5exah.derive([
        $_cd3e46y4jew5exah.run($_2mqoh9118jew5ey9s.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_cd3e46y4jew5exah.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_5hycip11jjew5eydl = { sketch: sketch$1 };

  var Slider = $_alx4m710pjew5ey14.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_5hycip11jjew5eydl.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_5slfa1zfjew5exl9.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_5dqxv611ljew5eye2 = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_4njywe103jew5exsr.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_4njywe103jew5exsr.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_wki84113jew5ey7a.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_wki84113jew5ey7a.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_28kh8wy2jew5ex8l.derive([Toggling.config({ toggleClass: $_chb5sszejew5exl7.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_wki84113jew5ey7a.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_28kh8wy2jew5ex8l.derive([Toggling.config({ toggleClass: $_chb5sszejew5exl7.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_28kh8wy2jew5ex8l.derive([$_5e9sbezdjew5exl4.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$2 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_5dqxv611ljew5eye2.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_beh6kz115jew5ey87 = {
    makeItems: makeItems,
    sketch: sketch$2
  };

  var schema$7 = $_bf8n0dyejew5exeb.objOfOnly([
    $_f9u1aky7jew5exbr.strict('getInitialValue'),
    $_f9u1aky7jew5exbr.strict('onChange'),
    $_f9u1aky7jew5exbr.strict('category'),
    $_f9u1aky7jew5exbr.strict('sizes')
  ]);
  var sketch$3 = function (rawSpec) {
    var spec = $_bf8n0dyejew5exeb.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_chb5sszejew5exl7.resolve('slider-' + spec.category + '-size-container'),
          $_chb5sszejew5exl7.resolve('slider'),
          $_chb5sszejew5exl7.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_28kh8wy2jew5ex8l.derive([$_5e9sbezdjew5exl4.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_wki84113jew5ey7a.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_28kh8wy2jew5ex8l.derive([Toggling.config({ toggleClass: $_chb5sszejew5exl7.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_fnx3hd11njew5eye4 = { sketch: sketch$3 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_d6mwwbwzjew5ex1e.isFunction(isRoot) ? isRoot : $_canvefwjjew5ex06.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_6l42pqxfjew5ex38.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? Option.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_33ryzl11pjew5eyg3 = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return Option.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_8gfg1pwsjew5ex0r.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_3s4ecrxkjew5ex3m.isElement(rawStart) ? Option.some(rawStart) : $_ggckh3x3jew5ex2a.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_33ryzl11pjew5eyg3.closest(start, function (elem) {
        return $_4njywe103jew5exsr.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_4njywe103jew5exsr.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_6l42pqxfjew5ex38.fromDom(node);
    var root = $_6l42pqxfjew5ex38.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_4ki9avx9jew5ex2r.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_8gfg1pwsjew5ex0r.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_1svjha11ojew5eyeb = {
    candidates: $_canvefwjjew5ex06.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_1svjha11ojew5eyeb.candidates();
  var makeSlider$1 = function (spec) {
    return $_fnx3hd11njew5eye4.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_wki84113jew5ey7a.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_wki84113jew5ey7a.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$4 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_1svjha11ojew5eyeb.apply(editor, value);
      },
      getInitialValue: function () {
        return $_1svjha11ojew5eyeb.get(editor);
      }
    };
    return $_5dqxv611ljew5eye2.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_ccnx3w11mjew5eye3 = {
    makeItems: makeItems$1,
    sketch: sketch$4
  };

  var record = function (spec) {
    var uid = $_2kiiw5xsjew5ex5p.hasKey(spec, 'uid') ? spec.uid : $_8o9vo010xjew5ey5l.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold(Option.none, Option.some);
    };
    var asSpec = function () {
      return $_dq5f6lwyjew5ex17.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_dpxqkh11rjew5eyi0 = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_enp4c111ujew5eyio = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_dhq5v811vjew5eyiq = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  function Blob (parts, properties) {
    var f = $_a8qo8dxbjew5ex2z.getOrDie('Blob');
    return new f(parts, properties);
  }

  function FileReader () {
    var f = $_a8qo8dxbjew5ex2z.getOrDie('FileReader');
    return new f();
  }

  function Uint8Array (arr) {
    var f = $_a8qo8dxbjew5ex2z.getOrDie('Uint8Array');
    return new f(arr);
  }

  var requestAnimationFrame = function (callback) {
    var f = $_a8qo8dxbjew5ex2z.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_a8qo8dxbjew5ex2z.getOrDie('atob');
    return f(base64);
  };
  var $_2a1iaf120jew5eyix = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function imageToBlob(image) {
    var src = image.src;
    if (src.indexOf('data:') === 0) {
      return dataUriToBlob(src);
    }
    return anyUriToBlob(src);
  }
  function blobToImage(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return Option.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_2a1iaf120jew5eyix.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return Option.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_enp4c111ujew5eyio.create($_dhq5v811vjew5eyiq.getWidth(image), $_dhq5v811vjew5eyiq.getHeight(image));
      context = $_enp4c111ujew5eyio.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToArrayBuffer(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(blob);
    });
  }
  function blobToBase64(blob) {
    return blobToDataUri(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_34v0zn11tjew5eyie = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToArrayBuffer: blobToArrayBuffer,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob
  };

  var blobToImage$1 = function (image) {
    return $_34v0zn11tjew5eyie.blobToImage(image);
  };
  var imageToBlob$1 = function (blob) {
    return $_34v0zn11tjew5eyie.imageToBlob(blob);
  };
  var blobToDataUri$1 = function (blob) {
    return $_34v0zn11tjew5eyie.blobToDataUri(blob);
  };
  var blobToBase64$1 = function (blob) {
    return $_34v0zn11tjew5eyie.blobToBase64(blob);
  };
  var dataUriToBlobSync$1 = function (uri) {
    return $_34v0zn11tjew5eyie.dataUriToBlobSync(uri);
  };
  var uriToBlob$1 = function (uri) {
    return Option.from($_34v0zn11tjew5eyie.uriToBlob(uri));
  };
  var $_ak8m811sjew5eyia = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    uriToBlob: uriToBlob$1
  };

  var addImage = function (editor, blob) {
    $_ak8m811sjew5eyia.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_cvl6pz10rjew5ey20.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return Option.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_dpxqkh11rjew5eyi0.record({
      dom: pickerDom,
      events: $_cd3e46y4jew5exah.derive([
        $_cd3e46y4jew5exah.cutter($_6at0t9wijew5ex03.click()),
        $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_wki84113jew5ey7a.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_7wjnf411qjew5eyge = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_eif82k123jew5eyjb = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: Option.none()
    };
  };
  var fromLink = function (link) {
    var text = $_eif82k123jew5eyjb.get(link);
    var url = $_cwmn4ixrjew5ex55.get(link, 'href');
    var title = $_cwmn4ixrjew5ex55.get(link, 'title');
    var target = $_cwmn4ixrjew5ex55.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: Option.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_cwmn4ixrjew5ex55.get(link, 'href');
    var prevText = $_eif82k123jew5eyjb.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? Option.some(url) : Option.none();
    }, Option.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_canvefwjjew5ex06.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_canvefwjjew5ex06.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_cwmn4ixrjew5ex55.setAll(link, attrs);
        text.each(function (newText) {
          $_eif82k123jew5eyjb.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_6l42pqxfjew5ex38.fromDom(editor.selection.getStart());
    return $_5q4kn4zxjew5exr5.closest(start, 'a');
  };
  var $_9nvx7b122jew5eyj3 = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var platform$1 = $_5em8cowkjew5ex09.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_canvefwjjew5ex06.apply;
    wrapper(f, editor);
  };
  var $_ct0xd5124jew5eyjc = { forAndroid: forAndroid };

  var events$6 = function (name, eventHandlers) {
    var events = $_cd3e46y4jew5exah.derive(eventHandlers);
    return $_28kh8wy2jew5ex8l.create({
      fields: [$_f9u1aky7jew5exbr.strict('enabled')],
      name: name,
      active: { events: $_canvefwjjew5ex06.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_canvefwjjew5ex06.constant({}),
        initialConfig: {},
        state: $_28kh8wy2jew5ex8l.noState()
      }
    };
  };
  var $_8macs2126jew5eyk7 = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_9yqk40128jew5eykc = { getCurrent: getCurrent };

  var ComposeSchema = [$_f9u1aky7jew5exbr.strict('find')];

  var Composing = $_28kh8wy2jew5ex8l.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_9yqk40128jew5eykc
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_dq5f6lwyjew5ex17.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_f340m10ojew5ey0j.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_alx4m710pjew5ey14.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_f9u1aky7jew5exbr.defaulted('components', []),
      $_f340m10ojew5ey0j.field('containerBehaviours', []),
      $_f9u1aky7jew5exbr.defaulted('events', {}),
      $_f9u1aky7jew5exbr.defaulted('domModification', {}),
      $_f9u1aky7jew5exbr.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: Option.some })
      ]), $_f340m10ojew5ey0j.get(detail.dataBehaviours())),
      events: $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_alx4m710pjew5ey14.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_f9u1aky7jew5exbr.strict('uid'),
      $_f9u1aky7jew5exbr.strict('dom'),
      $_f9u1aky7jew5exbr.strict('getInitialValue'),
      $_f340m10ojew5ey0j.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_e5gboj12ejew5eyly = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_f9u1aky7jew5exbr.option('data'),
    $_f9u1aky7jew5exbr.defaulted('inputAttributes', {}),
    $_f9u1aky7jew5exbr.defaulted('inputStyles', {}),
    $_f9u1aky7jew5exbr.defaulted('type', 'input'),
    $_f9u1aky7jew5exbr.defaulted('tag', 'input'),
    $_f9u1aky7jew5exbr.defaulted('inputClasses', []),
    $_behq97z6jew5exio.onHandler('onSetValue'),
    $_f9u1aky7jew5exbr.defaulted('styles', {}),
    $_f9u1aky7jew5exbr.option('placeholder'),
    $_f9u1aky7jew5exbr.defaulted('eventOrder', {}),
    $_f340m10ojew5ey0j.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_f9u1aky7jew5exbr.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_e5gboj12ejew5eyly.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_e5gboj12ejew5eyly.get(input.element());
            if (current !== data) {
              $_e5gboj12ejew5eyly.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_canvefwjjew5ex06.noop : function (component) {
          var input = component.element();
          var value = $_e5gboj12ejew5eyly.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_f340m10ojew5ey0j.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_dq5f6lwyjew5ex17.deepMerge($_2kiiw5xsjew5ex5p.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_8p89in12djew5eylp = {
    schema: $_canvefwjjew5ex06.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_8p89in12djew5eylp.dom(detail),
      components: [],
      behaviours: $_8p89in12djew5eylp.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_alx4m710pjew5ey14.single({
    name: 'Input',
    configFields: $_8p89in12djew5eylp.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_d2rguyhjew5exf6.nu({
      attributes: $_2kiiw5xsjew5ex5p.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_gbdffw12gjew5eym0 = { exhibit: exhibit$3 };

  var TabstopSchema = [$_f9u1aky7jew5exbr.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_28kh8wy2jew5ex8l.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_gbdffw12gjew5eym0
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_dpxqkh11rjew5eyi0.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_8ij4bdwgjew5ewz4.emit(input, $_6at0t9wijew5ex03.input());
      },
      inputBehaviours: $_28kh8wy2jew5ex8l.derive([
        Composing.config({ find: Option.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_dpxqkh11rjew5eyi0.record(Button.sketch({
      dom: $_wki84113jew5ey7a.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_28kh8wy2jew5ex8l.derive([
          Toggling.config({ toggleClass: $_chb5sszejew5exl7.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return Option.some(inputSpec.get(comp));
            }
          }),
          $_8macs2126jew5eyk7.config(clearInputBehaviour, [$_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return Option.none();
        }
      })
    };
  };
  var $_awcwbt125jew5eyjf = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_8gfg1pwsjew5ex0r.contains(nativeDisabled, $_3s4ecrxkjew5ex3m.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_cwmn4ixrjew5ex55.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_cwmn4ixrjew5ex55.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_cwmn4ixrjew5ex55.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_cwmn4ixrjew5ex55.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_cwmn4ixrjew5ex55.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_cwmn4ixrjew5ex55.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_bn0n6qynjew5exgc.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_bn0n6qynjew5exgc.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_cs7m3a12ljew5eynu = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_d2rguyhjew5exf6.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_8gfg1pwsjew5ex0r.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_cd3e46y4jew5exah.derive([
      $_cd3e46y4jew5exah.abort($_7v4jjhwhjew5ewzm.execute(), function (component, simulatedEvent) {
        return $_cs7m3a12ljew5eynu.isDisabled(component, disableConfig, disableState);
      }),
      $_cst00oy3jew5ex9e.loadEvent(disableConfig, disableState, $_cs7m3a12ljew5eynu.onLoad)
    ]);
  };
  var $_caqo9y12kjew5eyni = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_f9u1aky7jew5exbr.defaulted('disabled', false),
    $_f9u1aky7jew5exbr.option('disableClass')
  ];

  var Disabling = $_28kh8wy2jew5ex8l.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_caqo9y12kjew5eyni,
    apis: $_cs7m3a12ljew5eynu
  });

  var owner$1 = 'form';
  var schema$9 = [$_f340m10ojew5ey0j.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$6 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_a8k3zw10tjew5ey30.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_8gfg1pwsjew5ex0r.map(partNames, function (n) {
      return $_aecs1b10vjew5ey49.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_3ik5ut10sjew5ey2b.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_dq5f6lwyjew5ex17.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_a8k3zw10tjew5ey30.getAllParts(form, detail);
              return $_4355kjx0jew5ex1g.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_4355kjx0jew5ex1g.each(values, function (newValue, key) {
                $_a8k3zw10tjew5ey30.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_f340m10ojew5ey0j.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_a8k3zw10tjew5ey30.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_ez7ps212njew5eyol = {
    getField: $_25b61210qjew5ey1u.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$6
  };

  var revocable = function (doRevoke) {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell(Option.none());
    var clear = function () {
      subject.set(Option.none());
    };
    var set = function (s) {
      subject.set(Option.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_a7ua5y12ojew5eyp8 = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_eboj3012pjew5eypb = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_bf8n0dyejew5exeb.objOf([
      $_f9u1aky7jew5exbr.strict('fields'),
      $_f9u1aky7jew5exbr.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_f9u1aky7jew5exbr.strict('onExecute'),
      $_f9u1aky7jew5exbr.strict('getInitialValue'),
      $_f9u1aky7jew5exbr.state('state', function () {
        return {
          dialogSwipeState: $_a7ua5y12ojew5eyp8.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_bf8n0dyejew5exeb.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_wki84113jew5ey7a.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_8ij4bdwgjew5ewz4.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_28kh8wy2jew5ex8l.derive([Disabling.config({
            disableClass: $_chb5sszejew5exl7.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_5q4kn4zxjew5exr5.descendant(dialog.element(), '.' + $_chb5sszejew5exl7.resolve('serialised-dialog-chain')).each(function (parent) {
        $_4njywe103jew5exsr.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_9ipr2mzvjew5exr1.descendants(dialog.element(), '.' + $_chb5sszejew5exl7.resolve('serialised-dialog-screen'));
      $_5q4kn4zxjew5exr5.descendant(dialog.element(), '.' + $_chb5sszejew5exl7.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_4njywe103jew5exsr.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_3zjly311kjew5eye1.get(screens[0]);
            $_4njywe103jew5exsr.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_9ipr2mzvjew5exr1.descendants(dialog.element(), 'input');
      var optInput = Option.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_8ij4bdwgjew5ewz4.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_dpxqkh11rjew5eyi0.record($_ez7ps212njew5eyol.sketch(function (parts) {
      return {
        dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_8gfg1pwsjew5ex0r.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_8gfg1pwsjew5ex0r.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_28kh8wy2jew5ex8l.derive([
          $_5e9sbezdjew5exl4.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return Option.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return Option.some(true);
            }
          }),
          $_8macs2126jew5eyk7.config(formAdhocEvents, [
            $_cd3e46y4jew5exah.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_cd3e46y4jew5exah.runOnExecute(spec.onExecute),
            $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_cd3e46y4jew5exah.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_dpxqkh11rjew5eyi0.record({
      dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_28kh8wy2jew5ex8l.derive([Highlighting.config({
          highlightClass: $_chb5sszejew5exl7.resolve('dot-active'),
          itemClass: $_chb5sszejew5exl7.resolve('dot-item')
        })]),
      components: $_8gfg1pwsjew5ex0r.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_wki84113jew5ey7a.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_28kh8wy2jew5ex8l.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_8macs2126jew5eyk7.config(wrapperAdhocEvents, [
          $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_eboj3012pjew5eypb.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_eboj3012pjew5eypb.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_eboj3012pjew5eypb.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_f3pzo912ijew5eym6 = { sketch: sketch$7 };

  var getGroups = $_cukkt1wljew5ex0b.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_f3pzo912ijew5eym6.sketch({
            fields: [
              $_awcwbt125jew5eyjf.field('url', 'Type or paste URL'),
              $_awcwbt125jew5eyjf.field('text', 'Link text'),
              $_awcwbt125jew5eyjf.field('title', 'Link title'),
              $_awcwbt125jew5eyjf.field('target', 'Link target'),
              $_awcwbt125jew5eyjf.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return Option.some($_9nvx7b122jew5eyj3.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_9nvx7b122jew5eyj3.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$8 = function (realm, editor) {
    return $_5slfa1zfjew5exl9.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_ct0xd5124jew5eyjc.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_9nvx7b122jew5eyj3.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_c1j7v8121jew5eyiy = { sketch: sketch$8 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var generateFrom = function (spec, all) {
    var schema = $_8gfg1pwsjew5ex0r.map(all, function (a) {
      return $_f9u1aky7jew5exbr.field(a.name(), a.name(), $_cbiwrgy8jew5exbz.asOption(), $_bf8n0dyejew5exeb.objOf([
        $_f9u1aky7jew5exbr.strict('config'),
        $_f9u1aky7jew5exbr.defaulted('state', $_4hobjhyjjew5exfv)
      ]));
    });
    var validated = $_bf8n0dyejew5exeb.asStruct('component.behaviours', $_bf8n0dyejew5exeb.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_bf8n0dyejew5exeb.formatError(errInfo) + '\nComplete spec:\n' + $_3mv3mdydjew5exdu.stringify(spec, null, 2));
    }, $_canvefwjjew5ex06.identity);
    return {
      list: all,
      data: $_4355kjx0jew5ex1g.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_canvefwjjew5ex06.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_6n8mt512wjew5eysk = {
    generateFrom: generateFrom,
    getBehaviours: getBehaviours,
    getData: getData
  };

  var getBehaviours$1 = function (spec) {
    var behaviours = $_2kiiw5xsjew5ex5p.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_8gfg1pwsjew5ex0r.filter($_4355kjx0jew5ex1g.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_8gfg1pwsjew5ex0r.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom$1 = function (spec, all) {
    return $_6n8mt512wjew5eysk.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours$1(spec);
    return generateFrom$1(spec, all);
  };
  var $_fj34xn12vjew5eyrv = {
    generate: generate$4,
    generateFrom: generateFrom$1
  };

  var ComponentApi = $_db9ss2yljew5exg0.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_db9ss2yljew5exg0.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  function NoContextApi (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_8z0teyxmjew5ex4t.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_canvefwjjew5ex06.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  }

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_4355kjx0jew5ex1g.each(data, function (detail, key) {
      $_4355kjx0jew5ex1g.each(detail, function (value, indexKey) {
        var chain = $_2kiiw5xsjew5ex5p.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_202jod131jew5eyug = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_canvefwjjew5ex06.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_8gfg1pwsjew5ex0r.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return Result.value($_2kiiw5xsjew5ex5p.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return Result.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_3mv3mdydjew5exdu.stringify($_8gfg1pwsjew5ex0r.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return Result.value({});
    else
      return Result.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_2kiiw5xsjew5ex5p.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return Result.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_3mv3mdydjew5exdu.stringify($_8gfg1pwsjew5ex0r.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_8gfg1pwsjew5ex0r.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_4355kjx0jew5ex1g.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : Result.value($_2kiiw5xsjew5ex5p.wrap(k, v));
        });
        return $_2kiiw5xsjew5ex5p.consolidate(parts, accRest);
      });
    }, Result.value({}));
    return y.map(function (yValue) {
      return $_2kiiw5xsjew5ex5p.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_dq5f6lwyjew5ex17.deepMerge({}, baseMod);
    $_8gfg1pwsjew5ex0r.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_202jod131jew5eyug.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_4355kjx0jew5ex1g.map(byAspect, function (values, aspect) {
      return $_8gfg1pwsjew5ex0r.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_4355kjx0jew5ex1g.mapToArray(usedAspect, function (values, aspect) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(mergeTypes, aspect).fold(function () {
        return Result.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_2kiiw5xsjew5ex5p.consolidate(modifications, {});
    return consolidated.map($_d2rguyhjew5exf6.nu);
  };
  var $_5kd40y130jew5eytu = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_3mv3mdydjew5exdu.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_3mv3mdydjew5exdu.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return Result.value(sorted);
    } catch (err) {
      return Result.error([err]);
    }
  };
  var $_15ol1h133jew5eyvf = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_canvefwjjew5ex06.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_canvefwjjew5ex06.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_7y44lx134jew5eyvn = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_canvefwjjew5ex06.constant(name),
      handler: $_canvefwjjew5ex06.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_8gfg1pwsjew5ex0r.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_dq5f6lwyjew5ex17.deepMerge(base, nameToHandlers(behaviours, info));
    return $_202jod131jew5eyug.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_bwxx9iy6jew5exb3.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return Result.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_3mv3mdydjew5exdu.stringify($_8gfg1pwsjew5ex0r.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_15ol1h133jew5eyvf.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_8gfg1pwsjew5ex0r.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_bwxx9iy6jew5exb3.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_4355kjx0jew5ex1g.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_8gfg1pwsjew5ex0r.filter(eventOrder, function (o) {
          return $_8gfg1pwsjew5ex0r.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_2kiiw5xsjew5ex5p.wrap(eventName, $_7y44lx134jew5eyvn.nu(assembled, purpose));
      });
    });
    return $_2kiiw5xsjew5ex5p.consolidate(r, {});
  };
  var $_3uqd1j132jew5eyuw = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_bf8n0dyejew5exeb.asStruct('custom.definition', $_bf8n0dyejew5exeb.objOfOnly([
      $_f9u1aky7jew5exbr.field('dom', 'dom', $_cbiwrgy8jew5exbz.strict(), $_bf8n0dyejew5exeb.objOfOnly([
        $_f9u1aky7jew5exbr.strict('tag'),
        $_f9u1aky7jew5exbr.defaulted('styles', {}),
        $_f9u1aky7jew5exbr.defaulted('classes', []),
        $_f9u1aky7jew5exbr.defaulted('attributes', {}),
        $_f9u1aky7jew5exbr.option('value'),
        $_f9u1aky7jew5exbr.option('innerHtml')
      ])),
      $_f9u1aky7jew5exbr.strict('components'),
      $_f9u1aky7jew5exbr.strict('uid'),
      $_f9u1aky7jew5exbr.defaulted('events', {}),
      $_f9u1aky7jew5exbr.defaulted('apis', $_canvefwjjew5ex06.constant({})),
      $_f9u1aky7jew5exbr.field('eventOrder', 'eventOrder', $_cbiwrgy8jew5exbz.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_bf8n0dyejew5exeb.anyValue()),
      $_f9u1aky7jew5exbr.option('domModification'),
      $_behq97z6jew5exio.snapshot('originalSpec'),
      $_f9u1aky7jew5exbr.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_2kiiw5xsjew5ex5p.wrap($_3dw9de10yjew5ey60.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_dq5f6lwyjew5ex17.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_8gfg1pwsjew5ex0r.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_8h8oz6yijew5exfp.nu($_dq5f6lwyjew5ex17.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_2kiiw5xsjew5ex5p.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_2kiiw5xsjew5ex5p.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_d2rguyhjew5exf6.nu({});
    }, $_d2rguyhjew5exf6.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_cpwdif135jew5eyw6 = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_8gfg1pwsjew5ex0r.each(classes, function (x) {
      $_bn0n6qynjew5exgc.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_8gfg1pwsjew5ex0r.each(classes, function (x) {
      $_bn0n6qynjew5exgc.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_8gfg1pwsjew5ex0r.each(classes, function (x) {
      $_bn0n6qynjew5exgc.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_8gfg1pwsjew5ex0r.forall(classes, function (clazz) {
      return $_bn0n6qynjew5exgc.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_8gfg1pwsjew5ex0r.exists(classes, function (clazz) {
      return $_bn0n6qynjew5exgc.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$10 = function (element) {
    return $_4w70evypjew5exgf.supports(element) ? getNative(element) : $_4w70evypjew5exgf.get(element);
  };
  var $_b8d8rt137jew5eyx3 = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_8h8oz6yijew5exfp.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_8gfg1pwsjew5ex0r.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_6l42pqxfjew5ex38.fromTag(definition.tag());
    $_cwmn4ixrjew5ex55.setAll(subject, definition.attributes().getOr({}));
    $_b8d8rt137jew5eyx3.add(subject, definition.classes().getOr([]));
    $_4njywe103jew5exsr.setAll(subject, definition.styles().getOr({}));
    $_bg62awxojew5ex4y.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_6exptpxijew5ex3f.append(subject, children);
    definition.value().each(function (value) {
      $_e5gboj12ejew5eyly.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_8h8oz6yijew5exfp.nu(spec);
    return renderToDom(definition);
  };
  var $_7m3df2136jew5eywq = { renderToDom: renderToDom };

  var build = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_bf8n0dyejew5exeb.getOrDie($_cpwdif135jew5eyw6.toInfo($_dq5f6lwyjew5ex17.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_fj34xn12vjew5eyrv.generate(spec);
    var bList = $_6n8mt512wjew5eysk.getBehaviours(bBlob);
    var bData = $_6n8mt512wjew5eysk.getData(bBlob);
    var definition = $_cpwdif135jew5eyw6.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_cpwdif135jew5eyw6.toModification(info) };
    var modification = $_5kd40y130jew5eytu.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_d2rguyhjew5exf6.merge(definition, modification);
    var item = $_7m3df2136jew5eywq.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_cpwdif135jew5eyw6.toEvents(info) };
    var events = $_3uqd1j132jew5eyuw.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_ggckh3x3jew5ex2a.children(item);
      var subs = $_8gfg1pwsjew5ex0r.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_25b61210qjew5ey1u.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_d6mwwbwzjew5ex1e.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_3mv3mdydjew5exdu.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_d6mwwbwzjew5ex1e.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_canvefwjjew5ex06.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_canvefwjjew5ex06.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_canvefwjjew5ex06.constant(events)
    });
    return me;
  };
  var $_30xjtm12ujew5eyrc = { build: build };

  var isRecursive = function (component, originator, target) {
    return $_4ki9avx9jew5ex2r.eq(originator, component.element()) && !$_4ki9avx9jew5ex2r.eq(originator, target);
  };
  var $_ds2fwk138jew5eyxe = {
    events: $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.can($_7v4jjhwhjew5ewzm.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_7v4jjhwhjew5ewzm.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_8z0teyxmjew5ex4t.element(originator) + '\nTarget: ' + $_8z0teyxmjew5ex4t.element(target) + '\nCheck the ' + $_7v4jjhwhjew5ewzm.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_79hwc4139jew5eyxh = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_2kiiw5xsjew5ex5p.readOr('components', [])(spec);
    return $_8gfg1pwsjew5ex0r.map(components, build$1);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_79hwc4139jew5eyxh.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_dq5f6lwyjew5ex17.deepMerge($_ds2fwk138jew5eyxe, spec, $_2kiiw5xsjew5ex5p.wrap('components', components));
    return Result.value($_30xjtm12ujew5eyrc.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_6l42pqxfjew5ex38.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_bf8n0dyejew5exeb.asStructOrDie('external.component', $_bf8n0dyejew5exeb.objOfOnly([
      $_f9u1aky7jew5exbr.strict('element'),
      $_f9u1aky7jew5exbr.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_8o9vo010xjew5ey5l.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: Option.none,
      hasConfigured: $_canvefwjjew5ex06.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_canvefwjjew5ex06.constant(extSpec.element()),
      spec: $_canvefwjjew5ex06.constant(spec),
      readState: $_canvefwjjew5ex06.constant('No state'),
      syncComponents: $_canvefwjjew5ex06.noop,
      components: $_canvefwjjew5ex06.constant([]),
      events: $_canvefwjjew5ex06.constant({})
    });
    return $_25b61210qjew5ey1u.premade(me);
  };
  var build$1 = function (rawUserSpec) {
    return $_25b61210qjew5ey1u.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_dq5f6lwyjew5ex17.deepMerge({ uid: $_8o9vo010xjew5ey5l.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_nb5c312tjew5eyqn = {
    build: build$1,
    premade: $_25b61210qjew5ey1u.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_g2xew8ytjew5exgp.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_8ij4bdwgjew5ewz4.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_8ij4bdwgjew5ewz4.emitWith(item, focusEvent, { item: item });
  };
  var $_cy7lvt13djew5eyyf = {
    hover: $_canvefwjjew5ex06.constant(hoverEvent),
    focus: $_canvefwjjew5ex06.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_dq5f6lwyjew5ex17.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_dq5f6lwyjew5ex17.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_cy7lvt13djew5eyyf.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_cd3e46y4jew5exah.derive([
        $_cd3e46y4jew5exah.runWithTarget($_7v4jjhwhjew5ewzm.tapOrClick(), $_8ij4bdwgjew5ewz4.emitExecute),
        $_cd3e46y4jew5exah.cutter($_6at0t9wijew5ex03.mousedown()),
        $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.mouseover(), $_cy7lvt13djew5eyyf.onHover),
        $_cd3e46y4jew5exah.run($_7v4jjhwhjew5ewzm.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$10 = [
    $_f9u1aky7jew5exbr.strict('data'),
    $_f9u1aky7jew5exbr.strict('components'),
    $_f9u1aky7jew5exbr.strict('dom'),
    $_f9u1aky7jew5exbr.option('toggling'),
    $_f9u1aky7jew5exbr.defaulted('itemBehaviours', {}),
    $_f9u1aky7jew5exbr.defaulted('ignoreFocus', false),
    $_f9u1aky7jew5exbr.defaulted('domModification', {}),
    $_behq97z6jew5exio.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.stopper($_7v4jjhwhjew5ewzm.focusItem())])
    };
  };
  var schema$11 = [
    $_f9u1aky7jew5exbr.strict('dom'),
    $_f9u1aky7jew5exbr.strict('components'),
    $_behq97z6jew5exio.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_aecs1b10vjew5ey49.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_28kh8wy2jew5ex8l.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_41zizo13gjew5eyzj = {
    owner: $_canvefwjjew5ex06.constant(owner$2),
    parts: $_canvefwjjew5ex06.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_a8k3zw10tjew5ey30.substitutes($_41zizo13gjew5eyzj.owner(), info, $_41zizo13gjew5eyzj.parts());
    var components = $_a8k3zw10tjew5ey30.components($_41zizo13gjew5eyzj.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_a8k3zw10tjew5ey30.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_64sue7108jew5exty.inside(simulatedEvent.event().target()) ? Option.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return Option.none();
        } else {
          return Option.none();
        }
      }();
    };
    return $_dq5f6lwyjew5ex17.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_cd3e46y4jew5exah.derive([
        $_cd3e46y4jew5exah.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.mouseover(), $_cy7lvt13djew5eyyf.onHover),
        $_cd3e46y4jew5exah.run($_7v4jjhwhjew5ewzm.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_28kh8wy2jew5ex8l.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_cy7lvt13djew5eyyf.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return Option.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          }
        })
      ])
    });
  };
  var schema$12 = [
    $_f9u1aky7jew5exbr.strict('uid'),
    $_f9u1aky7jew5exbr.strict('data'),
    $_f9u1aky7jew5exbr.strict('components'),
    $_f9u1aky7jew5exbr.strict('dom'),
    $_f9u1aky7jew5exbr.defaulted('autofocus', false),
    $_f9u1aky7jew5exbr.defaulted('domModification', {}),
    $_a8k3zw10tjew5ey30.defaultUidsSchema($_41zizo13gjew5eyzj.parts()),
    $_behq97z6jew5exio.output('builder', builder$2)
  ];

  var itemSchema$1 = $_bf8n0dyejew5exeb.choose('type', {
    widget: schema$12,
    item: schema$10,
    separator: schema$11
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_aecs1b10vjew5ey49.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_bf8n0dyejew5exeb.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_8o9vo010xjew5ey5l.generate('');
        return $_dq5f6lwyjew5ex17.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$13 = [
    $_f9u1aky7jew5exbr.strict('value'),
    $_f9u1aky7jew5exbr.strict('items'),
    $_f9u1aky7jew5exbr.strict('dom'),
    $_f9u1aky7jew5exbr.strict('components'),
    $_f9u1aky7jew5exbr.defaulted('eventOrder', {}),
    $_f340m10ojew5ey0j.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_f9u1aky7jew5exbr.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_bf8n0dyejew5exeb.choose('mode', {
      grid: [
        $_behq97z6jew5exio.initSize(),
        $_behq97z6jew5exio.output('config', configureGrid)
      ],
      menu: [
        $_f9u1aky7jew5exbr.defaulted('moveOnTab', true),
        $_behq97z6jew5exio.output('config', configureMenu)
      ]
    })),
    $_behq97z6jew5exio.itemMarkers(),
    $_f9u1aky7jew5exbr.defaulted('fakeFocus', false),
    $_f9u1aky7jew5exbr.defaulted('focusManager', $_f4lrbzzrjew5exq1.dom()),
    $_behq97z6jew5exio.onHandler('onHighlight')
  ];
  var $_6mxxd013bjew5eyxo = {
    name: $_canvefwjjew5ex06.constant('Menu'),
    schema: $_canvefwjjew5ex06.constant(schema$13),
    parts: $_canvefwjjew5ex06.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_3g2nbx13ijew5ez00 = { focus: $_canvefwjjew5ex06.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_dq5f6lwyjew5ex17.deepMerge({
      dom: $_dq5f6lwyjew5ex17.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_canvefwjjew5ex06.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_f340m10ojew5ey0j.get(detail.menuBehaviours())),
      events: $_cd3e46y4jew5exah.derive([
        $_cd3e46y4jew5exah.run($_cy7lvt13djew5eyyf.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_8ij4bdwgjew5ewz4.emitWith(menu, $_3g2nbx13ijew5ez00.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_cd3e46y4jew5exah.run($_cy7lvt13djew5eyyf.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_838x7d13hjew5eyzv = { make: make$2 };

  var Menu = $_alx4m710pjew5ey14.composite({
    name: 'Menu',
    configFields: $_6mxxd013bjew5eyxo.schema(),
    partFields: $_6mxxd013bjew5eyxo.parts(),
    factory: $_838x7d13hjew5eyzv.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_ggckh3x3jew5ex2a.owner(container);
    var refocus = $_g2xew8ytjew5exgp.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_4ki9avx9jew5ex2r.eq(focused, elem);
      };
      return hasFocus(container) ? Option.some(container) : $_6a8c1uyvjew5exgv.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_g2xew8ytjew5exgp.active(ownerDoc).filter(function (newFocus) {
        return $_4ki9avx9jew5ex2r.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_g2xew8ytjew5exgp.focus(oldFocus);
      });
    });
    return result;
  };
  var $_a1kpho13mjew5ez1k = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_7ds2sdx1jew5ex1r.detachChildren(component);
    $_a1kpho13mjew5ez1k.preserve(function () {
      var children = $_8gfg1pwsjew5ex0r.map(data, component.getSystem().build);
      $_8gfg1pwsjew5ex0r.each(children, function (l) {
        $_7ds2sdx1jew5ex1r.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_7ds2sdx1jew5ex1r.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_6ub189x2jew5ex27.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_6ub189x2jew5ex27.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_8gfg1pwsjew5ex0r.find(children, function (child) {
      return $_4ki9avx9jew5ex2r.eq(removee.element(), child.element());
    });
    foundChild.each($_7ds2sdx1jew5ex1r.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_9n47so13ljew5ez12 = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_28kh8wy2jew5ex8l.create({
    fields: [],
    name: 'replacing',
    apis: $_9n47so13ljew5ez12
  });

  var transpose = function (obj) {
    return $_4355kjx0jew5ex1g.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_2kiiw5xsjew5ex5p.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return Option.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_4355kjx0jew5ex1g.each(menus, function (menuItems, menu) {
      $_8gfg1pwsjew5ex0r.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_4355kjx0jew5ex1g.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_4355kjx0jew5ex1g.map(items, function (path) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_69tds613pjew5ez3r = { generate: generate$5 };

  function LayeredState () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell(Option.none());
    var toItemValues = Cell($_canvefwjjew5ex06.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set(Option.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set(Option.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_69tds613pjew5ez3r.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_2kiiw5xsjew5ex5p.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? Option.some(path.slice(1)) : Option.none();
      });
    };
    var refresh = function (itemValue) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_8gfg1pwsjew5ex0r.difference($_4355kjx0jew5ex1g.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  }

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_4355kjx0jew5ex1g.map(menus, function (spec, name) {
        var data = Menu.sketch($_dq5f6lwyjew5ex17.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_2kiiw5xsjew5ex5p.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_f4lrbzzrjew5exq1.highlights() : $_f4lrbzzrjew5exq1.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_4355kjx0jew5ex1g.map(detail.data().menus(), function (data, menuName) {
        return $_8gfg1pwsjew5ex0r.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_8ij4bdwgjew5ewz4.dispatch(container, item.element(), $_7v4jjhwhjew5ewzm.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_8mb1tzy0jew5ex80.cat($_8gfg1pwsjew5ex0r.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return Option.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_8gfg1pwsjew5ex0r.each(rest, function (r) {
          $_bn0n6qynjew5exgc.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_1b1xj3xjjew5ex3i.inBody(activeMenu.element())) {
          Replacing.append(container, $_nb5c312tjew5eyqn.premade(activeMenu));
        }
        $_b8d8rt137jew5eyx3.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_8gfg1pwsjew5ex0r.each(others, function (o) {
          $_b8d8rt137jew5eyx3.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        Option.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_1b1xj3xjjew5ex3i.inBody(activeMenu.element())) {
            Replacing.append(container, $_nb5c312tjew5eyqn.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_64sue7108jew5exty.inside(item.element()) ? Option.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_64sue7108jew5exty.inside(item.element()) ? Option.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_5q4kn4zxjew5exr5.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_cd3e46y4jew5exah.derive([
      $_cd3e46y4jew5exah.run($_3g2nbx13ijew5ez00.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_cd3e46y4jew5exah.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_cd3e46y4jew5exah.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_nb5c312tjew5eyqn.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_cd3e46y4jew5exah.run($_cy7lvt13djew5eyyf.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_8ij4bdwgjew5ewz4.dispatch(container, primary.element(), $_7v4jjhwhjew5ewzm.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_f340m10ojew5ey0j.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_9llqwr13njew5ez28 = {
    make: make$3,
    collapseItem: $_canvefwjjew5ex06.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_2kiiw5xsjew5ex5p.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_cvl6pz10rjew5ey20.generate($_9llqwr13njew5ez28.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_alx4m710pjew5ey14.single({
    name: 'TieredMenu',
    configFields: [
      $_behq97z6jew5exio.onStrictKeyboardHandler('onExecute'),
      $_behq97z6jew5exio.onStrictKeyboardHandler('onEscape'),
      $_behq97z6jew5exio.onStrictHandler('onOpenMenu'),
      $_behq97z6jew5exio.onStrictHandler('onOpenSubmenu'),
      $_behq97z6jew5exio.onHandler('onCollapseMenu'),
      $_f9u1aky7jew5exbr.defaulted('openImmediately', true),
      $_f9u1aky7jew5exbr.strictObjOf('data', [
        $_f9u1aky7jew5exbr.strict('primary'),
        $_f9u1aky7jew5exbr.strict('menus'),
        $_f9u1aky7jew5exbr.strict('expansions')
      ]),
      $_f9u1aky7jew5exbr.defaulted('fakeFocus', false),
      $_behq97z6jew5exio.onHandler('onHighlight'),
      $_behq97z6jew5exio.onHandler('onHover'),
      $_behq97z6jew5exio.tieredMenuMarkers(),
      $_f9u1aky7jew5exbr.strict('dom'),
      $_f9u1aky7jew5exbr.defaulted('navigateOnHover', true),
      $_f9u1aky7jew5exbr.defaulted('stayInDom', false),
      $_f340m10ojew5ey0j.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_f9u1aky7jew5exbr.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_9llqwr13njew5ez28.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var findRoute = function (component, transConfig, transState, route) {
    return $_2kiiw5xsjew5ex5p.readOptFrom(transConfig.routes(), route.start()).map($_canvefwjjew5ex06.apply).bind(function (sConfig) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(sConfig, route.destination()).map($_canvefwjjew5ex06.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_canvefwjjew5ex06.constant(t),
          route: $_canvefwjjew5ex06.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_bn0n6qynjew5exgc.remove(comp.element(), t.transitionClass());
      $_cwmn4ixrjew5ex55.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_canvefwjjew5ex06.constant($_cwmn4ixrjew5ex55.get(comp.element(), transConfig.stateAttr())),
      destination: $_canvefwjjew5ex06.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_cwmn4ixrjew5ex55.has(el, transConfig.destinationAttr()) ? Option.some({
      start: $_canvefwjjew5ex06.constant($_cwmn4ixrjew5ex55.get(comp.element(), transConfig.stateAttr())),
      destination: $_canvefwjjew5ex06.constant($_cwmn4ixrjew5ex55.get(comp.element(), transConfig.destinationAttr()))
    }) : Option.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_cwmn4ixrjew5ex55.has(comp.element(), transConfig.stateAttr()) && $_cwmn4ixrjew5ex55.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_cwmn4ixrjew5ex55.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_cwmn4ixrjew5ex55.has(comp.element(), transConfig.destinationAttr())) {
      $_cwmn4ixrjew5ex55.set(comp.element(), transConfig.stateAttr(), $_cwmn4ixrjew5ex55.get(comp.element(), transConfig.destinationAttr()));
      $_cwmn4ixrjew5ex55.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_bn0n6qynjew5exgc.add(comp.element(), t.transitionClass());
      $_cwmn4ixrjew5ex55.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_cwmn4ixrjew5ex55.has(e, transConfig.stateAttr()) ? Option.some($_cwmn4ixrjew5ex55.get(e, transConfig.stateAttr())) : Option.none();
  };
  var $_58es8z13sjew5ez55 = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_cd3e46y4jew5exah.derive([
      $_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_58es8z13sjew5ez55.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_58es8z13sjew5ez55.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_58es8z13sjew5ez55.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_cd3e46y4jew5exah.runOnAttached(function (comp, se) {
        $_58es8z13sjew5ez55.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_6khjbn13rjew5ez4w = { events: events$8 };

  var TransitionSchema = [
    $_f9u1aky7jew5exbr.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_f9u1aky7jew5exbr.defaulted('stateAttr', 'data-transitioning-state'),
    $_f9u1aky7jew5exbr.strict('initialState'),
    $_behq97z6jew5exio.onHandler('onTransition'),
    $_behq97z6jew5exio.onHandler('onFinish'),
    $_f9u1aky7jew5exbr.strictOf('routes', $_bf8n0dyejew5exeb.setOf(Result.value, $_bf8n0dyejew5exeb.setOf(Result.value, $_bf8n0dyejew5exeb.objOfOnly([$_f9u1aky7jew5exbr.optionObjOfOnly('transition', [
        $_f9u1aky7jew5exbr.strict('property'),
        $_f9u1aky7jew5exbr.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_4355kjx0jew5ex1g.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_2kiiw5xsjew5ex5p.wrap(waypoints[1], v);
      r[waypoints[1]] = $_2kiiw5xsjew5ex5p.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_2kiiw5xsjew5ex5p.wrapAll([
      {
        key: first,
        value: $_2kiiw5xsjew5ex5p.wrap(second, transitions)
      },
      {
        key: second,
        value: $_2kiiw5xsjew5ex5p.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_2kiiw5xsjew5ex5p.wrapAll([
      {
        key: first,
        value: $_2kiiw5xsjew5ex5p.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_2kiiw5xsjew5ex5p.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_2kiiw5xsjew5ex5p.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_28kh8wy2jew5ex8l.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_6khjbn13rjew5ez4w,
    apis: $_58es8z13sjew5ez55,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var scrollable = $_chb5sszejew5exl7.resolve('scrollable');
  var register = function (element) {
    $_bn0n6qynjew5exgc.add(element, scrollable);
  };
  var deregister = function (element) {
    $_bn0n6qynjew5exgc.remove(element, scrollable);
  };
  var $_g8tq7u13ujew5ez5z = {
    register: register,
    deregister: deregister,
    scrollable: $_canvefwjjew5ex06.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_2kiiw5xsjew5ex5p.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_8gfg1pwsjew5ex0r.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_2kiiw5xsjew5ex5p.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_4355kjx0jew5ex1g.map(formats.menus, function (menuItems, menuName) {
      var items = $_8gfg1pwsjew5ex0r.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_2kiiw5xsjew5ex5p.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_dq5f6lwyjew5ex17.deepMerge(submenus, $_2kiiw5xsjew5ex5p.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_chb5sszejew5exl7.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_chb5sszejew5exl7.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_28kh8wy2jew5ex8l.derive(isMenu ? [] : [$_5e9sbezdjew5exl4.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_chb5sszejew5exl7.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_chb5sszejew5exl7.resolve('styles-collapse-icon')]
              }
            },
            $_nb5c312tjew5eyqn.text(value)
          ] : [$_nb5c312tjew5eyqn.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_chb5sszejew5exl7.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_28kh8wy2jew5ex8l.derive([$_8macs2126jew5eyk7.config('adhoc-scrollable-menu', [
              $_cd3e46y4jew5exah.runOnAttached(function (component, simulatedEvent) {
                $_4njywe103jew5exsr.set(component.element(), 'overflow-y', 'auto');
                $_4njywe103jew5exsr.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_g8tq7u13ujew5ez5z.register(component.element());
              }),
              $_cd3e46y4jew5exah.runOnDetached(function (component) {
                $_4njywe103jew5exsr.remove(component.element(), 'overflow-y');
                $_4njywe103jew5exsr.remove(component.element(), '-webkit-overflow-scrolling');
                $_g8tq7u13ujew5ez5z.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_28kh8wy2jew5ex8l.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_dpxqkh11rjew5eyi0.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_chb5sszejew5exl7.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_3zjly311kjew5eye1.get(container.element());
        $_3zjly311kjew5eye1.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_3zjly311kjew5eye1.get(container.element());
        var menu = $_5q4kn4zxjew5exr5.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_3zjly311kjew5eye1.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_5q4kn4zxjew5exr5.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_chb5sszejew5exl7.resolve('styles-background-menu'),
        menu: $_chb5sszejew5exl7.resolve('styles-menu'),
        selectedMenu: $_chb5sszejew5exl7.resolve('styles-selected-menu'),
        item: $_chb5sszejew5exl7.resolve('styles-item'),
        selectedItem: $_chb5sszejew5exl7.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_e45ig712sjew5eypm = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_dq5f6lwyjew5ex17.deepMerge($_2kiiw5xsjew5ex5p.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_dq5f6lwyjew5ex17.deepMerge(rest.menus, $_2kiiw5xsjew5ex5p.wrap(item.title, rest.items));
    var newExpansions = $_dq5f6lwyjew5ex17.deepMerge(rest.expansions, $_2kiiw5xsjew5ex5p.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_2kiiw5xsjew5ex5p.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_8gfg1pwsjew5ex0r.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_dq5f6lwyjew5ex17.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_dq5f6lwyjew5ex17.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_diaquz13vjew5ez62 = { expand: expand };

  var register$1 = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_dq5f6lwyjew5ex17.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_dq5f6lwyjew5ex17.deepMerge(item, {
        isSelected: $_canvefwjjew5ex06.constant(false),
        getPreview: $_canvefwjjew5ex06.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_cvl6pz10rjew5ey20.generate(item.title);
      var newItem = $_dq5f6lwyjew5ex17.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_2kiiw5xsjew5ex5p.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_8gfg1pwsjew5ex0r.map(items, function (item) {
        if ($_2kiiw5xsjew5ex5p.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_dq5f6lwyjew5ex17.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_2kiiw5xsjew5ex5p.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_8gfg1pwsjew5ex0r.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_2kiiw5xsjew5ex5p.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_diaquz13vjew5ez62.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_e45ig712sjew5eypm.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_bzz51112qjew5eypd = {
    register: register$1,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_8gfg1pwsjew5ex0r.bind(toolbar, function (item) {
      return $_d6mwwbwzjew5ex1e.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_d6mwwbwzjew5ex1e.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_5slfa1zfjew5exl9.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_5slfa1zfjew5exl9.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_5slfa1zfjew5exl9.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_c1j7v8121jew5eyiy.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_7wjnf411qjew5eyge.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_ccnx3w11mjew5eye3.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_beh6kz115jew5ey87.sketch(realm, editor);
    };
    var styleFormats = $_bzz51112qjew5eypd.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_bzz51112qjew5eypd.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_5slfa1zfjew5exl9.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_28kh8wy2jew5ex8l.derive([
        Toggling.config({
          toggleClass: $_chb5sszejew5exl7.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_2kiiw5xsjew5ex5p.wrapAll([
            $_5e9sbezdjew5exl4.receive($_8tfhkpz1jew5exhd.orientationChanged(), Toggling.off),
            $_5e9sbezdjew5exl4.receive($_8tfhkpz1jew5exhd.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_2kiiw5xsjew5ex5p.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature(Option.none(), undo),
      redo: feature(Option.none(), redo),
      bold: feature(Option.none(), bold),
      italic: feature(Option.none(), italic),
      underline: feature(Option.none(), underline),
      removeformat: feature(Option.none(), removeformat),
      link: feature(Option.none(), link),
      unlink: feature(Option.none(), unlink),
      image: feature(Option.none(), image),
      bullist: feature(Option.some('bullist'), bullist),
      numlist: feature(Option.some('numlist'), numlist),
      fontsizeselect: feature(Option.none(), fontsizeselect),
      forecolor: feature(Option.none(), forecolor),
      styleselect: feature(Option.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_8gfg1pwsjew5ex0r.bind(itemNames, function (iName) {
      var r = !$_2kiiw5xsjew5ex5p.hasKey(present, iName) && $_2kiiw5xsjew5ex5p.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_fz2m9cz2jew5exhg = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_canvefwjjew5ex06.constant(target),
      'x': $_canvefwjjew5ex06.constant(x),
      'y': $_canvefwjjew5ex06.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_canvefwjjew5ex06.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_6l42pqxfjew5ex38.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_canvefwjjew5ex06.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_canvefwjjew5ex06.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_beqsky13yjew5ez6g = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = $_canvefwjjew5ex06.constant(true);
  var bind$2 = function (element, event, handler) {
    return $_beqsky13yjew5ez6g.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_beqsky13yjew5ez6g.capture(element, event, filter$1, handler);
  };
  var $_4mbdev13xjew5ez6d = {
    bind: bind$2,
    capture: capture$1
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_canvefwjjew5ex06.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_5em8cowkjew5ex09.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_6l42pqxfjew5ex38.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_4mbdev13xjew5ez6d.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f(Option.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f(Option.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_847mvk13wjew5ez66 = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  function DelayedFunction (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  }

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return Option.none();
    return Option.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor = function (settings) {
    var startData = Cell(Option.none());
    var longpress = DelayedFunction(function (event) {
      startData.set(Option.none());
      settings.triggerEvent($_7v4jjhwhjew5ewzm.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_canvefwjjew5ex06.constant(touch.clientX),
          y: $_canvefwjjew5ex06.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set(Option.some(data));
      });
      return Option.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set(Option.none());
        });
      });
      return Option.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_4ki9avx9jew5ex2r.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_7v4jjhwhjew5ewzm.tap(), event);
      });
    };
    var handlers = $_2kiiw5xsjew5ex5p.wrapAll([
      {
        key: $_6at0t9wijew5ex03.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_6at0t9wijew5ex03.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_6at0t9wijew5ex03.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_czd3o0144jew5ez7v = { monitor: monitor };

  var monitor$1 = function (editorApi) {
    var tapEvent = $_czd3o0144jew5ez7v.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_4mbdev13xjew5ez6d.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_4mbdev13xjew5ez6d.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_5few3s143jew5ez7e = { monitor: monitor$1 };

  var isAndroid6 = $_5em8cowkjew5ex09.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_5few3s143jew5ez7e.monitor(editorApi);
    var outerDoc = $_ggckh3x3jew5ex2a.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_4ki9avx9jew5ex2r.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_g2xew8ytjew5exgp.active(outerDoc).filter(function (input) {
        return $_3s4ecrxkjew5ex3m.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_4mbdev13xjew5ez6d.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_4mbdev13xjew5ez6d.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_g2xew8ytjew5exgp.blur(editorApi.body());
      }),
      editorApi.onToEditing($_canvefwjjew5ex06.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_4mbdev13xjew5ez6d.bind($_6l42pqxfjew5ex38.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_4mbdev13xjew5ez6d.bind(outerDoc, 'select', updateMargin),
      $_4mbdev13xjew5ez6d.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_8gfg1pwsjew5ex0r.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_8ccksu142jew5ez6y = { initEvents: initEvents };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_cwmn4ixrjew5ex55.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_btyelg147jew5ez8h = { safeParse: safeParse };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_5em8cowkjew5ex09.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api$3 = NodeValue($_3s4ecrxkjew5ex3m.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_2luea014ajew5ez8w = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_3s4ecrxkjew5ex3m.name(element) === 'img' ? 1 : $_2luea014ajew5ez8w.getOption(element).fold(function () {
      return $_ggckh3x3jew5ex2a.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_2luea014ajew5ez8w.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_8gfg1pwsjew5ex0r.contains(elementsWithCursorPosition, $_3s4ecrxkjew5ex3m.name(elem));
  };
  var $_5obrc3149jew5ez8t = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_9ui8pqxwjew5ex6u.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold($_canvefwjjew5ex06.identity, $_canvefwjjew5ex06.identity, $_canvefwjjew5ex06.identity);
  };
  var $_de7nu914djew5ez96 = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart
  };

  var type$1 = $_9ui8pqxwjew5ex6u.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$1 = $_boyhvrx4jew5ex2k.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_6l42pqxfjew5ex38.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_de7nu914djew5ez96.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_ggckh3x3jew5ex2a.defaultView(start);
  };
  var $_4nbnsy14cjew5ez91 = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_ggckh3x3jew5ex2a.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_6l42pqxfjew5ex38.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_4ki9avx9jew5ex2r.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_59d9pg14fjew5ez9f = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_8gfg1pwsjew5ex0r.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_6l42pqxfjew5ex38.fromDom(fragment);
  };
  var $_b27uvg14gjew5ez9g = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$4 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_6l42pqxfjew5ex38.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_canvefwjjew5ex06.constant(rect.left),
      top: $_canvefwjjew5ex06.constant(rect.top),
      right: $_canvefwjjew5ex06.constant(rect.right),
      bottom: $_canvefwjjew5ex06.constant(rect.bottom),
      width: $_canvefwjjew5ex06.constant(rect.width),
      height: $_canvefwjjew5ex06.constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_3c7zck14hjew5ez9k = {
    create: create$4,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_9ui8pqxwjew5ex6u.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_6l42pqxfjew5ex38.fromDom(range.startContainer), range.startOffset, $_6l42pqxfjew5ex38.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_canvefwjjew5ex06.constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_cukkt1wljew5ex0b.cached(function () {
            return $_3c7zck14hjew5ez9k.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_cukkt1wljew5ex0b.cached(function () {
            return Option.some($_3c7zck14hjew5ez9k.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_cukkt1wljew5ex0b.cached(function () {
            return $_3c7zck14hjew5ez9k.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_cukkt1wljew5ex0b.cached(function () {
            return Option.some($_3c7zck14hjew5ez9k.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$5.rtl($_6l42pqxfjew5ex38.fromDom(rev.endContainer), rev.endOffset, $_6l42pqxfjew5ex38.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_onqhk14ijew5ez9t = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_bwgz7g14ljew5eza9 = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_2luea014ajew5ez8w.get(textnode).length;
    var offset = $_bwgz7g14ljew5eza9.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_8mb1tzy0jew5ex80.findMap(rects, function (rect) {
      return $_bwgz7g14ljew5eza9.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_1etq2u14mjew5ezaa = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_ggckh3x3jew5ex2a.children(node);
    return $_8mb1tzy0jew5ex80.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_bwgz7g14ljew5eza9.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_3s4ecrxkjew5ex3m.isText(node) ? $_1etq2u14mjew5ezaa.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_1dou7x14kjew5eza5 = { locate: locate$2 };

  var first$3 = function (element) {
    return $_6a8c1uyvjew5exgv.descendant(element, $_5obrc3149jew5ez8t.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_5obrc3149jew5ez8t.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_ggckh3x3jew5ex2a.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_7tz84x14ojew5ezah = {
    first: first$3,
    last: last$2
  };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_7tz84x14ojew5ezah.first : $_7tz84x14ojew5ezah.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_ggckh3x3jew5ex2a.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_frvfoj14njew5ezae = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_1dou7x14kjew5eza5.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_6l42pqxfjew5ex38.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_frvfoj14njew5ezae.search(doc, elem, x);
      };
      return $_ggckh3x3jew5ex2a.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_6l42pqxfjew5ex38.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_4nbnsy14cjew5ez91.range($_6l42pqxfjew5ex38.fromDom(rng.startContainer), rng.startOffset, $_6l42pqxfjew5ex38.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_3siw9o14jjew5eza2 = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_3c7zck14hjew5ez9k.create(win);
    var self = $_hx3byxejew5ex33.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_9ipr2mzvjew5exr1.descendants(ancestor, selector));
    return $_8gfg1pwsjew5ex0r.filter(elements, function (elem) {
      $_3c7zck14hjew5ez9k.selectNodeContentsUsing(innerRange, elem);
      return $_3c7zck14hjew5ez9k.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_onqhk14ijew5ez9t.asLtrRange(win, selection);
    var ancestor = $_6l42pqxfjew5ex38.fromDom(outerRange.commonAncestorContainer);
    return $_3s4ecrxkjew5ex3m.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_gcm4to14pjew5ezak = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_3s4ecrxkjew5ex3m.name(element);
    if ('input' === name)
      return $_de7nu914djew5ez96.after(element);
    else if (!$_8gfg1pwsjew5ex0r.contains([
        'br',
        'img'
      ], name))
      return $_de7nu914djew5ez96.on(element, offset);
    else
      return offset === 0 ? $_de7nu914djew5ez96.before(element) : $_de7nu914djew5ez96.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_de7nu914djew5ez96.before, beforeSpecial, $_de7nu914djew5ez96.after);
    var finish = finishSitu.fold($_de7nu914djew5ez96.before, beforeSpecial, $_de7nu914djew5ez96.after);
    return $_4nbnsy14cjew5ez91.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_4nbnsy14cjew5ez91.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_6l42pqxfjew5ex38.fromDom(rng.startContainer);
        var finish = $_6l42pqxfjew5ex38.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_7dy0g314qjew5ezan = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_3c7zck14hjew5ez9k.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_gcm4to14pjew5ezak.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_onqhk14ijew5ez9t.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.setBaseAndExtent) {
          selection.setBaseAndExtent(start.dom(), soffset, finish.dom(), foffset);
        } else if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_7dy0g314qjew5ezan.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_7dy0g314qjew5ezan.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_4nbnsy14cjew5ez91.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_3c7zck14hjew5ez9k.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_7dy0g314qjew5ezan.preprocess(selection);
    return $_onqhk14ijew5ez9t.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_4nbnsy14cjew5ez91.range($_6l42pqxfjew5ex38.fromDom(firstRng.startContainer), firstRng.startOffset, $_6l42pqxfjew5ex38.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_6l42pqxfjew5ex38.fromDom(selection.anchorNode);
    var focusNode = $_6l42pqxfjew5ex38.fromDom(selection.focusNode);
    return $_59d9pg14fjew5ez9f.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_4nbnsy14cjew5ez91.range($_6l42pqxfjew5ex38.fromDom(selection.anchorNode), selection.anchorOffset, $_6l42pqxfjew5ex38.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_3c7zck14hjew5ez9k.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_3c7zck14hjew5ez9k.selectNodeContents(win, element);
    return $_4nbnsy14cjew5ez91.range($_6l42pqxfjew5ex38.fromDom(rng.startContainer), rng.startOffset, $_6l42pqxfjew5ex38.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : Option.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_4nbnsy14cjew5ez91.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_onqhk14ijew5ez9t.asLtrRange(win, selection);
    return $_3c7zck14hjew5ez9k.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_onqhk14ijew5ez9t.asLtrRange(win, selection);
    return $_3c7zck14hjew5ez9k.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_3siw9o14jjew5eza2.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_onqhk14ijew5ez9t.asLtrRange(win, selection);
    return $_3c7zck14hjew5ez9k.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_onqhk14ijew5ez9t.asLtrRange(win, selection);
    return $_3c7zck14hjew5ez9k.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_onqhk14ijew5ez9t.asLtrRange(win, selection);
    var fragment = $_b27uvg14gjew5ez9g.fromElements(elements, win.document);
    $_3c7zck14hjew5ez9k.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_onqhk14ijew5ez9t.asLtrRange(win, selection);
    $_3c7zck14hjew5ez9k.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_4ki9avx9jew5ex2r.eq(start, finish) && soffset === foffset;
  };
  var $_gi003m14ejew5ez9a = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_canvefwjjew5ex06.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect$1 = function (rawRect) {
    return {
      left: $_canvefwjjew5ex06.constant(rawRect.left),
      top: $_canvefwjjew5ex06.constant(rawRect.top),
      right: $_canvefwjjew5ex06.constant(rawRect.right),
      bottom: $_canvefwjjew5ex06.constant(rawRect.bottom),
      width: $_canvefwjjew5ex06.constant(rawRect.width),
      height: $_canvefwjjew5ex06.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_8gfg1pwsjew5ex0r.map(range.getClientRects(), toRect$1);
    } else {
      var start_1 = $_6l42pqxfjew5ex38.fromDom(range.startContainer);
      return $_ggckh3x3jew5ex2a.parent(start_1).bind(function (parent) {
        var selection = $_4nbnsy14cjew5ez91.exact(start_1, range.startOffset, parent, $_5obrc3149jew5ez8t.getEnd(parent));
        var optRect = $_gi003m14ejew5ez9a.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_8gfg1pwsjew5ex0r.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_byhr1r148jew5ez8j = { getRectangles: getRectangles };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_6l42pqxfjew5ex38.fromDom(cWin.document.body);
    var inInput = $_g2xew8ytjew5exgp.active().exists(function (elem) {
      return $_8gfg1pwsjew5ex0r.contains([
        'input',
        'textarea'
      ], $_3s4ecrxkjew5ex3m.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_canvefwjjew5ex06.apply;
    transaction(function () {
      $_g2xew8ytjew5exgp.active().each($_g2xew8ytjew5exgp.blur);
      $_g2xew8ytjew5exgp.focus(iBody);
    });
  };
  var $_d92fkz14rjew5ezaq = { resume: resume };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_chb5sszejew5exl7.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_cwmn4ixrjew5ex55.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_btyelg147jew5ez8h.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_canvefwjjew5ex06.constant(rect.top()),
      bottom: $_canvefwjjew5ex06.constant(rect.top() + rect.height())
    };
  };
  var getBounds$2 = function (cWin) {
    var rects = $_byhr1r148jew5ez8j.getRectangles(cWin);
    return rects.length > 0 ? Option.some(rects[0]).map(getBoundsFrom) : Option.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? Option.some(last - current) : Option.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_6l42pqxfjew5ex38.fromDom(cWin.document.body);
    var toEditing = function () {
      $_d92fkz14rjew5ezaq.resume(cWin);
    };
    var onResize = $_4mbdev13xjew5ez6d.bind($_6l42pqxfjew5ex38.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds$2(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_3v6qrx146jew5ez8a = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return Option.some($_6l42pqxfjew5ex38.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return Option.some($_6l42pqxfjew5ex38.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return Option.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_gi003m14ejew5ez9a.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_4mbdev13xjew5ez6d.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_canvefwjjew5ex06.constant(rect.left),
      top: $_canvefwjjew5ex06.constant(rect.top),
      right: $_canvefwjjew5ex06.constant(rect.right),
      bottom: $_canvefwjjew5ex06.constant(rect.bottom),
      width: $_canvefwjjew5ex06.constant(rect.width),
      height: $_canvefwjjew5ex06.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_4ki9avx9jew5ex2r.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect$2) : Option.none();
      };
      return $_gi003m14ejew5ez9a.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_6l42pqxfjew5ex38.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_gi003m14ejew5ez9a.get(win).bind(function (sel) {
                return $_gi003m14ejew5ez9a.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_gi003m14ejew5ez9a.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_gi003m14ejew5ez9a.clear(win);
            };
          });
          return {
            body: $_canvefwjjew5ex06.constant(body),
            doc: $_canvefwjjew5ex06.constant(doc),
            win: $_canvefwjjew5ex06.constant(win),
            html: $_canvefwjjew5ex06.constant(html),
            getSelection: $_canvefwjjew5ex06.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_canvefwjjew5ex06.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_5vkk6014sjew5ezax = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_5em8cowkjew5ex09.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_4njywe103jew5exsr.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_9ipr2mzvjew5exr1.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_cwmn4ixrjew5ex55.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_cwmn4ixrjew5ex55.set(element, attr, backup);
          $_cwmn4ixrjew5ex55.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_9ipr2mzvjew5exr1.ancestors(container, '*');
    var siblings = $_8gfg1pwsjew5ex0r.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_8gfg1pwsjew5ex0r.each(siblings, clobber(siblingStyles));
    $_8gfg1pwsjew5ex0r.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_9ipr2mzvjew5exr1.all('[' + attr + ']');
    $_8gfg1pwsjew5ex0r.each(clobberedEls, function (element) {
      var restore = $_cwmn4ixrjew5ex55.get(element, attr);
      if (restore !== 'no-styles') {
        $_cwmn4ixrjew5ex55.set(element, 'style', restore);
      } else {
        $_cwmn4ixrjew5ex55.remove(element, 'style');
      }
      $_cwmn4ixrjew5ex55.remove(element, attr);
    });
  };
  var $_bl3a4114tjew5ezbb = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_5q4kn4zxjew5exr5.first('head').getOrDie();
    var nu = function () {
      var meta = $_6l42pqxfjew5ex38.fromTag('meta');
      $_cwmn4ixrjew5ex55.set(meta, 'name', 'viewport');
      $_6ub189x2jew5ex27.append(head, meta);
      return meta;
    };
    var element = $_5q4kn4zxjew5exr5.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_cwmn4ixrjew5ex55.get(element, 'content');
    var maximize = function () {
      $_cwmn4ixrjew5ex55.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_cwmn4ixrjew5ex55.set(element, 'content', backup);
      } else {
        $_cwmn4ixrjew5ex55.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_22jd1214ujew5ezbi = { tag: tag };

  var create$5 = function (platform, mask) {
    var meta = $_22jd1214ujew5ezbi.tag();
    var androidApi = $_a7ua5y12ojew5eyp8.api();
    var androidEvents = $_a7ua5y12ojew5eyp8.api();
    var enter = function () {
      mask.hide();
      $_bn0n6qynjew5exgc.add(platform.container, $_chb5sszejew5exl7.resolve('fullscreen-maximized'));
      $_bn0n6qynjew5exgc.add(platform.container, $_chb5sszejew5exl7.resolve('android-maximized'));
      meta.maximize();
      $_bn0n6qynjew5exgc.add(platform.body, $_chb5sszejew5exl7.resolve('android-scroll-reload'));
      androidApi.set($_3v6qrx146jew5ez8a.setup(platform.win, $_5vkk6014sjew5ezax.getWin(platform.editor).getOrDie('no')));
      $_5vkk6014sjew5ezax.getActiveApi(platform.editor).each(function (editorApi) {
        $_bl3a4114tjew5ezbb.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_8ccksu142jew5ez6y.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_bn0n6qynjew5exgc.remove(platform.container, $_chb5sszejew5exl7.resolve('fullscreen-maximized'));
      $_bn0n6qynjew5exgc.remove(platform.container, $_chb5sszejew5exl7.resolve('android-maximized'));
      $_bl3a4114tjew5ezbb.restoreStyles();
      $_bn0n6qynjew5exgc.remove(platform.body, $_chb5sszejew5exl7.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_9cw55s141jew5ez6u = { create: create$5 };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_7dtajp14wjew5ezc0 = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_dpxqkh11rjew5eyi0.record(Container.sketch({
      dom: $_wki84113jew5ey7a.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_28kh8wy2jew5ex8l.derive([Toggling.config({
          toggleClass: $_chb5sszejew5exl7.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_7dtajp14wjew5ezc0.first(onView, 200);
    return Container.sketch({
      dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_28kh8wy2jew5ex8l.derive([Toggling.config({ toggleClass: $_chb5sszejew5exl7.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_2vnud14vjew5ezbs = { sketch: sketch$10 };

  var MobileSchema = $_bf8n0dyejew5exeb.objOf([
    $_f9u1aky7jew5exbr.strictObjOf('editor', [
      $_f9u1aky7jew5exbr.strict('getFrame'),
      $_f9u1aky7jew5exbr.option('getBody'),
      $_f9u1aky7jew5exbr.option('getDoc'),
      $_f9u1aky7jew5exbr.option('getWin'),
      $_f9u1aky7jew5exbr.option('getSelection'),
      $_f9u1aky7jew5exbr.option('setSelection'),
      $_f9u1aky7jew5exbr.option('clearSelection'),
      $_f9u1aky7jew5exbr.option('cursorSaver'),
      $_f9u1aky7jew5exbr.option('onKeyup'),
      $_f9u1aky7jew5exbr.option('onNodeChanged'),
      $_f9u1aky7jew5exbr.option('getCursorBox'),
      $_f9u1aky7jew5exbr.strict('onDomChanged'),
      $_f9u1aky7jew5exbr.defaulted('onTouchContent', $_canvefwjjew5ex06.noop),
      $_f9u1aky7jew5exbr.defaulted('onTapContent', $_canvefwjjew5ex06.noop),
      $_f9u1aky7jew5exbr.defaulted('onTouchToolstrip', $_canvefwjjew5ex06.noop),
      $_f9u1aky7jew5exbr.defaulted('onScrollToCursor', $_canvefwjjew5ex06.constant({ unbind: $_canvefwjjew5ex06.noop })),
      $_f9u1aky7jew5exbr.defaulted('onScrollToElement', $_canvefwjjew5ex06.constant({ unbind: $_canvefwjjew5ex06.noop })),
      $_f9u1aky7jew5exbr.defaulted('onToEditing', $_canvefwjjew5ex06.constant({ unbind: $_canvefwjjew5ex06.noop })),
      $_f9u1aky7jew5exbr.defaulted('onToReading', $_canvefwjjew5ex06.constant({ unbind: $_canvefwjjew5ex06.noop })),
      $_f9u1aky7jew5exbr.defaulted('onToolbarScrollStart', $_canvefwjjew5ex06.identity)
    ]),
    $_f9u1aky7jew5exbr.strict('socket'),
    $_f9u1aky7jew5exbr.strict('toolstrip'),
    $_f9u1aky7jew5exbr.strict('dropup'),
    $_f9u1aky7jew5exbr.strict('toolbar'),
    $_f9u1aky7jew5exbr.strict('container'),
    $_f9u1aky7jew5exbr.strict('alloy'),
    $_f9u1aky7jew5exbr.state('win', function (spec) {
      return $_ggckh3x3jew5ex2a.owner(spec.socket).dom().defaultView;
    }),
    $_f9u1aky7jew5exbr.state('body', function (spec) {
      return $_6l42pqxfjew5ex38.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_f9u1aky7jew5exbr.defaulted('translate', $_canvefwjjew5ex06.identity),
    $_f9u1aky7jew5exbr.defaulted('setReadOnly', $_canvefwjjew5ex06.noop)
  ]);

  var produce = function (raw) {
    var mobile = $_bf8n0dyejew5exeb.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_4njywe103jew5exsr.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_nb5c312tjew5eyqn.build($_2vnud14vjew5ezbs.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_6ub189x2jew5ex27.append(mobile.container, mask.element());
    var mode = $_9cw55s141jew5ez6u.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_canvefwjjew5ex06.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_canvefwjjew5ex06.noop
    };
  };
  var $_9orxg8140jew5ez6o = { produce: produce };

  var schema$14 = [
    $_f9u1aky7jew5exbr.defaulted('shell', true),
    $_f340m10ojew5ey0j.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_28kh8wy2jew5ex8l.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_aecs1b10vjew5ey49.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_6ph61w150jew5ezdo = {
    name: $_canvefwjjew5ex06.constant('Toolbar'),
    schema: $_canvefwjjew5ex06.constant(schema$14),
    parts: $_canvefwjjew5ex06.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? Option.some(component) : $_a8k3zw10tjew5ey30.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive(extra.behaviours), $_f340m10ojew5ey0j.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_alx4m710pjew5ey14.composite({
    name: 'Toolbar',
    configFields: $_6ph61w150jew5ezdo.schema(),
    partFields: $_6ph61w150jew5ezdo.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_f9u1aky7jew5exbr.strict('items'),
    $_behq97z6jew5exio.markers(['itemClass']),
    $_f340m10ojew5ey0j.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_aecs1b10vjew5ey49.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_dcnqdc152jew5ezep = {
    name: $_canvefwjjew5ex06.constant('ToolbarGroup'),
    schema: $_canvefwjjew5ex06.constant(schema$15),
    parts: $_canvefwjjew5ex06.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_dq5f6lwyjew5ex17.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_dq5f6lwyjew5ex17.deepMerge($_28kh8wy2jew5ex8l.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_f340m10ojew5ey0j.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_alx4m710pjew5ey14.composite({
    name: 'ToolbarGroup',
    configFields: $_dcnqdc152jew5ezep.schema(),
    partFields: $_dcnqdc152jew5ezep.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_chb5sszejew5exl7.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_cwmn4ixrjew5ex55.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_cwmn4ixrjew5ex55.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_4mbdev13xjew5ez6d.bind(scope, 'touchmove', function (event) {
      $_5q4kn4zxjew5exr5.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_canvefwjjew5ex06.noop);
    });
  };
  var $_aftjgk153jew5ezeu = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  function ScrollingToolbar () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_wki84113jew5ey7a.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_28kh8wy2jew5ex8l.derive([$_8macs2126jew5eyk7.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_cd3e46y4jew5exah.runOnInit(function (component, simulatedEvent) {
              $_4njywe103jew5exsr.set(component.element(), 'overflow-x', 'auto');
              $_aftjgk153jew5ezeu.markAsHorizontal(component.element());
              $_g8tq7u13ujew5ez5z.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_chb5sszejew5exl7.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_nb5c312tjew5eyqn.build(Toolbar.sketch({
      dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_28kh8wy2jew5ex8l.derive([
        Toggling.config({
          toggleClass: $_chb5sszejew5exl7.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_nb5c312tjew5eyqn.build(Container.sketch({
      dom: { classes: [$_chb5sszejew5exl7.resolve('toolstrip')] },
      components: [$_nb5c312tjew5eyqn.premade(toolbar)],
      containerBehaviours: $_28kh8wy2jew5ex8l.derive([Toggling.config({
          toggleClass: $_chb5sszejew5exl7.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_8gfg1pwsjew5ex0r.map(gs, $_canvefwjjew5ex06.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_canvefwjjew5ex06.constant(wrapper),
      toolbar: $_canvefwjjew5ex06.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  }

  var makeEditSwitch = function (webapp) {
    return $_nb5c312tjew5eyqn.build(Button.sketch({
      dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_nb5c312tjew5eyqn.build(Container.sketch({
      dom: $_wki84113jew5ey7a.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_28kh8wy2jew5ex8l.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_nb5c312tjew5eyqn.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_3alz6w154jew5ezf1 = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_b8d8rt137jew5eyx3.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_bn0n6qynjew5exgc.remove(component.element(), slideConfig.openClass());
    $_bn0n6qynjew5exgc.add(component.element(), slideConfig.closedClass());
    $_4njywe103jew5exsr.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_4njywe103jew5exsr.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_bn0n6qynjew5exgc.remove(component.element(), slideConfig.closedClass());
    $_bn0n6qynjew5exgc.add(component.element(), slideConfig.openClass());
    $_4njywe103jew5exsr.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_4njywe103jew5exsr.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_4njywe103jew5exsr.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_4njywe103jew5exsr.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_4njywe103jew5exsr.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_bn0n6qynjew5exgc.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_bn0n6qynjew5exgc.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_4njywe103jew5exsr.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_bn0n6qynjew5exgc.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_bn0n6qynjew5exgc.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_f5sv5y158jew5ezg9 = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_d2rguyhjew5exf6.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_d2rguyhjew5exf6.nu({
      classes: [slideConfig.closedClass()],
      styles: $_2kiiw5xsjew5ex5p.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_cd3e46y4jew5exah.derive([$_cd3e46y4jew5exah.run($_6at0t9wijew5ex03.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_f5sv5y158jew5ezg9.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_4njywe103jew5exsr.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_7rddg3157jew5ezfs = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_f9u1aky7jew5exbr.strict('closedClass'),
    $_f9u1aky7jew5exbr.strict('openClass'),
    $_f9u1aky7jew5exbr.strict('shrinkingClass'),
    $_f9u1aky7jew5exbr.strict('growingClass'),
    $_f9u1aky7jew5exbr.option('getAnimationRoot'),
    $_behq97z6jew5exio.onHandler('onShrunk'),
    $_behq97z6jew5exio.onHandler('onStartShrink'),
    $_behq97z6jew5exio.onHandler('onGrown'),
    $_behq97z6jew5exio.onHandler('onStartGrow'),
    $_f9u1aky7jew5exbr.defaulted('expanded', false),
    $_f9u1aky7jew5exbr.strictOf('dimension', $_bf8n0dyejew5exeb.choose('property', {
      width: [
        $_behq97z6jew5exio.output('property', 'width'),
        $_behq97z6jew5exio.output('getDimension', function (elem) {
          return $_3zjly311kjew5eye1.get(elem) + 'px';
        })
      ],
      height: [
        $_behq97z6jew5exio.output('property', 'height'),
        $_behq97z6jew5exio.output('getDimension', function (elem) {
          return $_3y0dbe102jew5exsp.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_canvefwjjew5ex06.curry(state.set, false),
      setExpanded: $_canvefwjjew5ex06.curry(state.set, true),
      readState: readState
    });
  };
  var $_l992q15ajew5ezh4 = { init: init$4 };

  var Sliding = $_28kh8wy2jew5ex8l.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_7rddg3157jew5ezfs,
    apis: $_f5sv5y158jew5ezg9,
    state: $_l992q15ajew5ezh4
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_nb5c312tjew5eyqn.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_chb5sszejew5exl7.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_28kh8wy2jew5ex8l.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_chb5sszejew5exl7.resolve('dropup-closed'),
          openClass: $_chb5sszejew5exl7.resolve('dropup-open'),
          shrinkingClass: $_chb5sszejew5exl7.resolve('dropup-shrinking'),
          growingClass: $_chb5sszejew5exl7.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_5e9sbezdjew5exl4.orientation(function (component, data) {
          disappear($_canvefwjjew5ex06.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_canvefwjjew5ex06.constant(dropup),
      element: dropup.element
    };
  };
  var $_7cu5as155jew5ezf9 = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_bu7wavzpjew5exp7.BACKSPACE()[0] && !$_8gfg1pwsjew5ex0r.contains([
      'input',
      'textarea'
    ], $_3s4ecrxkjew5ex3m.name(event.target()));
  };
  var isFirefox = $_5em8cowkjew5ex09.detect().browser.isFirefox();
  var settingsSchema = $_bf8n0dyejew5exeb.objOfOnly([
    $_f9u1aky7jew5exbr.strictFunction('triggerEvent'),
    $_f9u1aky7jew5exbr.strictFunction('broadcastEvent'),
    $_f9u1aky7jew5exbr.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_4mbdev13xjew5ez6d.capture(container, 'focus', handler);
    } else {
      return $_4mbdev13xjew5ez6d.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_4mbdev13xjew5ez6d.capture(container, 'blur', handler);
    } else {
      return $_4mbdev13xjew5ez6d.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_bf8n0dyejew5exeb.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_5em8cowkjew5ex09.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_czd3o0144jew5ez7v.monitor(settings);
    var simpleEvents = $_8gfg1pwsjew5ex0r.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_4mbdev13xjew5ez6d.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_4mbdev13xjew5ez6d.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_7v4jjhwhjew5ewzm.postBlur(), event);
      }, 0);
    });
    var defaultView = $_ggckh3x3jew5ex2a.defaultView(container);
    var onWindowScroll = $_4mbdev13xjew5ez6d.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_7v4jjhwhjew5ewzm.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_8gfg1pwsjew5ex0r.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_6t8c7z15djew5ezij = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_2kiiw5xsjew5ex5p.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_7ee0on15fjew5ezje = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_canvefwjjew5ex06.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_canvefwjjew5ex06.noop,
      isStopped: stopper.get,
      isCut: $_canvefwjjew5ex06.constant(false),
      event: $_canvefwjjew5ex06.constant(event),
      setTarget: $_canvefwjjew5ex06.die('Cannot set target of a broadcasted event'),
      getTarget: $_canvefwjjew5ex06.die('Cannot get target of a broadcasted event')
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_ahjfax15gjew5ezjt = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_9ui8pqxwjew5ex6u.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_ahjfax15gjew5ezjt.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_7y44lx134jew5eyvn.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_ggckh3x3jew5ex2a.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_7ee0on15fjew5ezje.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_ahjfax15gjew5ezjt.fromExternal(rawEvent);
    $_8gfg1pwsjew5ex0r.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_7y44lx134jew5eyvn.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_7ee0on15fjew5ezje.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_bztfb415ejew5ezj4 = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_6a8c1uyvjew5exgv.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_ehgnj415jjew5ezkz = { closest: closest$4 };

  var eventHandler = $_boyhvrx4jew5ex2k.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_canvefwjjew5ex06.constant(id),
      descHandler: $_canvefwjjew5ex06.constant(handler)
    };
  };
  function EventRegistry () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_4355kjx0jew5ex1g.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_7y44lx134jew5eyvn.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_8o9vo010xjew5ey5l.read(elem).fold(function (err) {
        return Option.none();
      }, function (id) {
        var reader = $_2kiiw5xsjew5ex5p.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_2kiiw5xsjew5ex5p.readOptFrom(registry, type).map(function (handlers) {
        return $_4355kjx0jew5ex1g.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_2kiiw5xsjew5ex5p.readOpt(type);
      var handlers = readType(registry);
      return $_ehgnj415jjew5ezkz.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_4355kjx0jew5ex1g.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  }

  function Registry () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_8o9vo010xjew5ey5l.read(elem).fold(function () {
        return $_8o9vo010xjew5ey5l.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_8z0teyxmjew5ex4t.element(conflict.element()) + '\nCannot use it for: ' + $_8z0teyxmjew5ex4t.element(component.element()) + '\n' + 'The conflicting element is' + ($_1b1xj3xjjew5ex3i.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_2kiiw5xsjew5ex5p.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_8o9vo010xjew5ey5l.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_2kiiw5xsjew5ex5p.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  }

  var create$6 = function () {
    var root = $_nb5c312tjew5eyqn.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_ggckh3x3jew5ex2a.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_4ki9avx9jew5ex2r.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_6t8c7z15djew5ezij.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_9u510wxljew5ex4g.monitorEvent(eventName, event.target(), function (logger) {
          return $_bztfb415ejew5ezj4.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_bztfb415ejew5ezj4.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_canvefwjjew5ex06.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_9u510wxljew5ex4g.monitorEvent(customType, target, function (logger) {
          $_bztfb415ejew5ezj4.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_8o9vo010xjew5ey5l.read(target).fold(function () {
          $_g2xew8ytjew5exgp.focus(target);
        }, function (_alloyId) {
          $_9u510wxljew5ex4g.monitorEvent($_7v4jjhwhjew5ewzm.focus(), target, function (logger) {
            $_bztfb415ejew5ezj4.triggerHandler(lookup, $_7v4jjhwhjew5ewzm.focus(), {
              originator: $_canvefwjjew5ex06.constant(originator),
              target: $_canvefwjjew5ex06.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_nb5c312tjew5eyqn.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_3s4ecrxkjew5ex3m.isText(component.element())) {
        registry.register(component);
        $_8gfg1pwsjew5ex0r.each(component.components(), addToWorld);
        systemApi.triggerEvent($_7v4jjhwhjew5ewzm.systemInit(), component.element(), { target: $_canvefwjjew5ex06.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_3s4ecrxkjew5ex3m.isText(component.element())) {
        $_8gfg1pwsjew5ex0r.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_7ds2sdx1jew5ex1r.attach(root, component);
    };
    var remove = function (component) {
      $_7ds2sdx1jew5ex1r.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_dus6xhxhjew5ex3d.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_7v4jjhwhjew5ewzm.receive());
      $_8gfg1pwsjew5ex0r.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_7y44lx134jew5eyvn.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_canvefwjjew5ex06.constant(true),
        data: $_canvefwjjew5ex06.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_canvefwjjew5ex06.constant(false),
        channels: $_canvefwjjew5ex06.constant(channels),
        data: $_canvefwjjew5ex06.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, Result.value);
    };
    var getByDom = function (elem) {
      return $_8o9vo010xjew5ey5l.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_canvefwjjew5ex06.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_6ir7wj15cjew5ezht = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_canvefwjjew5ex06.constant($_chb5sszejew5exl7.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_canvefwjjew5ex06.constant($_chb5sszejew5exl7.resolve('edit-mode'));
  function OuterContainer (spec) {
    var root = $_nb5c312tjew5eyqn.build(Container.sketch({
      dom: { classes: [$_chb5sszejew5exl7.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_28kh8wy2jew5ex8l.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_6ir7wj15cjew5ezht.takeover(root);
  }

  function AndroidRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_chb5sszejew5exl7.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_a7ua5y12ojew5eyp8.api();
    var switchToEdit = $_3alz6w154jew5ezf1.makeEditSwitch(webapp);
    var socket = $_3alz6w154jew5ezf1.makeSocket();
    var dropup = $_7cu5as155jew5ezf9.build($_canvefwjjew5ex06.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_9orxg8140jew5ez6o.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_3alz6w154jew5ezf1.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_canvefwjjew5ex06.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_canvefwjjew5ex06.constant(socket),
      dropup: $_canvefwjjew5ex06.constant(dropup)
    };
  }

  var input = function (parent, operation) {
    var input = $_6l42pqxfjew5ex38.fromTag('input');
    $_4njywe103jew5exsr.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_6ub189x2jew5ex27.append(parent, input);
    $_g2xew8ytjew5exgp.focus(input);
    operation(input);
    $_dus6xhxhjew5ex3d.remove(input);
  };
  var $_ddqc7c15ojew5ezlw = { input: input };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_g2xew8ytjew5exgp.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_9lmmnu15qjew5ezm7 = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_g2xew8ytjew5exgp.active().each(function (active) {
      if (!$_4ki9avx9jew5ex2r.eq(active, frame)) {
        $_g2xew8ytjew5exgp.blur(active);
      }
    });
    cWin.focus();
    $_g2xew8ytjew5exgp.focus($_6l42pqxfjew5ex38.fromDom(cWin.document.body));
    $_9lmmnu15qjew5ezm7.refresh(cWin);
  };
  var $_2qrks015pjew5ezm2 = { resume: resume$1 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_2qrks015pjew5ezm2.resume(cWin, frame);
    };
    var toReading = function () {
      $_ddqc7c15ojew5ezlw.input(outerBody, $_g2xew8ytjew5exgp.blur);
    };
    var captureInput = $_4mbdev13xjew5ez6d.bind(page, 'keydown', function (evt) {
      if (!$_8gfg1pwsjew5ex0r.contains([
          'input',
          'textarea'
        ], $_3s4ecrxkjew5ex3m.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_g2xew8ytjew5exgp.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_2qrks015pjew5ezm2.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_canvefwjjew5ex06.noop
    };
  };
  var $_177kfm15njew5ezlp = {
    stubborn: stubborn,
    timid: timid
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_3y0dbe102jew5exsp.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_5few3s143jew5ez7e.monitor(editorApi);
    var refreshThrottle = $_7dtajp14wjew5ezc0.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_4mbdev13xjew5ez6d.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_4ki9avx9jew5ex2r.eq(editorApi.html(), touchEvent.target()) || $_4ki9avx9jew5ex2r.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_4mbdev13xjew5ez6d.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_4mbdev13xjew5ez6d.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_4mbdev13xjew5ez6d.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_4mbdev13xjew5ez6d.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_4mbdev13xjew5ez6d.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_8gfg1pwsjew5ex0r.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_chiy1e15rjew5ezm9 = { initEvents: initEvents$1 };

  function FakeSelection (win, frame) {
    var doc = win.document;
    var container = $_6l42pqxfjew5ex38.fromTag('div');
    $_bn0n6qynjew5exgc.add(container, $_chb5sszejew5exl7.resolve('unfocused-selections'));
    $_6ub189x2jew5ex27.append($_6l42pqxfjew5ex38.fromDom(doc.documentElement), container);
    var onTouch = $_4mbdev13xjew5ez6d.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_2qrks015pjew5ezm2.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_6l42pqxfjew5ex38.fromTag('span');
      $_b8d8rt137jew5eyx3.add(span, [
        $_chb5sszejew5exl7.resolve('layer-editor'),
        $_chb5sszejew5exl7.resolve('unfocused-selection')
      ]);
      $_4njywe103jew5exsr.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_byhr1r148jew5ez8j.getRectangles(win);
      var spans = $_8gfg1pwsjew5ex0r.map(rectangles, make);
      $_6exptpxijew5ex3f.append(container, spans);
    };
    var clear = function () {
      $_dus6xhxhjew5ex3d.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_dus6xhxhjew5ex3d.remove(container);
    };
    var isActive = function () {
      return $_ggckh3x3jew5ex2a.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  }

  var nu$8 = function (baseFn) {
    var data = Option.none();
    var callbacks = [];
    var map = function (f) {
      return nu$8(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = Option.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_8gfg1pwsjew5ex0r.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var LazyValue = {
    nu: nu$8,
    pure: pure$1
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_526h9215xjew5eznl = { bounce: bounce };

  var nu$9 = function (baseFn) {
    var get = function (callback) {
      baseFn($_526h9215xjew5eznl.bounce(callback));
    };
    var map = function (fab) {
      return nu$9(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$9(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$9(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return LazyValue.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var Future = {
    nu: nu$9,
    pure: pure$2
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return Option.none();
    } else if (value < destination) {
      return Option.some(value + amount);
    } else {
      return Option.some(value - amount);
    }
  };
  var create$7 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_f7kayu15yjew5eznm = {
    create: create$7,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_8mb1tzy0jew5ex80.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? Option.some(device.keyboard) : Option.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_bo6z8x161jew5ezoc = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_bo6z8x161jew5ezoc.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_847mvk13wjew5ez66.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_ggckh3x3jew5ex2a.owner(socket).dom().defaultView;
    var viewportHeight = $_3y0dbe102jew5exsp.get(socket) + $_3y0dbe102jew5exsp.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_3y0dbe102jew5exsp.get(socket) + $_3y0dbe102jew5exsp.get(dropup) - greenzoneHeight;
    $_4njywe103jew5exsr.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_ehoo1d160jew5ezo5 = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_9ui8pqxwjew5ex6u.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_chb5sszejew5exl7.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_chb5sszejew5exl7.resolve('y-property');
  var yScrollingData = 'data-' + $_chb5sszejew5exl7.resolve('scrolling');
  var windowSizeData = 'data-' + $_chb5sszejew5exl7.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_btyelg147jew5ez8h.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_cwmn4ixrjew5ex55.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_btyelg147jew5ez8h.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_cwmn4ixrjew5ex55.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_9ipr2mzvjew5exr1.descendants(container, '[' + yFixedData + ']');
    return $_8gfg1pwsjew5ex0r.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_cwmn4ixrjew5ex55.get(toolbar, 'style');
    $_4njywe103jew5exsr.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_cwmn4ixrjew5ex55.set(toolbar, yFixedData, '0px');
    $_cwmn4ixrjew5ex55.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_cwmn4ixrjew5ex55.set(toolbar, 'style', oldToolbarStyle || '');
      $_cwmn4ixrjew5ex55.remove(toolbar, yFixedData);
      $_cwmn4ixrjew5ex55.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_cwmn4ixrjew5ex55.get(viewport, 'style');
    $_g8tq7u13ujew5ez5z.register(viewport);
    $_4njywe103jew5exsr.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_cwmn4ixrjew5ex55.set(viewport, yFixedData, toolbarHeight + 'px');
    $_cwmn4ixrjew5ex55.set(viewport, yScrollingData, 'true');
    $_cwmn4ixrjew5ex55.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_g8tq7u13ujew5ez5z.deregister(viewport);
      $_cwmn4ixrjew5ex55.set(viewport, 'style', oldViewportStyle || '');
      $_cwmn4ixrjew5ex55.remove(viewport, yFixedData);
      $_cwmn4ixrjew5ex55.remove(viewport, yScrollingData);
      $_cwmn4ixrjew5ex55.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_cwmn4ixrjew5ex55.get(dropup, 'style');
    $_4njywe103jew5exsr.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_cwmn4ixrjew5ex55.set(dropup, yFixedData, '0px');
    $_cwmn4ixrjew5ex55.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_cwmn4ixrjew5ex55.set(dropup, 'style', oldDropupStyle || '');
      $_cwmn4ixrjew5ex55.remove(dropup, yFixedData);
      $_cwmn4ixrjew5ex55.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_ggckh3x3jew5ex2a.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_cwmn4ixrjew5ex55.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_ggckh3x3jew5ex2a.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_3y0dbe102jew5exsp.get(toolbar);
    var dropupHeight = $_3y0dbe102jew5exsp.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_3y0dbe102jew5exsp.get(toolbar);
        var dropupHeight_1 = $_3y0dbe102jew5exsp.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_cwmn4ixrjew5ex55.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_4njywe103jew5exsr.set(viewport, 'height', newHeight + 'px');
        $_4njywe103jew5exsr.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_ehoo1d160jew5ezo5.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_cwmn4ixrjew5ex55.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_ehoo1d160jew5ezo5.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_canvefwjjew5ex06.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_28k8bc15zjew5eznp = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_f7kayu15yjew5eznm.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_chb5sszejew5exl7.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_4njywe103jew5exsr.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return Future.nu(function (callback) {
      var getCurrent = $_canvefwjjew5ex06.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_4njywe103jew5exsr.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_4njywe103jew5exsr.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_canvefwjjew5ex06.curry(getScrollTop, element);
      $_cwmn4ixrjew5ex55.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_btyelg147jew5ez8h.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_cwmn4ixrjew5ex55.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_cwmn4ixrjew5ex55.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_canvefwjjew5ex06.curry(getTop, element);
      var update = function (newTop) {
        $_4njywe103jew5exsr.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_28k8bc15zjew5eznp.getYFixedData(element) + 'px';
    $_4njywe103jew5exsr.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_ggckh3x3jew5ex2a.owner(toolbar).dom().defaultView;
    return Future.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_efsi9t15ujew5eznb = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  function BackgroundActivity (doAction) {
    var action = Cell(LazyValue.pure({}));
    var start = function (value) {
      var future = LazyValue.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  }

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_ehoo1d160jew5ezo5.getGreenzone(socket, dropup);
    var refreshCursor = $_canvefwjjew5ex06.curry($_9lmmnu15qjew5ezm7.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_efsi9t15ujew5eznb.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_efsi9t15ujew5eznb.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_6mzqxh163jew5ezop = { scrollIntoView: scrollIntoView };

  var par = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_8gfg1pwsjew5ex0r.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_f31aj6166jew5ezp0 = { par: par };

  var par$1 = function (futures) {
    return $_f31aj6166jew5ezp0.par(futures, Future.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_8gfg1pwsjew5ex0r.map(array, fn);
    return par$1(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_1i7exh165jew5ezoz = {
    par: par$1,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_4njywe103jew5exsr.set(element, property, destination + 'px');
    return Future.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_4njywe103jew5exsr.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_efsi9t15ujew5eznb.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_28k8bc15zjew5eznp.findFixtures(container);
    var updates = $_8gfg1pwsjew5ex0r.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_1i7exh165jew5ezoz.par(updates);
  };
  var $_ax8v67164jew5ezot = { updatePositions: updatePositions };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_efsi9t15ujew5eznb.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_byhr1r148jew5ez8j.getRectangles(cWin);
      return Option.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? Option.some({
          top: $_canvefwjjew5ex06.constant(viewTop),
          bottom: $_canvefwjjew5ex06.constant(viewTop + rect.height())
        }) : Option.none();
      });
    };
    var scrollThrottle = $_7dtajp14wjew5ezc0.last(function () {
      scroller.idle(function () {
        $_ax8v67164jew5ezot.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_4mbdev13xjew5ez6d.bind($_6l42pqxfjew5ex38.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_ax8v67164jew5ezot.updatePositions(container, outerWindow.pageYOffset).get($_canvefwjjew5ex06.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_28k8bc15zjew5eznp.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_1b1xj3xjjew5ex3i.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_847mvk13wjew5ez66.onChange(outerWindow, {
      onChange: $_canvefwjjew5ex06.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_4mbdev13xjew5ez6d.bind($_6l42pqxfjew5ex38.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_6mzqxh163jew5ezop.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_4njywe103jew5exsr.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_efsi9t15ujew5eznb.moveOnlyTop(socket, newYOffset).get($_canvefwjjew5ex06.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_ddqc7c15ojew5ezlw.input($_1b1xj3xjjew5ex3i.body(), $_g2xew8ytjew5exgp.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_canvefwjjew5ex06.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_bj9e3q15sjew5ezmm = { setup: setup$3 };

  var create$8 = function (platform, mask) {
    var meta = $_22jd1214ujew5ezbi.tag();
    var priorState = $_a7ua5y12ojew5eyp8.value();
    var scrollEvents = $_a7ua5y12ojew5eyp8.value();
    var iosApi = $_a7ua5y12ojew5eyp8.api();
    var iosEvents = $_a7ua5y12ojew5eyp8.api();
    var enter = function () {
      mask.hide();
      var doc = $_6l42pqxfjew5ex38.fromDom(document);
      $_5vkk6014sjew5ezax.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_4njywe103jew5exsr.getRaw(platform.socket, 'height'),
          iframeHeight: $_4njywe103jew5exsr.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_aftjgk153jew5ezeu.exclusive(doc, '.' + $_g8tq7u13ujew5ez5z.scrollable()) });
        $_bn0n6qynjew5exgc.add(platform.container, $_chb5sszejew5exl7.resolve('fullscreen-maximized'));
        $_bl3a4114tjew5ezbb.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_4njywe103jew5exsr.set(platform.socket, 'overflow', 'scroll');
        $_4njywe103jew5exsr.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_g2xew8ytjew5exgp.focus(editorApi.body());
        var setupBag = $_boyhvrx4jew5ex2k.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_bj9e3q15sjew5ezmm.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_canvefwjjew5ex06.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_177kfm15njew5ezlp.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_chiy1e15rjew5ezm9.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_4njywe103jew5exsr.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_4njywe103jew5exsr.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_bn0n6qynjew5exgc.remove(platform.container, $_chb5sszejew5exl7.resolve('fullscreen-maximized'));
      $_bl3a4114tjew5ezbb.restoreStyles();
      $_g8tq7u13ujew5ez5z.deregister(platform.toolbar);
      $_4njywe103jew5exsr.remove(platform.socket, 'overflow');
      $_4njywe103jew5exsr.remove(platform.socket, '-webkit-overflow-scrolling');
      $_g2xew8ytjew5exgp.blur(platform.editor.getFrame());
      $_5vkk6014sjew5ezax.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_3ngvp615mjew5ezld = { create: create$8 };

  var produce$1 = function (raw) {
    var mobile = $_bf8n0dyejew5exeb.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_4njywe103jew5exsr.set(mobile.toolstrip, 'width', '100%');
    $_4njywe103jew5exsr.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_nb5c312tjew5eyqn.build($_2vnud14vjew5ezbs.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_3ngvp615mjew5ezld.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_canvefwjjew5ex06.noop
    };
  };
  var $_1bay4415ljew5ezl7 = { produce: produce$1 };

  function IosRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_chb5sszejew5exl7.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_a7ua5y12ojew5eyp8.api();
    var switchToEdit = $_3alz6w154jew5ezf1.makeEditSwitch(webapp);
    var socket = $_3alz6w154jew5ezf1.makeSocket();
    var dropup = $_7cu5as155jew5ezf9.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_1bay4415ljew5ezl7.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_3alz6w154jew5ezf1.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_canvefwjjew5ex06.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_canvefwjjew5ex06.constant(socket),
      dropup: $_canvefwjjew5ex06.constant(dropup)
    };
  }

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_2kiiw5xsjew5ex5p.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_3906wo167jew5ezp2 = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_8tfhkpz1jew5exhd.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_4355kjx0jew5ex1g.keys(editor.formatter.get());
    $_8gfg1pwsjew5ex0r.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_8gfg1pwsjew5ex0r.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_38g5z7169jew5ezp5 = {
    init: init$5,
    fontSizes: $_canvefwjjew5ex06.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_2909fj16ajew5ezp9 = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_canvefwjjew5ex06.constant('toReading');
  var EDITING = $_canvefwjjew5ex06.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_3906wo167jew5ezp2.derive(editor);
      if ($_cq1vg3z0jew5exh8.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_2909fj16ajew5ezp9.fireSkinLoaded(editor));
      } else {
        $_2909fj16ajew5ezp9.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_6l42pqxfjew5ex38.fromTag('div');
      var realm = $_5em8cowkjew5ex09.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_6l42pqxfjew5ex38.fromDom(args.targetNode);
      $_6ub189x2jew5ex27.after(original, wrapper);
      $_7ds2sdx1jew5ex1r.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_g2xew8ytjew5exgp.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_847mvk13wjew5ez66.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_8tfhkpz1jew5exhd.orientationChanged()], { width: $_847mvk13wjew5ez66.getActualWidth(outerWindow) });
        },
        onReady: $_canvefwjjew5ex06.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_6l42pqxfjew5ex38.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_canvefwjjew5ex06.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_6l42pqxfjew5ex38.fromDom(editor.editorContainer.querySelector('.' + $_chb5sszejew5exl7.resolve('toolbar')));
              findFocusIn(toolbar).each($_8ij4bdwgjew5ewz4.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_3s4ecrxkjew5ex3m.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_3s4ecrxkjew5ex3m.name(target) === 'a') {
                var component = realm.system().getByDom($_6l42pqxfjew5ex38.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_mq7lcyzjew5exh7.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_6l42pqxfjew5ex38.fromDom(editor.editorContainer),
          socket: $_6l42pqxfjew5ex38.fromDom(editor.contentAreaContainer),
          toolstrip: $_6l42pqxfjew5ex38.fromDom(editor.editorContainer.querySelector('.' + $_chb5sszejew5exl7.resolve('toolstrip'))),
          toolbar: $_6l42pqxfjew5ex38.fromDom(editor.editorContainer.querySelector('.' + $_chb5sszejew5exl7.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_canvefwjjew5ex06.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_8tfhkpz1jew5exhd.dropupDismissed()], {});
          });
        };
        $_9u510wxljew5ex4g.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_5slfa1zfjew5exl9.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_5slfa1zfjew5exl9.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_fz2m9cz2jew5exhg.setup(realm, editor);
        var items = $_fz2m9cz2jew5exhg.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_38g5z7169jew5ezp5.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_canvefwjjew5ex06.identity,
          close: $_canvefwjjew5ex06.noop,
          reposition: $_canvefwjjew5ex06.noop,
          getArgs: $_canvefwjjew5ex06.identity
        };
      },
      renderUI: renderUI
    };
  });
  function Theme () {
  }

  return Theme;

}());
})();
