(function() {

  return;
  Prism.hooks.add('wrap', function(env){
    if ( env.type.indexOf('md-src') >=0 ) {
      _content = env.content;
      env.content = _content + '<img src="' + _content + '">';
    }
  });

}());
