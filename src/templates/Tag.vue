<template>
  <Layout>
    <div
      class="flex flex-col p-4 mb-4 bg-white border-solid border border-gray-300 rounded shadow-md"
    >
      <h1 class="text-2xl font-bold">Posts tagged "{{ $page.tag.title }}"</h1>
    </div>
    <PostList
      v-for="post in $page.tag.belongsTo.edges"
      :key="post.node.id"
      :post="post.node"
      class="flex-grow-0 bg-white shadow-md"
    />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 30) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            summary
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostList from "@/components/PostList";

export default {
  components: {
    PostList,
  },
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`,
    };
  },
};
</script>