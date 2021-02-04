<template>
    <g-link
      :to="tagPath"
      class="bg-gray-200 m-1 p-2 text-blue-700 text-sm"
      >{{ tagLabel }}</g-link
    >
</template>

<script>
export default {
  props: ["tagPath", "tagLabel"],
};
</script>