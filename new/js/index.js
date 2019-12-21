//XML UNDER THE HOOD TEST (W3 SCHOOLS)
if (window.XMLHttpRequest) {
  // code for modern browsers
  var info = new XMLHttpRequest();
} else {
  // code for stupid old IE browsers
  var info = new ActiveXObject("Microsoft.XMLHTTP");
}
info.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("featured").innerHTML = info.requestText;
  }
};

var text = "<featured><title>XML messages</title><body>know more soon!</body></featured>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");


//BlockQuoteImages
var blocks = $("blockquote");
for (let cou = 0; cou < blocks.length;) {
  blocks[cou].innerHTML = "<i class=\"fa fa-quote-left\" style=\"font-size: 25px; margin-left: 2.5px; margin-right: 10px; float: left; font-color: #424242;\"></i>" + $("blockroot").text();
  cou ++;
  //console.log(cou);
}

jQuery(window).on('scroll', function(){
  
  var elValFromTop = Math.ceil(jQuery('.appearo').offset().top),
    windowHeight = jQuery(window).height(),
    windowScrollValFromTop = jQuery(this).scrollTop();
  
  // if the sum of the window height and scroll distance from the top is greater than the target element's distance from the top, it should be in view and the event should fire, otherwise reverse any previously applied methods
  if ((windowHeight + windowScrollValFromTop) > elValFromTop) {
    jQuery('.footer').addClass('el-is-visible');
  } else {
    jQuery('.footer').removeClass('el-is-visible');
  }
  
});