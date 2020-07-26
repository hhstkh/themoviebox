<template>
  <div class="banner-carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >


      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/images/Bitmap2.png"
            alt="image slot"
          >
        </template>
        <div class="carousel-content-left">
          <h4>WRATH OF THE TITANS</h4>
          <div>
            <span>Fantasy</span>
            <span>Animation</span>
            <span>Family</span>
            <span>|</span>
            <span>Duration: 1h52m</span>
          </div>
          <div>
            <button class="btn">WATCH MOVIE</button>
            <button class="btn">VIEW INFO</button>
            <button class="btn">+ ADD TO WISHLS</button>
          </div>
        </div>
        <div class="carousel-content-right">
          <div>
            <span>Rating </span>
            <span>based on 3456 viewers</span>
          </div>
          <div class="rating-star">
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/start-half.png"/>
            <img src="@/assets/images/star-less.png"/>
          </div>
        </div>
      </b-carousel-slide>

     

       <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/images/Bitmap2.png"
            alt="image slot"
          >
        </template>
        <div class="carousel-content-left">
          <h4>WRATH OF THE TITANS</h4>
          <div>
            <span>Fantasy</span>
            <span>Animation</span>
            <span>Family</span>
            <span>|</span>
            <span>Duration: 1h52m</span>
          </div>
          <div>
            <button class="btn">WATCH MOVIE</button>
            <button class="btn">VIEW INFO</button>
            <button class="btn">+ ADD TO WISHLS</button>
          </div>
        </div>
        <div class="carousel-content-right">
          <div>
            <span>Rating </span>
            <span>based on 3456 viewers</span>
          </div>
          <div class="rating-star">
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/start-half.png"/>
            <img src="@/assets/images/star-less.png"/>
          </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/images/Bitmap2.png"
            alt="image slot"
          >
        </template>
        <div class="carousel-content-left">
          <h4>WRATH OF THE TITANS</h4>
          <div>
            <span>Fantasy</span>
            <span>Animation</span>
            <span>Family</span>
            <span>|</span>
            <span>Duration: 1h52m</span>
          </div>
          <div>
            <button class="btn">WATCH MOVIE</button>
            <button class="btn">VIEW INFO</button>
            <button class="btn">+ ADD TO WISHLS</button>
          </div>
        </div>
        <div class="carousel-content-right">
          <div>
            <span>Rating </span>
            <span>based on 3456 viewers</span>
          </div>
          <div class="rating-star">
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/star.png"/>
            <img src="@/assets/images/start-half.png"/>
            <img src="@/assets/images/star-less.png"/>
          </div>
        </div>
      </b-carousel-slide>

   
    </b-carousel>

    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>