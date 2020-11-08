<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>

      <div>
        Tags:
        <g-link
            v-for="tag in $page.post.tags"
            :to="tag.path"
            :key="tag.id">
          #{{ tag.title }}
        </g-link>
      </div>

      <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    summary
    content
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      title
      path
    }
  }
}
</page-query>

<style>

.post-title {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: 'Stylish';
}

.post-date {
  font-size: 16px;
  font-weight: 400;
}

.post-content {
  font-size: 20px;
}
</style>