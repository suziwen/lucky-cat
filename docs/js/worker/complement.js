//计算补集
//
onmessage = function(e){
  function d(a, b) {
    return a.filter(function(x) {
      var findIndex;
      findIndex = function(e, i, a) {
        return e.join(',') === x.join(',');
      };    
      return b.findIndex(findIndex) < 0;
    });
  };
  try{
    const result = d(e.data[0], e.data[1]);
    postMessage(result);
  } catch (e) {
    postMessage([]);
  }
}
