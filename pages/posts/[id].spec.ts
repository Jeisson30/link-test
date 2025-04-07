import { render, screen, waitFor } from '@testing-library/vue'
import PostPage from '@/pages/posts/[id].vue'
import { describe, it, expect, vi } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'

vi.mock('@/composables/usePost', () => ({
  usePost: () => ({
    post: {
      value: {
        id: 1,
        title: 'Post de prueba',
        body: 'Contenido del post de prueba',
      },
    },
    isLoading: { value: false },
    error: { value: null },
    fetchPost: vi.fn(),
  }),
}))

describe('Post Detail Page', () => {
  it('renderiza el post correctamente', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/posts/:id', component: PostPage },
      ],
    })

    router.push('/posts/1')
    await router.isReady()

    render(PostPage, {
      global: {
        plugins: [router],
      },
    })

    await waitFor(() => {
      expect(screen.getByText('Post de prueba')).toBeInTheDocument()
      expect(screen.getByText('Contenido del post de prueba')).toBeInTheDocument()
    })
  })
})
