$(function () {
    $('a[href^="#"]').click(function () {
        // a href内の#を含むものがclickされた時に作動する
        var time = 500;
        // time = 500(ms)
        var href = $(this).attr("href");
        // hrefという変数にリンク先のURLの値を代入
        var target = $(href == "#" ? 'html' : href);
        // リンク先が#を含んでいる場合、htmlをtargetに代入。そうでない場合はリンク先をそのままtargerに代入
        var distance = target.offset().top;
        // ページからの指定したidまでの距離をdistanceに代入
        $("html, body").animate({
            scrollTop: distance
        }, time, "swing");
        // html, bodyのスクロールの値(scrollTop)をdistanceの距離だけtimeの時間をかけてswingで移動させる
        return false;
        // 通常の動きをキャンセルさせる = 上で指定した動きを適用させるため
    });
});
