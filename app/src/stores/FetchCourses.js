import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCourses } from '../service/ApiCourseService'

export const useFetchCourses = defineStore('fetchCourses', () => {
  const isLoading = ref(false)
  const data = ref([])
  const fetchData = async () => {
    isLoading.value = true
    return await getCourses()

      .then(response => {
        data.value = response.data.data
        isLoading.value = false
      })
      .catch(error => {
        console.error('Error fetching courses:', error)
        isLoading.value = false
      })
  }

  return {
    isLoading,
    data,
    fetchData
  }
})
