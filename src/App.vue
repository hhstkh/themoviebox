
<template>
  <div class="container">
    <MovieHeader></MovieHeader>
    <MovieBannerCarousel></MovieBannerCarousel>
    <MovieList></MovieList>
    <MovieFooter></MovieFooter>
  </div>
</template>

<script>
import MovieHeader from '@/components/MovieHeader';
import MovieBannerCarousel from '@/components/MovieBannerCarousel';
import MovieList from '@/components/MovieList';
import MovieFooter from '@/components/MovieFooter';
export default {
    name: 'App',
    components: {
      MovieHeader,
      MovieBannerCarousel,
      MovieList,
      MovieFooter
    }
};
</script>





