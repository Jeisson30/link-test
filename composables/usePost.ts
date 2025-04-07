import type { Post } from '@/types/Post'
import { ref } from 'vue'

export const usePost = () => {
  const post = ref<Post | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchPost = async (id: number) => {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      if (data.value) {
        post.value = data.value
      }
    } catch (err) {
      error.value = 'No se pudo cargar el post.'
    } finally {
      isLoading.value = false
    }
  }

  return { post, isLoading, error, fetchPost }
}
