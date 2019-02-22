function wp_quickhide_lang_button() {
    if (quickhide.lang == 'cy') {
        return 'Cuddio';
    }
    else {
        return 'Quick hide';
    }
}

function wp_quickhide_lang_tooltip() {
    if (quickhide.lang == 'cy') {
        return 'Cuddio\'r sgrin hon';
    }
    else {
        return 'Quickly hide this page';
    }
}

jQuery(document).ready(function($) {
    $('body').append($('<div class="wp-quickhide" title="'+wp_quickhide_lang_tooltip()+'">'+wp_quickhide_lang_button()+'</div><div class="wp-quickhide-overlay" style="background-image:url('+quickhide.assetURL+'google-search.png);"></div>'));
    $('body').on('click','.wp-quickhide', function() {
        $('.wp-quickhide-overlay').show();
    });
    $('body').on('click', '.wp-quickhide-overlay', function() {
        $('.wp-quickhide-overlay').fadeOut(500);
    });
});
