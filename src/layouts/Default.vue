<template>
  <div>
    <transition name="slide-fade" appear>
      <nav class="flex flex-row justify-start sticky top-0 w-screen items-center bg-white shadow-md">
        <g-link to="/" class="block p-6">
          <object type="image/svg+xml" data="logo.svg" class="logo"></object>
        </g-link>
        <g-link class="block p-6" exact to="/">Home</g-link>
        <g-link class="block p-6" to="/about">About</g-link>
      </nav>
    </transition>
    <div class="flex flex-wrap p-4 xl:p-24 lg:p-24 md:-p-12 sm:p-6">
      <SideBar />
      <slot/>
    </div>
    <div class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
      </p>
    </div>
  </div>
</template>

<script>
  import {throttle} from 'lodash';
  import SideBar from '~/components/SideBar.vue';

  export default {
    components: {
      SideBar
    }
  }
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

:root {
  --link-color:  #474747;
  --hover-color: #eeeeee;
}

body {
  font-family: "Open Sans", Arial, sans-serif;
  padding: 0;
  line-height: 1.5;
  min-height: 100vh;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.logo {
  height: 100%;
  pointer-events: none;
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}

.link {
  color: var(--link-color);
  text-decoration: none;
}
</style>
