<script setup>
import { searchResults, isFetching, keywords } from '../stores/recipeStore'
</script>

<template>
  <div>
    isFetching:
    <pre>{{ isFetching }}</pre>
    keywords:
    <pre>{{ keywords }}</pre>
    Results:
    <pre>{{ searchResults }}</pre>
  </div>
</template>

<style scoped></style>
