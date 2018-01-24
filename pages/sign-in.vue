<template>
	<div class="sign">
		<div class="logo">
			<nuxt-link to="/">
				<img src="../assets/img/logo.png" alt="">
			</nuxt-link>
		</div>
		<!--登陆表单-->
		<div class="main">
			<!--title-->
			<div class="title">
				<h4>
                    <nuxt-link class="active" to="/sign-in">
                        登陆
                    </nuxt-link>
                    <b>·</b>
                    <nuxt-link to="/sign-up">
                        注册
                    </nuxt-link>
                </h4>
			</div>
			<!--js-form-->
			<div class="js-form">
				<form action="">
					<div class="input-prepend">
						<input type="text" name="" value="" placeholder="手机号或邮箱"  style="border-radius: 4px 4px 0 0;"/>
						<i class="fa fa-user"></i>
					</div>
					<div class="input-prepend">
						<input type="text" name="" value="" placeholder="密码"  style="border-radius: 0 0 4px 4px;border-top: none;"/>
						<i class="fa fa-lock"></i>
					</div>
					<div class="remember">
						<input type="checkbox" />
						<span>记住我</span>
					</div>
					<div class="help">
						<nuxt-link to="/help">
							登陆遇到问题
						</nuxt-link>
					</div>
					<input type="button" class="btn btn-primary" value="登陆"/>
				</form>
				<!--more sign-->
				<div class="more-sign">
					<span style="margin-right: 10px;">――――</span>
					<span>社交账号登陆</span>
					<span style="margin-left: 10px;">――――</span>
					<ul>
						<li>
							<a href="">
								<i class="fa fa-weibo white"></i>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa fa-weixin white"></i>
							</a>
						</li>
						<li>
							<a href="">
								<i class="fa fa-qq white"></i>
							</a>
						</li>
						<li>
							<a style="color: rgba(0,0,0,.65)!important;font-size: 12px;" href="">
								其他
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
		layout: 'sign', //指明当前页面所使用的默认模板是layouts文件夹下的sign.vue
		head() {
			return {
				title: "登录-简书",
				meta: [{
					name: "description",
					content: "登录页面"
				}]
			}
		}
	}
</script>

<style scoped>

</style>