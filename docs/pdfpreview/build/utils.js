
const getIntoPxFn = ()=> {
  const temp = document.createElement('div')
  temp.style.position = 'absolute'
  temp.style.left = '0px'
  temp.style.top = '0px'
  temp.style.width = '1in'
  document.body.append(temp)
  const result = temp.clientWidth
  temp.remove()
  //console.log('in to px:::', result)
  return result
}

// 必须在 host 状态下运行，也就是有 document 这个对像
const generateCoverFn = async (url)=> {
  const pdfDocTask = pdfjsLib.getDocument(url)
  const pdfDoc = await pdfDocTask.promise
  const page = await pdfDoc.getPage(1)
  const intoPx = getIntoPxFn() || 96
  const viewport = page.getViewport({ scale: intoPx/72 }) // TODO 暂时写死
  if (viewport.height > 2048) {
    viewport.height = 2048
  }
  if (viewport.width > 2048) {
    viewport.width = 2048
  }
  const canvas = new OffscreenCanvas(viewport.width, viewport.height)
  // https://stackoverflow.com/questions/74020182/canvas2d-multiple-readback-operations-using-getimagedata-are-faster-with-the-wi
  // 但好像没有效果，依然有警告信息
  const context = canvas.getContext('2d',  { willReadFrequently: true })
  const renderContext = {
    canvasContext: context,
    viewport
  }
  await page.render(renderContext).promise
  const pngBlob = await canvas.convertToBlob({type:'image/png'})
  await pdfDocTask.destroy()
  return pngBlob
}

window.generateCoverFn = generateCoverFn
