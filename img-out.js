$(function() {
    $("#btnSave").click(function() {
        html2canvas($("#mapboxgl-canvas-container"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);

                canvas.toBlob(function(blob) {
					saveAs(blob, "neighborhood.png");
				});
            },
            timeout: 5000
        });
    });
});
