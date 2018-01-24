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
    import '~/assets/css/sign.css'
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

</style>