<template>
  <div class="p-4 mb-4 bg-white border-solid border border-global-border rounded">
    <g-link :to="post.path" class="text-xl font-bold text-blue-700 visited:text-purple-700 hover:underline">{{post.title}}</g-link>
    <p class="text-sm text-gray-600">{{post.date}} - {{post.timeToRead}} min read</p>
    <p class="description" v-html="post.description"/>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>

.read {
  padding: 7px;
  color: #333;
  text-decoration: none;
  border: 2px dashed #fecd43;
}
</style>
