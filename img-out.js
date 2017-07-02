// $(function() {
//     $("#btnSave").click(function() {
//         html2canvas($(".mapboxgl-canvas-container mapboxgl-interactive"), {
//             onrendered: function(canvas) {
//                 theCanvas = canvas;
//                 document.body.appendChild(canvas);
//
//                 canvas.toBlob(function(blob) {
// 					saveAs(blob, "neighborhood.png");
// 				});
//             },
//         });
//     });
// });
//

$(function() {
  $("#btnSave").click(function() {
    var img = new Image();
    var mapCanvas = document.querySelector('.mapboxgl-canvas');
    img.src = mapCanvas.toDataURL();
    window.document.body.appendChild(img);
  })
});
