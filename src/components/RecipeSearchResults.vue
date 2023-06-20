<script setup>
import { searchResults, isFetching, keywords } from '../stores/recipeStore'
import ProgressSpinner from 'primevue/progressspinner'
</script>

<template>
  <div>
    <div v-if="keywords.length">
      <div v-if="isFetching">
        <h5 class="text-center">Searching for recipes...</h5>
        <div class="flex justify-content-center">
          <ProgressSpinner />
        </div>
      </div>
      <div v-else>
        Found {{ searchResults.length }} recipe(s) using
        <strong class="text-color-secondary">{{ keywords.join(', ') }}</strong>
      </div>
    </div>
    <p v-else>Add ingredients to find recipes</p>
  </div>
</template>

<style scoped></style>
