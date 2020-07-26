<template>
  <div class="movie-list-container">
    <div class="row justify-content-between moive-list-menu">
      <div class="movie-category">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link" :class="isClickPopular ? 'active': ''" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" v-on:click="getMovies('https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad', 'popular')">Popular</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  :class="isClickTopRated ? 'active': ''" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" v-on:click="getMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=a7b3c9975791294647265c71224a88ad', 'top rated')">Top Rated</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  :class="isClickUpcoming ? 'active': ''" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" v-on:click="getMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=a7b3c9975791294647265c71224a88ad', 'upcoming')">Upcoming</a>
            </li>
            <li class="nav-item">
              <select class="nav-link" v-model="selectedGenre" @change="changeGenre">
                <option value="-1">Genre</option>
                <option :value="item.id" v-for="(item, index) in listGenre" :key="index" >{{item.name}}</option>
              </select>
            </li>
          </ul>
      </div>
      <div class="moive-list-sortby">
          <a @click="viewMovie(true)"><img src="@/assets/images/collection-icon.png"/></a>
          <a @click="viewMovie(false)"><img src="@/assets/images/list-icon.png"/></a>
      </div>
    </div>
    <div v-show="viewAsCard" class="row movie-list-content">
        
        <div class="col-xl-3 col-12" v-for="(item, index) in list" :key="index">
          <div class="movie-banner">
            <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"/>
          </div>
          <h5>{{item.original_title}}</h5>
          <p>{{getMovieGenre(item)}}</p>
        </div>
    </div>
    <div v-show="!viewAsCard" class="row mt-3 movie-list-content-list">
        <div class="col-12" v-for="(item, index) in list" :key="index">
          <div class="row pb-3">
            <div class="col-xl-6 movie-banner">
              <img :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"/>
            </div>
            <div class="col-xl-6 movie-intro">
              <h5>{{item.original_title}}</h5>
              <p>{{getMovieGenre(item)}}</p>
              <p>{{item.overview}}</p>
            </div>
          </div>
        </div>
    </div>
    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
      <div slot="spinner">
        <p><img class="movie-loading-icon" style="width:100px" src="@/assets/images/loading-icon.png"/></p>
        <p>LOADING</p>
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';
export default {
    components: {
      InfiniteLoading,
    },
    data() {
      return {
        page: 1,
        list: [],
        infiniteId: +new Date(),
        api: 'https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad',
        viewAsCard: true,
        selectedGenre: -1,
        listGenre:[],
        isClickPopular: true,
        isClickTopRated: false,
        isClickUpcoming: false
      };
    },
  created: function () {
    let vm = this;
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=a7b3c9975791294647265c71224a88ad')
    .then(({ data }) => {
        if (data.genres.length) {
          vm.listGenre = data.genres;
        }
      });
  },
  methods: {
    infiniteHandler($state) {
      let vm = this;
      axios.get(this.api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.results.length) {
          let movies = data.results;
          if (vm.selectedGenre != -1) {
              let m = movies.filter(m => m.genre_ids.indexOf(vm.selectedGenre) !== -1)
              if (m.length) {
                vm.page += 1;
                vm.list.push(...m);
                $state.loaded();
              }
          } else {
            vm.page += 1;
            vm.list.push(...movies);
            $state.loaded();
          }
          
        } else {
          $state.complete();
        }
      });
    },

    getMovies(api, type) {
      this.api = api;
      this.page = 1;
      this.list = [];
      this.infiniteId += 1;
      this.isClickPopular = false;
      this.isClickTopRated = false
      this.isClickUpcoming = false;
      if (type === 'popular') {
        this.isClickPopular = true;
      } else if (type === 'top rated') {
        this.isClickTopRated = true;
      } else {
        this.isClickUpcoming = true;
      }
    },
    viewMovie(viewAsCard) {
      this.viewAsCard = viewAsCard;
      this.page = 1;
      this.list = [];
      this.infiniteId += 1;
    },
    changeGenre() {
      this.page = 1;
      this.list = [];
      this.infiniteId += 1;
    },
    getMovieGenre(movie) {
      let vm = this;
      let genres = vm.listGenre;
      let movieGenre = "";
      for (let i = 0; i< movie.genre_ids.length; i++) {
        for (let j = 0; j < genres.length; j++) {
          if (movie.genre_ids[i] == genres[j].id) {
              movieGenre = movieGenre +  genres[j].name + ' ';
              break;
          }
        }
      }
      return movieGenre;
    }

  },
}
</script>
