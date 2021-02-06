<template>
  <Layout>
    <div
      class="flex flex-col p-4 mb-4 bg-white border-solid border border-gray-300 rounded shadow-md"
    >
      <g-image :src="$page.post.image" />
      <div class="flex flex-col items-center my-4">
        <h1 class="text-4xl">{{ $page.post.title }}</h1>
        <p class="text-gray-600">
          {{ $page.post.date }} | {{ $page.post.timeToRead }} min read
        </p>
        <div class="flex flex-row my-2">
          <TagChip
            v-for="tag in $page.post.tags"
            :key="tag.id"
            v-bind:tag-path="tag.path"
            v-bind:tag-label="tag.title"
          />
        </div>
      </div>
      <div class="post-content">
        <p v-html="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    summary
    image (height: 1000)
    content
    date (format: "MMMM DD, YYYY")
    timeToRead
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import TagChip from "~/components/TagChip.vue";

export default {
  components: {
    TagChip,
  },
};
</script>

<style>
p {
  margin-bottom: 1rem;
}
</style>