import { render } from '@testing-library/vue'
import PostCard from './PostCard.vue'
import { describe, expect, it } from 'vitest'

const mockPost = {
    userId: 1,
    id: 1,
    title: 'Título de prueba',
    body: 'Contenido de prueba del post',
}

describe('PostCard', () => {
  it('muestra el título y parte del cuerpo del post', () => {
    const { getByText } = render(PostCard, {
      props: { post: mockPost }
    })

    expect(getByText('Título de prueba')).toBeInTheDocument()
    expect(getByText(/Contenido de prueba/)).toBeInTheDocument()
  })
})
