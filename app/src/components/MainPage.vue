<script setup>
  import {ref, computed, onMounted} from 'vue'
  import CourseList from './CourseList.vue'
  import CourseFilter from './CourseFilter.vue'
  import Loader from './Loader.vue'
  import {useFetchCourses} from '../stores/FetchCourses'
  import dictionary from '../../public/dictionary.json'

  const courses = useFetchCourses()

  const allGoalsText = dictionary.defaultFilterItems.allGoals
  const allTopicsText = dictionary.defaultFilterItems.allTopics
  const allGradesText = dictionary.defaultFilterItems.allGrades
  let selectedGoal = ref(allGoalsText)
  let selectedTopic = ref(allTopicsText)
  let selectedGrade = ref(allGradesText)

  const goals = computed(() => {
    return [...new Set(courses.data.flatMap((course) => course.goals.map(goal => goal.name)))];
  })
  const topics = computed(() => {
    return [...new Set(courses.data.flatMap((course) => course.topics.map(topic => topic.name)))];
  })
  const grades = computed(() => {
    return [...new Set(courses.data.flatMap((course) => course.grades))];
  })

  onMounted( () => {
    courses.fetchData()
  })

  const selectGoal = selectedItem => selectedGoal.value = selectedItem
  const selectTopic = selectedItem => selectedTopic.value = selectedItem
  const selectGrade = selectedItem => selectedGrade.value = selectedItem
</script>

<template lang="pug">
div.app
  loader(v-if="courses.isLoading")
  div(v-else)
    h1 {{dictionary.appName}}
    div.filters
      course-filter(:default-item='allGoalsText' :items="goals" @select-item="selectGoal")
      course-filter(:default-item='allTopicsText' :items="topics" @select-item="selectTopic")
      course-filter(:default-item='allGradesText' :items="grades" @select-item="selectGrade")
    course-list(
      :courses="courses.data"
      :selected-goal="selectedGoal"
      :selected-topic="selectedTopic"
      :selected-grade="selectedGrade"
    )
</template>

<style lang="scss" scoped>
.app {
  text-align: center;
  padding: 20px;

  header {
    margin-bottom: 20px;

    select {
      margin: 5px;
    }
  }
}
</style>