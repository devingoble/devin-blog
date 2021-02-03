<template>
  <div
    class="flex flex-col p-4 mb-4 bg-white border-solid border border-gray-300 rounded divide-y-2 divide-solid divide-gray-300"
  >
    <div class="flex flex-row">
      <g-image :src="post.image" />
      <div>
        <g-link
          :to="post.path"
          class="text-xl font-bold text-blue-700 visited:text-purple-700 hover:underline"
          >{{ post.title }}</g-link
        >
        <p class="text-sm text-gray-600">
          {{ post.date }} - {{ post.timeToRead }} min read
        </p>
        <p class="description" v-html="post.summary" />
      </div>
    </div>
    <div class="mt-4 pt-4">
      <g-link
        v-for="tag in post.tags"
        :to="tag.path"
        :key="tag.id"
        class="bg-gray-200 m-1 p-2 text-blue-700 text-sm"
        >{{ tag.title }}</g-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
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
