<template>
	<div>
		<nav class="navbar navbar-default nav-fixed-top">
			<div class="width-limit">
				<!-- logo -->
				<nuxt-link class="nav-logo" to="/">
					<img src="../assets/img/nav-logo.png" alt="">
				</nuxt-link>
				<!-- 写文章 -->
				<nuxt-link class="btn write-btn" to="/create">
					<i class="fa fa-edit"></i>
					写文章
				</nuxt-link>
				<nuxt-link class="btn sign-up" to="/sign-up">
					注册
				</nuxt-link>
				<nuxt-link class="btn sign-in" to="/sign-in">
					登陆
				</nuxt-link>
				<!--如果用户登录,那么显示用户头像-->
				<div style="display: none" class="user" @mouseover="userShow=true" @mouseleave="userShow=false">
					<div class="drop-down">
						<nuxt-link class="avatar" to="/users">
							<img src="../assets/img/photo.jpg">
						</nuxt-link>
					</div>
					<div class="drop-menu" v-show="userShow">
						<ul>
							<li>
								<nuxt-link to="/">
									<i class="fa fa-home"></i>
									我的主页
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/">
									<i class="fa fa-bookmark"></i>
									收藏的文章
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/">
									<i class="fa fa-heart"></i>
									喜欢的文章
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/">
									<i class="fa fa-cog"></i>
									设置
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/">
									<i class="fa fa-sign-out"></i>
									退出
								</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
				<!--导航-->
				<div class="my-container">
					<ul class="nav-list">
						<li class="active">
							<nuxt-link  to="/">
								<i class="fa fa-compass"></i>
								<span>发现</span>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/">
								<i class="fa fa-book"></i>
								<span>关注</span>
							</nuxt-link>
						</li>
						<li class="notify" @mouseover="showNotify=true" @mouseleave="showNotify=false">
							<nuxt-link to="/">
								<i class="fa fa-bell-o"></i>
								<span>消息</span>
							</nuxt-link>
							<div class="drop-menu" v-show="showNotify">
								<ul>
									<li>
										<nuxt-link to="/">
											<i class="fa fa-comment-o"></i>
											评论
										</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/">
											<i class="fa fa-envelope-open-o"></i>
											简信
										</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/">
											<i class="fa fa-upload"></i>
											投稿请求
										</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/">
											<i class="fa fa-heart-o"></i>
											喜欢和赞
										</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/">
											<i class="fa fa-user-o"></i>
											关注
										</nuxt-link>
									</li>
								</ul>
							</div>
						</li>
						<li class="search">
							<form action="post">
								<input @focus="searchShow = true" @blur="searchShow = false" type="text" placeholder="搜索">
								<nuxt-link to="/search" class="search-btn">
									<i class="fa fa-search" :class="{active:searchShow}"></i>
								</nuxt-link>
							</form>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                userShow:false,
				showNotify:false,
				searchShow:false
            }
        },
        name:'myHeader'//给组件命名
    }

</script>
<style scope>
	nav{
		width: 100%;
		height: 56px;
	}
	.navbar{
		padding: 0;
		border-bottom: 1px solid #e7e7e7;
		margin-bottom: 20px;
		background-color: white;
	}
	.nav-fixed-top{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	nav .width-limit{
		min-width:768px;
		width:1440px;
		margin: 0 auto;
	}
	nav .nav-logo{
		float: left;
		height: 56px;
		padding: 0;
	}
	nav .nav-logo img{
		height: 100%;
	}
	nav a.write-btn{
		float: right;
		width: 100px;
		height: 40px;
		margin:7px 15px 0;
		line-height: 24px;
		font-size: 15px;
		background: #ea6f5a;
		color: #fff!important;
		border-radius: 20px;
	}
	nav a.sign-in,a.sign-up{
		float: right;
		width: 100px;
		height: 40px;
		margin: 8px 6px 0 10px;
		line-height: 24px;
		font-size: 15px;
	}
	.btn:focus{
		box-shadow: none!important;
	}
	nav a.sign-in{
		width: 50px;
		color: rgba(0,0,0,.54)!important;
	}
	nav a.sign-up{
		border: 1px solid #ea6f5a;
		border-radius: 20px;
		color: #ea6f5a!important;
	}
	nav a.sign-up:hover{
		background-color: rgba(0,0,0,.05);
	}
	nav .user {
		float:right;
		position:relative;
	}
	nav .user .avatar {
		position:relative;
		width:40px;
		height:40px;
		display:block;
		margin:8px 28px 8px 20px;
	}
	nav .user:hover {
		background:#f5f5f5;
	}
	nav .user .avatar::before {
		content: "";
		position: absolute;
		top: 18px;
		right: -14px;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 6px solid #999;
	}
	nav .user .avatar img {
		width:100%;
		height:100%;
		border-radius: 50%;
		border:1px solid #ccc;
	}
	nav .user .drop-menu {
		position:absolute;
		left:0;
		min-width:160px;
		box-shadow: 0 0 8px rgba(0,0,0,.1);
		font-size:15px;
	}
	nav .user .drop-menu ul {
		padding:10px 0;
		margin:0;
	}
	nav .user .drop-menu ul li a {
		padding:10px 20px;
		display:block;
	}
	nav .user .drop-menu ul li a:hover {
		background:#f5f5f5;
	}
	nav .user .drop-menu ul li i {
		margin-right:15px;
		color:#ea6f5a;
		font-size:18px;
	}
	nav .nav-list {
		margin:0;
		padding:0;
	}
	nav .nav-list:after {
		content:"";
		height:0;
		display:block;
		visibility: hidden;
		clear:both;
	}
	nav .nav-list>li {
		float:left;
		margin-right:5px;
	}
	nav .nav-list>li:hover {
		background:#f5f5f5;
	}
	nav .nav-list>li>a {
		display:block;
		height:55px;
		padding:15px;
		font-size:17px;
	}
	nav .nav-list>li>a>i {
		font-size:20px;
		margin-right:7px;
		text-align:center;
		margin-top:5px;
	}
	nav .nav-list>li.active {
		color:#ea6f5a;
		background:#fff;
	}
	nav .nav-list .search{
		/*padding-left: 15px;*/
	}
	nav .nav-list .search:hover{
		background-color: #fff;
	}
	nav .nav-list .search form{
		margin-top: 9px;
		position: relative;
	}
	nav .nav-list .search form input{
		width: 240px;
		height: 38px;
		border: none;
		background-color: #eee;
		border-radius: 20px;
		padding: 0 30px 0 20px;
		font-size: 15px;
		transition: width 0.4s linear;
	}
	nav .nav-list .search form input:focus{
		width: 320px;
	}
	nav .nav-list .search form a i{
		position: absolute;
		right: 6px;
		top: 6px;
		border-radius: 50%;
		padding: 5px;
	}
	nav .nav-list .search form a i.active{
		background-color: #7f828b;
		color: white!important;
	}
	@media (max-width: 768px) {
		nav .nav-list{
			display: none;
		}
	}
	@media (max-width:1440px) {
		nav .nav-list>li>a i {
			display:none;
		}
		nav .nav-list .search form input{
			width: 160px;
		}
		nav .nav-list .search form input:focus{
			width: 240px;
		}
	}
	@media (max-width:1080px) {
		nav .nav-list>li>a i {
			display:block;
		}
		nav .nav-list>li>a span {
			display:none;
		}
		nav .nav-list .search form input{
			width: 150px;
		}
		nav .nav-list .search form input:focus{
			width: 150px;
		}
	}
	nav .nav-list .notify {
		position:relative;
	}
	nav .nav-list .notify .drop-menu {
		position:absolute;
		z-index:999;
		left:0;
		min-width:160px;
		box-shadow: 0 0 8px rgba(0,0,0,.1);
		font-size:15px;
	}
	nav .notify .drop-menu ul {
		padding:10px 0;
		margin:0;
	}
	nav .notify .drop-menu ul li a {
		padding:10px 20px;
		display:block;
	}
	nav .notify .drop-menu ul li a:hover {
		background:#f5f5f5;
	}
	nav .notify .drop-menu ul li i {
		margin-right:15px;
		color:#ea6f5a;
		font-size:18px;
	}
</style>
