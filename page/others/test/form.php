<?php
var_dump($_POST);

//変数の初期化
$page_flag = 0;

if( !empty($_POST['btn_confirm'])){
    $page_flag = 1;
} elseif( !empty($_POST['btn_submit'])){
    $page_flag = 2;
}
?>

<!DOCTYPE>
<html lang="ja">

<head>
    <title>お問い合わせフォーム</title>
    <style rel="stylesheet" type="text/css">
        body {
            padding: 20px;
            text-align: center;
        }

        h1 {
            margin-bottom: 20px;
            padding: 20px 0;
            color: #209eff;
            font-size: 122%;
            border-top: 1px solid #999;
            border-bottom: 1px solid #999;
        }

        input[type=text] {
            padding: 5px 10px;
            font-size: 86%;
            border: none;
            border-radius: 3px;
            background: #ddf0ff;
        }

        input[name=btn_confirm],
        input[name=btn_submit],
        input[name=btn_back] {
            margin-top: 10px;
            padding: 5px 20px;
            font-size: 100%;
            color: #fff;
            cursor: pointer;
            border: none;
            border-radius: 3px;
            box-shadow: 0 3px 0 #2887d1;
            background: #4eaaf1;
        }

        input[name=btn_back] {
            margin-right: 20px;
            box-shadow: 0 3px 0 #777;
            background: #999;
        }

        .element_wrap {
            margin-bottom: 10px;
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
            text-align: left;
        }

        label {
            display: inline-block;
            margin-bottom: 10px;
            font-weight: bold;
            width: 150px;
        }

        .element_wrap p {
            display: inline-block;
            margin: 0;
            text-align: left;
        }

    </style>
</head>

<body>
    <h1>お問い合わせフォーム</h1>
    <?php if ($page_flag === 1): ?>
    <form method="post" action="">
        <div class="element_wrap">
            <label>氏名</label>
            <p><?php echo $_POST['your_name']; ?></p>
        </div>
        <div class="element_wrap">
            <label>メールアドレス</label>
            <p><?php echo $_POST['msg']; ?></p>
        </div>
        <input type="submit" name="btn_back" value="戻る">
        <input type="submit" name="btn_submit" value="送信">
        <input type="hidden" name="your_name" value="<?php echo $_POST['your_name']; ?>">
        <input type="hidden" name="email" value="<?php echo $_POST['email']; ?> ">
    </form>
    <?php elseif($page_flag === 2): ?>
    <p>送信が完了しました。</p>
    <?php else: ?>
    <form method="post" action="">
        <div class="element_wrap">
            <label>氏名</label>
            <input type="text" name="your_name" value="">
        </div>
        <div class="element_wrap">
            <label>メッセージ</label>
            <input type="text" name="msg" value="">
        </div>
        <input type="submit" name="btn_confirm" value="入力内容を確認する">
    </form>
    <?php endif; ?>
</body>

</html>
