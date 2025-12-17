pending = false;
MathJax.Hub.Config({
		 tex2jax: {
				inlineMath: [["$","$"],["\\(","\\)"]],
				ignoreClass: 'preview',
				processClass: 'mathjax'
		 },
		 TeX: { equationNumbers: {autoNumber: "AMS"}},
		 "SVG": {
				showMathMenu : false
			}   
});
(function() {
    var HUB = MathJax.Hub;
    if(!HUB.Cancel) {
        HUB.cancelTypeset = !1;
        HUB.Register.StartupHook("HTML-CSS Jax Config", function() {
            var HTMLCSS = MathJax.OutputJax["HTML-CSS"], TRANSLATE = HTMLCSS.Translate;
            HTMLCSS.Augment({Translate: function(script, state) {
                if(HUB.cancelTypeset || state.cancelled)
                    throw Error("MathJax Canceled");
                return TRANSLATE.call(HTMLCSS, script, state)
            }})
        });
        HUB.Register.StartupHook("SVG Jax Config", function() {
            var SVG = MathJax.OutputJax.SVG, TRANSLATE = SVG.Translate;
            SVG.Augment({Translate: function(script, state) {
                if(HUB.cancelTypeset || state.cancelled)
                    throw Error("MathJax Canceled");
                return TRANSLATE.call(SVG,
                    script, state)
            }})
        });
        HUB.Register.StartupHook("TeX Jax Config", function() {
            var TEX = MathJax.InputJax.TeX, TRANSLATE = TEX.Translate;
            TEX.Augment({Translate: function(script, state) {
                if(HUB.cancelTypeset || state.cancelled)
                    throw Error("MathJax Canceled");
                return TRANSLATE.call(TEX, script, state)
            }})
        });
        var PROCESSERROR = HUB.processError;
        HUB.processError = function(error, state, type) {
            if("MathJax Canceled" !== error.message)
                return PROCESSERROR.call(HUB, error, state, type);
            MathJax.Message.Clear(0, 0);
            state.jaxIDs = [];
            state.jax = {};
            state.scripts = [];
            state.i = state.j = 0;
            state.cancelled = true;
            return null
        };
        HUB.Cancel = function() {
            this.cancelTypeset = true
        }
    }
})();
beforeRenderPreview = function(callback){
    if (!pending){
        pending = true;
        MathJax.Hub.Cancel();
    }
    if (MathJax.InputJax.TeX && MathJax.InputJax.TeX.resetEquationNumbers){
        MathJax.Hub.Queue(["resetEquationNumbers", MathJax.InputJax.TeX]);
    }
    if (callback) {
        callback();
    }
}

if (window.mermaid){
  mermaid.parseError = function(error, hash){
    window.mermaidError = error;
  }

  window.checkMermaidParse = function(code){
    return window.mermaid.parse(code);
  }
  mermaid.htmlLabels = false;
  mermaid.ganttConfig = { // Configuration for Gantt diagrams
    numberSectionStyles:4,
    axisFormatter: [
        ["%I:%M", function (d) { // Within a day
            return d.getHours();
        }],
        ["w. %U", function (d) { // Monday a week
            return d.getDay() == 1;
        }],
        ["%a %d", function (d) { // Day within a week (not monday)
            return d.getDay() && d.getDate() != 1;
        }],
        ["%b %d", function (d) { // within a month
            return d.getDate() != 1;
        }],
        ["%m-%y", function (d) { // Month
            return d.getMonth();
        }]
    ]
  };

}

renderPreview = function(callback){
    MathJax.Hub.Queue(function(){
            pending = false;
            MathJax.Hub.cancelTypeset = false;
            });
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    MathJax.Hub.Queue(function(){
            callback();
    });
    if (window.mermaid) {
      mermaid.init();
    }
}
