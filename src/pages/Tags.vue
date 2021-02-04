<template>
  <Layout>
    <div class="flex flex-col p-4 mb-4 bg-white border-solid border border-gray-300 rounded shadow-md">
      <TagList />
    </div>
  </Layout>
</template>

<script>
import TagList from "~/components/TagList.vue";

export default {
  components: {
    TagList,
  },
};
</script>