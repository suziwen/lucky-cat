importScripts('../js/xlsx.full.min.js');
postMessage({t:"ready"});

onmessage = function (oEvent) {
  var v;
  try {
    v = XLSX.read(oEvent.data.d, {type: oEvent.data.b ? 'binary' : 'base64'});
    postMessage({t:"xlsx", d:JSON.stringify(v)});
  } catch(e) { 
    postMessage({t:"e",d:e.stack||e});
  }
  //关闭 worker
  close();
};
