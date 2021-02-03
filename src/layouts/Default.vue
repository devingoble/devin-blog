<template>
  <div class="overflow-x-hidden md:overflow-auto">
    <transition name="slide-fade" appear>
      <nav class="flex flex-row justify-start fixed top-0 w-screen items-center bg-white border-b border border-gray-300">
        <g-link to="/" class="block p-2 md:p-6">
          <object type="image/svg+xml" data="~/assets/logo.svg" class="logo"></object>
        </g-link>
        <g-link class="block p-2 md:p-6" exact to="/">Home</g-link>
        <g-link class="block p-2 md:p-6" to="/about">About</g-link>
      </nav>
    </transition>
      <div class="flex justify-center flex-col md:flex-row flex-shrink flex-wrap overflow-hidden md:p-4 md:m-2 mt-16 md:mt-20">
        <div class = "flex-grow md:sidebar border-solid border mx-2 mt-2 md:m-4 bg-white border-gray-300 rounded">
          <SideBar />
        </div>
        <div class="content m-2 md:m-4">
          <slot />
        </div>
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
import { throttle } from "lodash";
import SideBar from "~/components/SideBar.vue";

export default {
  components: {
    SideBar
  }
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

:root {
  --link-color: #474747;
  --hover-color: #eeeeee;
  --background-color: #f4f4f4;
  --border-color: #d7d7d7;
}

body {
  font-family: "Open Sans", Arial, sans-serif;
  padding: 0;
  line-height: 1.5;
  min-height: 100vh;
  background: var(--background-color);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.logo {
  height: 100%;
  pointer-events: none;
}

.wrapper {
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}

.left-column {
  grid-column: 1;
}

.content {
    flex: 1 1;
    max-width: 800px;
    min-width: 300px;
    min-height: 300px;
}

@responsive {
  .sidebar {
      max-width: 250px;
      max-height: 300px;
      min-width: 200px;
      min-height: 200px;
  }
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
