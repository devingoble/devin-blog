<template>
  <div class="md:pt-2 pl-2 md:pl-0">
    <h1 class="text-lg font-bold">Tags</h1>
    <div class="flex flex-wrap">
    <TagChip
      v-for="tag in $static.tags.edges"
      :key="tag.node.id"
      v-bind:tag-path="tag.node.path"
      v-bind:tag-label="tag.node.title + ' - ' + tag.node.belongsTo.totalCount"
    />
    </div>
  </div>
</template>

<static-query>
query {
  tags: allTag(sort: [{ by: "belongsTo.totalCount", order: DESC}]) {
    totalCount
    edges {
      node {
        belongsTo {
          totalCount
        }
        id
        path
        title
      }
    }
  }
}
</static-query>

<script>
import TagChip from "~/components/TagChip.vue";

export default {
  components: {
    TagChip,
  },
};
</script>