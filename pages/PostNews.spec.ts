import { render, screen } from '@testing-library/vue'
import PostNews from '@/pages/PostNews.vue'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@/composables/usePosts', () => {
  return {
    usePosts: () => ({
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'Post de prueba',
          body: 'Contenido de prueba del post',
        },
      ],
      isLoading: false,
      error: null,
      fetchPosts: vi.fn(),
    }),
  }
})

describe('PostNews.vue', () => {
  it('muestra el título principal y lista un post cuando está cargado', async () => {
    render(PostNews)

    expect(screen.getByText('Lista de Posts')).toBeInTheDocument()
    expect(await screen.findByText('Post de prueba')).toBeInTheDocument()
    expect(await screen.findByText(/Contenido de prueba/)).toBeInTheDocument()
  })
})
