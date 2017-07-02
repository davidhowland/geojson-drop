$(function() {
    $("#btnSave").click(function() {
        html2canvas($("#map"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);

                canvas.toBlob(function(blob) {
					saveAs(blob, "neighborhood.png");
				});
            },
        });
    });
});
