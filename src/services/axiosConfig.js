import axios from "axios";


export const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDE3N2MwYTIxNGMxZGU3ZWY1ZDAyMTllMDk4NGZlMCIsInN1YiI6IjVmZmVjZjM5M2UwOWYzMDAzYjE3MzZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2xYJPUJJyUm_0LWLTBXSqDr2M1tTZuXDqBGqkO5ngTM'
  }
})
