<template>
  <div>
    <h1>Tags - {{ $static.tags.totalCount }}</h1>

    <ul>
      <li v-for="tag in $static.tags.edges" :key="tag.node.id">
        <h3>
          <g-link :to="tag.node.path">{{ tag.node.title }}</g-link>
        </h3>
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
  tags: allTag {
    totalCount
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</static-query>