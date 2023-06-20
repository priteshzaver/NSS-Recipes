<script setup>
import Image from 'primevue/image'
import Tag from 'primevue/tag'

const props = defineProps([
  'recipeId',
  'imageUrl',
  'title',
  'categories',
  'minutes',
  'servings',
  'url'
])
</script>

<template>
  <div class="flex py-2">
    <Image :src="props.imageUrl" width="180" preview />
    <div class="flex-grow-1 pl-3">
      <div>
        <h3 class="text-primary mt-0 mb-1">{{ props.title }}</h3>
        <Tag
          v-for="category in categories"
          :key="category"
          :value="category"
          rounded
          class="mr-1 mb-1 surface-300 py-0"
        />
        <p class="text-secondary-600 text-xs my-1">
          <i class="pi pi-clock mr-1"></i>
          {{ props.minutes }} minutes
        </p>
        <p class="text-secondary-600 text-xs my-1">
          <i class="pi pi-users mr-1"></i>
          Serves {{ props.servings }}
        </p>
        <a :href="props.url" class="text-sm" target="_blank">View recipe</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
