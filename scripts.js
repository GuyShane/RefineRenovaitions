$(document).ready(function() {
    $("img.img-thumb").click(function() {
	openLargeImage($(this).attr("src"));
    });
    $("#bg").click(function() {
	closeLargeImage();
    }).children().click(function() {
	return false;
    });
    $("#img-exit").click(function() {
	closeLargeImage();
    });
});

function placeImages() {
    var panel=document.getElementById("panel");
    var img=document.getElementById("image-large");
    var img_x=document.getElementById("img-exit");
    var img_left=document.getElementById("img-left");
    var img_right=document.getElementById("img-right");

    var margin_top=parseInt(getComputedStyle(panel,null).marginTop);
    var margin_right=parseInt(getComputedStyle(img,null).marginRight);
    var margin_left=parseInt(getComputedStyle(img,null).marginLeft);      
    var img_height=parseInt(getComputedStyle(img,null).height);

    var x_top=margin_top+10+"px";
    var x_right=margin_right+25+"px";

    var arrow_top=margin_top+img_height/2-20+"px";
    var left_left=margin_left+25+"px";
    var right_right=margin_right+25+"px";

    img_x.style.top=x_top;
    img_x.style.right=x_right;

    img_left.style.top=arrow_top;
    img_left.style.left=left_left;

    img_right.style.top=arrow_top;
    img_right.style.right=right_right;
}

function openLargeImage(src) {
    var img_large=document.getElementById("image-large");
    var img_large_src=src.replace("_thumb","");
    var img_display=document.getElementById("bg");
    img_large.src=img_large_src;
    img_display.style.visibility="visible";
}

function closeLargeImage() {
    var img_display=document.getElementById("bg");
    img_display.style.visibility="hidden";
}
