//トップページへ戻るボタンをスクロールして表示
jQuery(window).on('scroll', function() {
    if (200 < jQuery(this).scrollTop()) {
        jQuery('.to-top').addClass('is-show');
    } else {
        jQuery('.to-top').removeClass('is-show');
    }
});

//スクロールしてリンクまで移動
jQuery('a[href^="#"]').on('click', function() {
    var id = jQuery(this).attr('href');
    var position = 0;
    if (id != '#') {
        position = jQuery(id).offset().top;
    };

    jQuery('html, body').animate ({
        scrollTop: position
    }, 300);

});

//ドロワーをクリックして表示・非表示
jQuery('.drawer-menu').on('click', function() {
    jQuery('.drawer').toggleClass('is-show');
    jQuery(this).toggleClass('is-active');
});
