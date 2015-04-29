(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    // Responsive Slider
    // http://responsiveslides.com/
    $(function() {
      $('.rslides').responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 500,
        namespace: 'rslides',
      });
    });

    // Replace SVG images with PNG version when svg is not supported
    // http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/
    if (!Modernizr.svg) {
      $('img[src$=".svg"]').each(function() {
        $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
      });
    }

    // Piwik by Puzzle
    var _paq = _paq || [];
    _paq.push(['setDoNotTrack', true]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u= 'https://piwik.puzzle.ch/';
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['setSiteId', 1]);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();


    // Google Analytics code
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-42354928-1']);
    _gaq.push(['_setDomainName', 'hitobito.ch']);
    _gaq.push(['_trackPageview']);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  });

})(jQuery, window, document);
