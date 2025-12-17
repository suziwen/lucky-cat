var TableEditor = null;
var TableManager = null;
function setContent(tablehtml, attrs){
  var tableContainer = document.getElementById('tinymcetable');
  if (!!attrs) {
    for (var key in attrs) {
      var attr = attrs[key];
      if (key === 'id') {
        continue;
      }
      tableContainer.setAttribute(key, attr);
    }
  }
  if (!!tablehtml) {
    tableContainer.innerHTML = tablehtml;
  }
}

function createTableEditor(tablehtml, attrs, imageListFn, imageUploadHandlerFn, excelImportFn, tableManager, cb){
  TableManager = tableManager;
  setContent(tablehtml, attrs);
  initDragFilesSupport(excelImportFn);
  tinymce.init({
    selector: '#tinymcetable',
    fixed_toolbar_container: "#fix_toolbar",
    plugins: 'paste lists advlist autolink image searchreplace codesample table contextmenu textcolor colorpicker link autolink hr textpattern',
    language: 'zh_CN',
    menubar: false,
    toolbar: 'bold italic strikethrough underline removeformat | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | blockquote | codesample image | table lockresizetable',
    table_toolbarxx: "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | tablemergecells tablesplitcells",
    table_toolbar: false,
    contextmenu: "link codesample paste hr image inserttable | cell row column deletetable",
    image_list: imageListFn,
    images_upload_handler: imageUploadHandlerFn,
    image_advtab: true,
    automatic_uploads: true,
    images_replace_blob_uris: false,
    paste_data_images: true,
    forced_root_block: false,
    inline: true,
    codesample_dialog_height: 400,
    codesample_dialog_width: 400,
    setup: function (editor) {
      editor.addButton('lockresizetable', {
        icon: 'tableresize',
        tooltip: '调整表格大小',
        onclick: function(){
          this.active(!this.active());
          document.body.classList.toggle('lock_table_resize')
        }
      })
    },
    init_instance_callback: function(editor){
      console.log('init tinymce table editor success');
      TableEditor = editor;
      editor.convertFileDataToTableStr =  convertFileDataToTableStr;
      cb(null, editor);
    }
  });
}

function getContent(){
  if (!TableEditor) {
    return "";
  }
  var body = TableEditor.getBody();
  var attrs = body.attributes;
  var excludeAttrs = ["contenteditable", "spellcheck"];
  var excludeRex = /^data-mce/i
  var tableStrs = ["<table"];
  for(var i = attrs.length - 1; i >= 0; i--) {
    var attr = attrs[i];
    if (excludeRex.test(attr.name) || excludeAttrs.indexOf(attr.name) >= 0){
      continue
    }
    tableStrs.push(attr.name + "='" + attr.value + "'");
  }
  tableStrs.push(">");
  var content = TableEditor.getContent();
  tableStrs.push(content);
  tableStrs.push("</table>");
  var result =  tableStrs.join(" ");
  return result;
}


// callback , (error, tableStr)
function convertFileDataToTableStr(file, callback){
  var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
  function fixdata(data) {
    var o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
  }
  function process_wb(wb) {
    var o = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]], {editable:false});
    callback(null, o);
  }
  function xw(data, cb) {
    var worker = new Worker('./xlsx_worker.js');
    var _timeout = setTimeout(()=>{
      worker.terminate();
      callback("加载文件超时");
    }, 60000); //一分钟的超时
    worker.onmessage = function(e) {
      switch(e.data.t) {
        case 'ready': break;
        case 'e': clearTimeout(_timeout);_timeout=null;callback(e.data.d); break;
        case 'xlsx': clearTimeout(_timeout);_timeout=null;cb(JSON.parse(e.data.d)); break;
      }
    };
    var arr = rABS ? data : btoa(fixdata(data));
    worker.postMessage({d:arr,b:rABS});
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = e.target.result;
    function doitnow() {
      try {
        xw(data, process_wb);
      } catch(e) {
        console.log(e);
      }
    }
    doitnow();
  };
  reader.onerror = function(){ callback("加载文件出错")};
  reader.onabort = function(){ callback("加载文件被取消")};
  if (file && file.type.match(/text\/\w+/)) {
    reader.readAsText(file);
  } else {
    if(rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  }
}

function initDragFilesSupport (excelImportFn){
  var body = document.querySelector('body');
  body.addEventListener('dragover', (e)=> {
    e.preventDefault();
    e.stopPropagation();
  });
  body.addEventListener('drop', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    var files = e.dataTransfer.files;
    var f = files[0];
    TableManager.showDimmer()
    convertFileDataToTableStr(f, (error, result)=>{
      excelImportFn(error, result, ()=>{
        TableManager.hideDimmer();
      });
    });
  });
}
