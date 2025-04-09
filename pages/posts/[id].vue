<template>
  <div v-if="isLoading" class="loading">Cargando post...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
  <div v-else class="post-detail">
    <h1>{{ post?.title }}</h1>
    <p>{{ post?.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePost } from '../../composables/usePost'

const route = useRoute()
const { post, isLoading, error, fetchPost } = usePost()

onMounted(() => {
  fetchPost(Number(route.params.id))
})
</script>
  
  <style scoped>
  .post-detail {
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;
    max-width: 600px;
  }
  .post-detail h1 {
    color: #1e3a8a;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .post-detail p {
    font-size: 1.125rem;
    color: #334155;
    line-height: 1.6;
  }
  .loading,
  .error {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 2rem;
  }
  .error {
    color: red;
  }
  </style>
  