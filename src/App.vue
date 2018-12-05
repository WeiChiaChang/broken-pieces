<template>
  <!--  -->
  <!-- This pen based on css-doodle -->
  <!-- https://css-doodle.com/ -->
  <!-- -->
  <div class="wrapper">
    <css-doodle @click="generate">
      :doodle {
        @grid: 12 / 100vmax;
        border-raidus: 50%;
        overflow: hidden;
        background: linear-gradient(
          @rand(360deg),
          @pick(#61dafb, #5EB982, #ebbf4d) 25%,
          @last-pick() 25%,
          @pick(#5EB982, #61dafb, #12152f) 50%,
          @last-pick() 50%,
          @pick(#5EB982, #12152f, #42b883) 75%,
          @last-pick() 75%,
          @pick(#12152f, #5EB982, #ebbf4d) 75%,
          @last-pick() 100%
        );
        opacity: .8;
      }
      :container {
        transform: 
          rotate(30deg) scale(1.2)
          translate(0%, 0%);
      }
      border-radius: 50%;
      background: linear-gradient(
        @rand(360deg),
        @pick(#60569e, #2ab6fb, #ebbf4d) 0,
        @last-pick() 33.33%,
        @pick(#60569e, #e6437d, #ebbf4d) 33.33%,
        @last-pick() 66.66%,
        @pick(#60569e, #2ab6fb, #ebbf4d) 66.66%,
        @last-pick() 100%
      );
      margin: .5px;
      transition: @r(.4s) ease;
      clip-path: polygon(@rand(100%) 0, 100% @rand(100%), 0 @rand(100%));
      :after {
        font-family: devicons;
        border-radius: 50%;
        content: '\@hex(@rand(58890, 59050))';
        font-size: 8vmax;
        padding: .8em;
        color: hsla(
          @rand(360), 70%, 70%,
          @rand(.9)
        );
      }
    </css-doodle>
  </div>
</template>

<script>
export default {
  name: 'wrapper',
  methods: {
    generate: function (event) {
      // `this` inside methods points to the Vue instance
      const doodle = document.querySelector('css-doodle');
      /* just refresh */
      doodle.update();
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  width: 100%;
}
</style>
