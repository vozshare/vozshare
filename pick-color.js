var ev=0;
var cnvHeight;
var cnvWidth;
var mousePos;
var c;
var ctx;
var cPix;
var ctxPix;
var img;
var imgHeight;
var imgWidth;

oFReader = new FileReader(), rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

oFReader.onload = function (oFREvent) {
  document.getElementById("slika").src = oFREvent.target.result;
};

function loadImageFile() {
  if (document.getElementById("uploadImage").files.length === 0) { return; }
  var oFile = document.getElementById("uploadImage").files[0];
  if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
  oFReader.readAsDataURL(oFile);

}

var onclickListener = function(evt) {
 imageData = ctxPix.getImageData(0,0,150,150);
 var barva='#'+d2h(imageData.data[45300+0])+d2h(imageData.data[45300+1])+d2h(imageData.data[45300+2]);
 document.getElementById("pixcolor").value = barva;
 document.getElementById("pixcolor").select();
 document.getElementById("barvadiv").style.backgroundColor=barva;
 istat=!istat;
};

function Function()
{
 istat=true;
 cnvWidth=470;
 cnvHeight=300;

 c=document.getElementById("myCanvas");
 ctx=c.getContext("2d");

 cPix=document.getElementById("pixCanvas");
 ctxPix=cPix.getContext("2d");

 ctxPix.mozImageSmoothingEnabled = false;
 ctxPix.webkitImageSmoothingEnabled = false;

 img=document.getElementById("slika");
 imgHeight = img.height;
 imgWidth = img.width;

 if (imgHeight<cnvHeight && imgWidth<cnvWidth){
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
 }

 if ((imgWidth/imgHeight)<1.56667){
  cnvWidth=imgWidth/imgHeight*cnvHeight;
 }else{
  cnvHeight=cnvWidth/(imgWidth/imgHeight);
 }
 ctx.clearRect(0, 0, c.width, c.height);
 ctx.drawImage(img,0,0,cnvWidth,cnvHeight);

 var onmoveListener = function(evt) {
  ev=1;
  if (istat){
   mousePos = getMousePos(c, evt);
   drawPix(cPix, ctxPix, img, Math.round(mousePos.x*(imgWidth/cnvWidth)), Math.round(mousePos.y*(imgHeight/cnvHeight)));
  }
 };
 c.addEventListener('mousemove', onmoveListener, false);
 c.addEventListener('mousedown', onclickListener, false);

 var onMiniclickListener = function(evt) {
  mousePos = getMousePos(cPix, evt);
  imageData = ctxPix.getImageData(0,0,150,150);
  var loc= Math.round(mousePos.y)*600+Math.round(mousePos.x)*4;
  var barva='#'+d2h(imageData.data[loc+0])+d2h(imageData.data[loc+1])+d2h(imageData.data[loc+2]);
  document.getElementById("pixcolor").value = barva;
  document.getElementById("pixcolor").select();
  document.getElementById("barvadiv").style.backgroundColor=barva;
 };
 cPix.addEventListener('mousedown', onMiniclickListener, false);

}
function drawPix(cPix, ctxPix, img, x, y) {
 ctxPix.clearRect(0, 0, cPix.width, cPix.height);
 if (x<5) x=5;
 if (y<5) y=5;
 if (x>imgWidth-4) x=imgWidth-4;
 if (y>imgHeight-4) y=imgHeight-4;
 ctxPix.drawImage(img,x-5,y-5,9,9,0,0,cPix.width,cPix.height);
}
function getMousePos(canvas, evt) {
 var rect = canvas.getBoundingClientRect();
 return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
}
function d2h(d){
 return ("0"+d.toString(16)).slice(-2).toUpperCase();
}
function greenbox(c, x, y){
 c.beginPath();
    c.rect(x-5, y-5, 9, 9);
    c.lineWidth = 1;
    c.strokeStyle = '#00FF00';
    c.stroke();
}
