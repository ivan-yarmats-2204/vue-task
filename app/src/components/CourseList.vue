<script setup>
  import CourseCard from './CourseCard.vue'
  import {computed, defineProps} from 'vue'
  import dictionary from '../../public/dictionary.json'

  const props = defineProps({
    courses: Array,
    selectedGoal: String,
    selectedTopic: String,
    selectedGrade: String,
  })

  const filteredCourses = computed(() => {
    return props.courses.filter(course => {
      const goalMatch = props.selectedGoal === dictionary.defaultFilterItems.allGoals
        || course.goals.map(goal => goal.name).includes(props.selectedGoal)
      const topicMatch = props.selectedTopic === dictionary.defaultFilterItems.allTopics
        || course.topics.map(topic => topic.name).includes(props.selectedTopic)
      const gradeMatch = props.selectedGrade === dictionary.defaultFilterItems.allGrades
        || course.grades.includes(Number(props.selectedGrade))

      return goalMatch && topicMatch && gradeMatch
    })
  })
</script>

<template lang="pug">
div.course-list
  course-card(v-for="course in filteredCourses" :key="course" :course="course")
  div(v-if="filteredCourses.length === 0") {{dictionary.coursesNotFound}}.
</template>

<style lang="scss" scoped>
.course-list {
  display: flex;
  flex-flow: wrap;
}
</style>