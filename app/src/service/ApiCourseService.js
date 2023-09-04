import axios from 'axios'
import { API_URL } from '../common/config'

export const getCourses = () => axios.get(API_URL + '/service/training/side-courses/api/course')
