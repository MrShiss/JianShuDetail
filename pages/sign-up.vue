<template>
    <div class="sign">
        <div class="logo">
            <nuxt-link to="/">
                <img src="../assets/img/logo.png" alt="">
            </nuxt-link>
        </div>
        <!--登陆表单-->
        <div class="main">
            <div class="title">
                <h4>
                    <nuxt-link to="/sign-in">
                        登陆
                    </nuxt-link>
                    <b>·</b>
                    <nuxt-link class="active" to="/sign-up">
                        注册
                    </nuxt-link>
                </h4>
            </div>
            <!--js-form-->
			<div class="js-form">
				<form action="">
					<div class="input-prepend">
						<input type="text" name="" value="" placeholder="你的昵称"  style="border-radius: 4px 4px 0 0;"/>
						<i class="fa fa-user"></i>
					</div>
					<div class="input-prepend">
						<input type="text" name="" value="" placeholder="手机号"  style="border-top: none;"/>
						<i class="fa fa-mobile"></i>
					</div>
					<div class="input-prepend" style="position: relative;">
                        <input type="text" name="" value="" placeholder="手机验证码" style="border-top: none;">
                        <i class="fa fa-shield"></i>
                        <a href="" class="btn btn-success send-ssm">发送验证码</a>
                    </div>
					<div class="input-prepend">
						<input type="text" name="" value="" placeholder="设置密码"  style="border-radius: 0 0 4px 4px;border-top: none;"/>
						<i class="fa fa-lock"></i>
					</div>
					<input type="button" class="btn btn-success" value="注册" style="margin-top: 20px;margin-bottom: 10px;"/>
					<p style="font-size: 12px;margin-bottom: 0;">点击 “注册” 即表示您同意并愿意遵守简书</p>
					<p style="font-size: 12px;margin-bottom: 0;">
						<a style="color: #3194d0!important;" href="#">用户协议</a>&nbsp;和
						<a style="color: #3194d0!important;" href="#">隐私政策 </a>。
					</p>
				</form>
				<!--more sign-->
				<div class="more-sign">
					<span style="margin-right: 10px;">――――</span>
					<span>社交账号直接注册</span>
					<span style="margin-left: 10px;">――――</span>
					<ul>
						<li>
							<a href="" style="background-color: #00bb29;border-radius: 50%;">
								<i class="fa fa-weixin white"></i>
							</a>
						</li>
						<li>
							<a href="" style="background-color: #498ad5;border-radius: 50%;">
								<i class="fa fa-qq white"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
    export default {
        layout:'sign',//指明当前页面所使用的默认模板是layouts文件夹下的sign.vue
        head(){
            return {
                title:"注册-简书",
                meta:[
                    {name:"description",content:"注册页面"}
                ]
            }
        }
    }
</script>

<style scoped>
	.sign{
    /*定位属性放在最上面*/
    /*先写盒子模型的*/
    height: 100%;
    /*min-height: 750px;*/
    /*然后写文本*/
    font-size: 14px;
    /*background-color: #f1f1f1!important;*/
    text-align: center;
    /*最后写用户信息内容*/
}
.logo{
    position: absolute;
    top: 50px;
    left: 50px;
}
.logo img{
    height: 80px;
}
.main{
    width: 400px;
    margin: 50px auto 0;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    display: inline-block;
    background-color: #fff;
    padding: 50px 50px 30px;
}
.main .title{
    margin: 0 auto 50px;
    padding: 10px;
    color: #969696;
}
.main .title h4{
    margin: 0;
    font-size: 18px;
}
.main .title h4 a,.main .title h4 b{
    text-align: center;
    padding: 10px;
}
.main .title h4 a.active{
    font-weight: bold;
    color: #ea6f5a!important;
	border-bottom: 2px solid #ea6f5a;
}
.main .title h4 a:hover{
	border-bottom: 2px solid #ea6f5a;
}
.main form{
	margin: 0 0 30px;
	overflow: hidden;
	zoom: 1;
}
.main form .input-prepend{
	position: relative;
	width: 100%;
}
.main form .input-prepend input{
	width: 100%;
	height: 50px;
	padding: 4px 12px 4px 35px;
	border: 1px solid #c8c8c8;
	outline: none;
	color: rgba(0,0,0,.85);
}
.main form .input-prepend input::-webkit-input-placeholder{
	color: rgba(0,0,0,.35);
}
.main form div i{
	position: absolute;
	left: 12px;
	top: 15px;
	font-size: 20px;
	color: rgba(0,0,0,.35);
}
.main form .remember{
	float: left;
	margin: 20px 0;
}
.main form .help{
	float: right;
	margin: 20px 0;
}
.main form>input{
	width: 100%;
	display: block;
	border-radius: 20px;
}
.main .more-sign span{
	font-size: 14px;
	color: rgba(0,0,0,.40);
}
.main .more-sign ul{
	margin-bottom: 20px;
	padding-top: 20px;
}
.main .more-sign ul li{
	display: inline-block;
	border-radius: 50%;
	margin-right: 5px;
}
.main .more-sign ul li:nth-of-type(1){
	background-color: #e05244;
}
.main .more-sign ul li:nth-of-type(2){
	background-color: #00bb29;
}
.main .more-sign ul li:nth-of-type(3){
	background-color: #498ad5;
}
.main .more-sign ul li:nth-of-type(4){
	background-color: rgba(0,0,0,.05);
}
.main .more-sign ul li a{
	display: block;
	width: 50px;
	height: 50px;
	font-size: 20px;
	line-height: 50px;
}
.main .more-sign ul li a .white{
	color: white;
}
.send-ssm{
	position: absolute;
	right: 10px;
	top: 5px;
	border-radius: 20px!important;
	color: white!important;
}
@media(max-width: 768px) {
	.logo{
		display: none;
	}
	.sign{
		background-color: #fff!important;
	}
	.main{
		box-shadow: none!important;
		margin: 0 auto!important;
	}
}
</style>