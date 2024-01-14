<template>
    <div class="error">
        <div class="error__text">
            <font-awesome-icon :icon="['fas', 'paw']" spin />
            <p>Sorry 404 ERROR</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notFound'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/index';
</style>
