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

$(function () {
    // $topBtnにback-to-topボタンのjQueryオブジェクトを代入
    var $topBtn = $('.back-to-top');

    // 最初はボタンを隠しておく
    $('.back-to-top').hide();

    // ボタンの表示条件
    $(window).scroll(function () {
        // スクロール量が500以上になったら
        if ($(this).scrollTop() > 250) {
            // ボタンを表示させる
            $topBtn.fadeIn();
        } else {
            // 500未満の場合は表示させない
            $topBtn.fadeOut();
        }
    });

    // ボタンクリックでページ内要素に移動
    // 特定の移動先が無い場合はページトップへ移動
    // aタグのhref属性の値が#始まりの場合のみ実行する
    $('a[href^="#"]').click(function () {
        // スクロールの速さ
        var speed = 500;
        // ボタンのhref属性の値を取得
        var href = $(this).attr("href");
        // ボタンのhref属性が#のみまたは存在しなければhtmlを返す
        // 値があればそれを取得する
        var $target = $(href == "#" || href == "" ? 'html' : href);
        // ボタンの位置の高さを取得する
        // $('html').offset().topの値は0になる
        var position = $target.offset().top;
        // body,htmlは両方指定する
        // positionで指定したスクロール位置に移動する
        // animateで動作が完了するまでの速さ(speed)と動作パターン(swing)を指定する
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');

        // イベントのデフォルト効果を打ち消す=関数内で指定した動作しか行わない
        return false;
        // event.preventDefault();
    });
});
