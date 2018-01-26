<template>
    <div>
    	<my-header></my-header>
        <div class="index my-container">
            <div class="row">
                <div class="col-8 main">
                    <b-carousel id="carousel1" controls indicators :interval="2500" v-model="slide">
                        <b-carousel-slide>
                            <img slot="img" width="100%" src="../assets/img/swiper-1.jpg" alt="image slot">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" width="100%" src="../assets/img/swiper-2.jpg" alt="image slot">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" width="100%" src="../assets/img/swiper-3.jpg" alt="image slot">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" width="100%" src="../assets/img/swiper-4.jpg" alt="image slot">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" width="100%" src="../assets/img/swiper-5.jpg" alt="image slot">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" width="100%" src="../assets/img/swiper-6.jpg" alt="image slot">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" width="100%" src="../assets/img/swiper-7.jpg" alt="image slot">
                        </b-carousel-slide>
                    </b-carousel>
                </div>
                <div class="col-4 aside">
                    <div class="board">
                        <img src="../assets/img/biaoqian-1.png" alt="">
                        <img src="../assets/img/biaoqian-2.png" alt="">
                        <img src="../assets/img/biaoqian-3.png" alt="">
                        <img src="../assets/img/biaoqian-4.png" alt="">
                        <img src="../assets/img/biaoqian-5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import myHeader from '~/components/myHeader'
    export default {
		components:{
			myHeader
		}
    }
</script>

<style scoped>

</style>
