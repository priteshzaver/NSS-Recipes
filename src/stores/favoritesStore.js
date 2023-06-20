import { ref } from 'vue'

export const favorites = ref({})

export const addToFavorites = (recipe) => {
  favorites.value = [...favorites.value, recipe]
}

export const removeFavorite = (id) => {
  favorites.value = favorites.value.filter((r) => r.recipeId !== id)
}
