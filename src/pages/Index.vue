<template>
  <Layout>
    <section class="flex flex-col">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" class="flex-grow-0" />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        summary
        timeToRead
        date (format: "D MMMM YYYY")
        path
        image (width: 200, quality: 90)
        tags {
          id
          path
          title
        }
      }
    }

  }
}
</page-query>

<style>
.header {
  font-family: "Stylish";
  font-size: 35px;
  text-align: center;
  line-height: 20px;
  padding: 0.7em;
}

.header p {
  font-weight: 200;
}

</style>
