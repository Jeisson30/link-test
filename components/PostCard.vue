<template>
    <div class="card" @click="goToDetail">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body.slice(0, 100) }}...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Post } from '../types/Post'
  import { useRouter } from 'vue-router'
  
  const props = defineProps<{ post: Post }>()
  const router = useRouter()
  
  const goToDetail = () => {
    router.push(`/posts/${props.post.id}`)
  }
  </script>
  
  <style scoped>
  .card {
    background-color: #ffffff;
    color: #333;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin: 1rem 0;
  }
  
  .card h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #1e3a8a;
  }
  
  .card p {
    font-size: 0.95rem;
    color: #334155;
    line-height: 1.4;
  }
  
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    background: #e0f2fe;
  }
  </style>
  