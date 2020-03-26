<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>注册</title>
</head>
<body>
<div style="width:400px;height:500px;border: blue solid 3px;margin:100px 40%;">
    <h2 style="margin: 0 180px;height: 40px; line-height: 40px;">注册</h2>
    <div style="width:400px;height: 480px;">
        <form action="/user/regDo" method="post">
            <div style="margin:30px 25%;" >
                <input type="text" name="phonenum" id="phonenum" placeholder="请填写手机号" style="border-radius: 5px;width:200px; height:30px;">
            </div>
            <div style="margin:30px 25%; width: 200px;" >
                <input type="text" name="code" id="code" placeholder="请输入验证码" style="border-radius: 5px;width:80px; height:30px;">
                <input type="button" class="btn" value="获取验证码" style="border-radius: 5px;height:36px;float:right;">
            </div>
            <div style="margin:30px 25%; width: 100px;" >
                <input type="text" name="password1" id="password" placeholder="确认密码" style="border-radius: 5px;width:200px;height:30px;">
            </div>
            <div style="margin:30px 45%;">
                <input type="submit" value="注册">
            </div>
        </form>
    </div>
</div>
<script src="https://sta.gtimg.com/c/=/qd6/js/jquery-1.9.1.min.js"></script>
<script !src="">
    $(document).on("click",".btn",function(){
        var phonenum = $("#phonenum").val();
        alert(phonenum);
    });
</script>
</body>

</html>
