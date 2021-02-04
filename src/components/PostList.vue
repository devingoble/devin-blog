<template>
  <div
    class="flex flex-col p-4 mb-4 bg-white border-solid border border-gray-300 rounded divide-y-2 divide-solid divide-gray-300"
  >
    <div class="flex flex-row">
      <g-image :src="post.image" class="preview-hero-image" />
      <div class="ml-3">
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
      <TagChip
        v-for="tag in post.tags"
        :key="tag.id"
        v-bind:tag-path="tag.path"
        v-bind:tag-label="tag.title"
      />
    </div>
  </div>
</template>

<script>
import TagChip from "~/components/TagChip.vue";

export default {
  props: ["post"],
  components: {
    TagChip,
  },
};
</script>

<style>
.read {
  padding: 7px;
  color: #333;
  text-decoration: none;
  border: 2px dashed #fecd43;
}

.preview-hero-image {
  max-height: 150px;
}
</style>
