# 📰 Vue Nuxt Blog - Prueba Técnica Mid-Level

Este es un proyecto desarrollado con **Vue 3**, **Nuxt 3** y **TypeScript** que consume la API pública de JSONPlaceholder para listar y visualizar detalles de publicaciones (`posts`). El enfoque está en buenas prácticas, estructura clara, separación de responsabilidades y pruebas unitarias.

EL proyecto consta de consulta de api que simulas post, realiza el llamado y el usuario puede sleeccionar cualquiera y ver en otra interfaz el post seleccionado.

## 📋 Características del proyecto

- Framework: [Nuxt 3](https://nuxt.com/)
- Lenguaje: TypeScript
- Estilos: CSS tradicional (sin Tailwind)
- Consumo de API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Pruebas: [Vitest](https://vitest.dev/) + [@testing-library/vue](https://testing-library.com/docs/vue-testing-library/intro/)
- Arquitectura limpia: separación de `pages`, `components`, `composables`, `types`, y `tests`.

---

## 🚀 Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone -b main https://github.com/Jeisson30/link-test.git
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: https://link-test-rho.vercel.app/PostNews

---

## 📁 Estructura del proyecto

```
.
├── components/        # Componentes reutilizables
│   └── PostCard.vue
├── composables/       # Lógica reutilizable
│   ├── usePosts.ts    # Listado de posts
│   └── usePost.ts     # Detalle de un post
├── pages/
│   ├── index.vue      # Página principal (listado)
│   └── posts/
│       └── [id].vue   # Página de detalle  
├── types/
│   └── Post.ts        # Tipados
├── vitest.config.ts   # Configuración de Vitest
└── README.md
```

---

## 🧪 Pruebas unitarias

### 1. Ejecutar pruebas

```bash
npm run test
```

### 2. Estructura de pruebas

| Archivo | Prueba |
|--------|--------|
| `PostCard.spec.ts` | Valida que se renderice el título y contenido del post |
| `usePosts.spec.ts` | Simula el fetch de todos los posts |
| `usePost.spec.ts` | Simula el fetch de un post individual por ID |
| `[id].spec.ts` | Verifica que la vista de detalle funcione correctamente |

### 3. Ejemplo de prueba con Vitest

```ts
import { render } from '@testing-library/vue'
import PostCard from '@/components/PostCard.vue'
import { describe, it, expect } from 'vitest'

const mockPost = {
  id: 1,
  userId: 1,
  title: 'Post de prueba',
  body: 'Contenido simulado del post.'
}

describe('PostCard', () => {
  it('renderiza el título y contenido correctamente', () => {
    const { getByText } = render(PostCard, {
      props: { post: mockPost }
    })

    expect(getByText('Post de prueba')).toBeInTheDocument()
    expect(getByText(/Contenido simulado/)).toBeInTheDocument()
  })
})
```

---

## 🧠 Buenas prácticas implementadas

- Separación clara entre lógica (composables), UI (components) y vistas (pages).
- Reutilización de código a través de composables (`usePosts`, `usePost`).
- Mapeo de tipos con TypeScript para mayor robustez.
- Estilos simples, organizados por componente (`<style scoped>`).
- Pruebas unitarias con mocks para evitar llamadas reales a la API.
- Uso de rutas dinámicas (`[id].vue`) para detalle de publicaciones.

---

## 🔗 Recursos externos usados

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Vitest Docs](https://vitest.dev/)

---

## 🧑‍💻 Autor

**Jeisson Pulido**  
[GitHub](https://github.com/Jeisson30) · Bogotá, Colombia

---

## 📄 Licencia

MIT - Desarrollo para conocimiento y muestra de conceptos solicitados.