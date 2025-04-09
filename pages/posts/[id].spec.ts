import { render, screen } from '@testing-library/vue'
import PostPage from '../../pages/posts/[id].vue'
import { describe, it, expect, vi } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { h, defineComponent, Suspense } from 'vue'

vi.mock('../../composables/usePost', () => {
  const { ref } = require('vue')
  type Post = { id: number; title: string; body: string }

  const post = ref<Post | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchPost = vi.fn(async (id: number) => {
    post.value = {
      id,
      title: 'Post de prueba',
      body: 'Contenido del post de prueba',
    }
  })

  return {
    usePost: () => ({
      post,
      isLoading,
      error,
      fetchPost,
    }),
  }
})

describe('Post Detail Page', () => {
  it('renderiza el post correctamente', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/posts/:id', component: PostPage }],
    })

    router.push('/posts/1')
    await router.isReady()

    const Wrapper = defineComponent({
      setup() {
        return () => h(Suspense, null, { default: () => h(PostPage) })
      },
    })

    render(Wrapper, {
      global: {
        plugins: [router],
      },
    })
    const title = await screen.findByText('Post de prueba')
    const body = await screen.findByText('Contenido del post de prueba')

    expect(title).toBeInTheDocument()
    expect(body).toBeInTheDocument()
  })
})
