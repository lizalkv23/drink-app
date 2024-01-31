import axios from 'axios'
import { defineStore } from 'pinia'
import { INGREDIENTS_LIST, COCKTAIL_BY_INGREDIENT, COCKTAIL_BY_ID } from '@/constants/api'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: [],
    drinkInfo: null
  }),
  actions: {
    async getIngredients() {
      try {
        const response = await axios.get(INGREDIENTS_LIST)
        this.ingredients = response?.data?.drinks
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async getCocktails(ingredient) {
      try {
        const response = await axios.get(COCKTAIL_BY_INGREDIENT + ingredient)
        this.cocktails = response?.data?.drinks

        this.saveToLocalStorage()
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('cocktails', JSON.stringify(this.cocktails))
    },

    loadFromLocalStorage() {
      const storedCocktails = localStorage.getItem('cocktails')
      if (storedCocktails) {
        this.cocktails = JSON.parse(storedCocktails)
      }
    },
    saveIngredientToLocalStorage() {
      localStorage.setItem('ingredient', this.ingredient)
    },

    loadIngredientFromLocalStorage() {
      const storedIngredient = localStorage.getItem('ingredient')
      if (storedIngredient) {
        this.ingredient = storedIngredient
      }
    },
    async getCocktailInfo(drinkId) {
      try {
        const data = await axios.get(COCKTAIL_BY_ID + drinkId)
        console.log(data)
        this.drinkInfo = data?.data?.drinks[0]
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    setIngredient(value) {
      this.ingredient = value.strIngredient1
      this.saveIngredientToLocalStorage()
    },
    reset() {
      this.ingredient = null
    }
  }
})
