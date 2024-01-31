<template>
  <div class="custom-select-wrapper">
    <input
      class="custom-select"
      :placeholder="$t('home.select.placeholder')"
      @click="toggleDropdown"
      @input="filterIngredients"
      :value="filterText"
    />

    <div class="after" :class="{ 'arrow-up': !isDropdownOpen }"></div>

    <div v-if="isDropdownOpen" class="dropdown">
      <div
        class="dropdown__opt"
        v-for="(ingredient, key) in filteredIngredients"
        :key="key"
        @click="selectOption(ingredient)"
      >
        {{ ingredient.strIngredient1 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    ingredientsCocktail: {
      type: Array,
      default: () => []
    },
    selectedOption: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isDropdownOpen: false,
      filterText: ''
    }
  },
  computed: {
    filteredIngredients() {
      const lowerCaseFilter = this.filterText.toLowerCase()
      return this.ingredientsCocktail.filter((ingredient) =>
        ingredient.strIngredient1.toLowerCase().includes(lowerCaseFilter)
      )
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    selectOption(ingredient) {
      this.$emit('option', ingredient)
      this.isDropdownOpen = false
      this.filterText = ingredient.strIngredient1
    },
    filterIngredients(event) {
      this.filterText = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/index';
</style>
