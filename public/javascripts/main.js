
// Replace SVG images with PNG version when svg is not supported
// http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/
if (!Modernizr.svg) {
  $('img[src$=".svg"]').each(function() {
    $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
  });
}

// Google Analytics code


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-42354928-1']);
_gaq.push(['_setDomainName', 'hitobito.ch']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

