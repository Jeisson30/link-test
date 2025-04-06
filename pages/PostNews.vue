<template>
	<div class="PostNews">
		<h1 class="title">Lista de Posts</h1>

		<div v-if="isLoading">Cargando...</div>
		<div v-if="error">{{ error }}</div>
		<div v-if="!isLoading && posts.length === 0">No hay posts para mostrar.</div>

		<div class="posts-grid" v-if="!isLoading && posts.length">
			<PostCard v-for="post in posts" :key="post.id" :post="post" />
		</div>
	</div>
</template>
  
<script setup lang="ts">
	import PostCard from '~/components/PostCard.vue'
	import { usePosts } from '@/composables/usePosts'

	const { posts, isLoading, error, fetchPosts } = usePosts()
	onMounted(fetchPosts)
</script>

<style scoped>
	.PostNews {
		padding: 3rem 2rem;
	}

	.PostNews h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: #1e3a8a;
		text-align: center;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		padding: 1rem;
	}
	.title {
		color: antiquewhite;
	}

</style>
  