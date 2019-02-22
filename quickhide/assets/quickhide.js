jQuery(document).ready(function($) {
    $('body').append($('<div class="wp-quickhide" title="Quickly hide this page">Quick hide</div><div class="wp-quickhide-overlay" style="background-image:url('+quickhide.assetURL+'google-search.png);"></div>'));
    $('body').on('click','.wp-quickhide', function() {
        $('.wp-quickhide-overlay').show();
    });
    $('body').on('click', '.wp-quickhide-overlay', function() {
        $('.wp-quickhide-overlay').fadeOut(500);
    });
});
