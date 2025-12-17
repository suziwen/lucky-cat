var md = new markdownit({
  html: true,
  xhtmlOut: true,
  breaks: false,
  typographer: true,
})
md.use(markdownitMark)
md.use(markdownitMathjax)
md.use(markdownitEmoji)

function markdownRenderer(
        instance, td, row, col, prop, value, cellProperties) {
    Handsontable.BaseRenderer.apply(this, arguments);
    const escaped = Handsontable.helper.stringify(value);
    const cellWrapperDiv = document.createElement("div");
    cellWrapperDiv.className = "cell-wrapper";
    cellWrapperDiv.innerHTML = md.renderInline(escaped);
    td.innerHTML = "";
    td.appendChild(cellWrapperDiv);
    return td;
}
