<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>注册</title>
    <style>
        .input-area{width: 480px; height: 52px;padding:20px 0;}
        input{height:52px;width:440px; border-radius:10px;padding:0 20px;font-size:32px; line-height: 52px;}
        .btn{width:480px;}
        .box{height:15px;width:15px;}
        .getcode{width:200px;height:56px;float:right;}
    </style>
</head>
<body>
<div class="body" style="width:100%; height:100%;">
    <div style="width: 480px; height:630px;margin:100px 35%;" >
        <!-- 头部 -->
        <div class="top" style="width: 480px; height:170px;">
            <div class="welcome" style="height:58px;font-size:42px;">欢迎注册QQ</div>
            <div class="header" style="height:34px;font-size:32px;padding-bottom: 78px;">每一天，乐在沟通。</div>
        </div>
        <!-- 主体 -->
        <div class="content" style="width: 590px; height: 350px;">
            <form method="post">
                <div class="input-area">
                    <div class="input-outer">
                        <input type="text" id="phonenum" name="phonenum" placeholder="手机号">
                    </div>
                </div>

                <div class="input-area">
                    <input type="text" id="password" name="password" placeholder="密码">
                </div>

                <div class="input-area">
                    <input type="text" id="code" name="code" placeholder="验证码" style="width: 200px;">
                    <input type="button" value="获取验证码" class="getcode">
                </div>


                <div class="input-area">
                    <input type="submit" value="立即注册" class="btn">
                </div>
                <div class="agreement" style="padding-left:10px;">
                    <div style="height:15px; line-height: 15px;">
                        <input type="checkbox" name="agree" class="box">我已阅读并同意相关服务条款和隐私政策
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="https://sta.gtimg.com/c/=/qd6/js/jquery-1.9.1.min.js"></script>
<script !src="">
    //获取验证码
    $(document).on("click",".getcode",function(){
        var phonenum = $("#phonenum").val();
        var str = /^[1][356789]\d{9}$/;
        if(phonenum ==''){
            $("#phonenum").val("手机号不能为空");
            return false;
        }else if(!str.test(phonenum)){
            $("#phonenum").val("请填写正确的手机号");
            return false;
        }
        $.ajax({
            url:"/getcode",
            dataType:"json",
            data:{phonenum:phonenum},
            type:"post",
            success:function (res) {
                $("#code").val(res);
            }
        })
    })
    //验证手机唯一性
    $(document).on("blur","#phonenum",function(){
        var phonenum = $("#phonenum").val();
        if(phonenum ==''){
            $("#phonenum").val("手机号不能为空");
            return false;
        }
        $.ajax({
            url:"/phonenum",
            dataType:"json",
            data:{phonenum:phonenum},
            type:"post",
            success:function (res) {
                if(res==0){
                    $("#phonenum").val("手机号已存在");
                }
            }
        })
    });
</script>
</body>
</html>
