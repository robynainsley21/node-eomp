<template>
  <div>
    <NavComp/>
    <router-view/>
    <FooterComp/>
  </div>
</template>
<script>
import NavComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    NavComp,
    FooterComp
  },
};
</script>
<style>
@font-face {
  font-family: '911porschav3';
  src: url('@/assets/fonts/911porschav3.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

img{
  background-color: transparent;
}

.prodImg{
  height: 100px;
}

* {
  font-family: '911porschav3', sans-serif;
  line-height: 1.5;
  font-size: 16px;   /* Adjusts the font size */
  letter-spacing: 0.05em; /* Adjusts the spacing between letters */
}

html{
  background-color: #2E2E30;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #2E2E30;
  margin-top: 65px;
}

.with-blur-backdrop {
  background-color: rgba(0, 0, 0, 0);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  height: inherit;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
