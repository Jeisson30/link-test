import type { Post } from '@/types/Post'
import { ref } from 'vue'


export const usePosts = () => {
  const posts = ref<Post[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchPosts = async () => {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
      if (data.value) {
        posts.value = data.value
      }
    } catch (err) {
      error.value = 'No se pudieron cargar los posts.'
    } finally {
      isLoading.value = false
    }
  }

  return { posts, isLoading, error, fetchPosts }
}
