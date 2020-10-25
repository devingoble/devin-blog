<template>
  <div class="px-2">
    <p class="date" v-html="post.date"/>
    <h1 class="title" v-html="post.title"/>
    <p class="description" v-html="post.description"/>
    <b>{{post.timeToRead}} min read</b> &nbsp;
    <g-link :to="post.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
.date {
  font-weight: 300;
}

.read {
  padding: 7px;
  color: #333;
  text-decoration: none;
  border: 2px dashed #fecd43;
}
</style>
