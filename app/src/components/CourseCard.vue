<script setup>
import {defineProps} from 'vue'

defineProps({
  course: Object,
})
</script>

<template lang="pug">
div.course-card
  img(:src="course.view.dashboard_image.url")
  h3 {{course.name}}
</template>

<style lang="scss" scoped>
.course-card {
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  text-align: center;

  img {
    max-width: 100%;
    height: 100px;
    width: 100px;
    object-fit: cover;
  }
}
</style>