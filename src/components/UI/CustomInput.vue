<template>
    <div>
        <input :value="modelValue" @input="upDate" type="text" class="inp" />
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        modelValue: {
            type: String,
        },
    },
    methods: {
        upDate(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>

<style lang="scss" scoped>
.inp {
    background-color: green;
}
</style>
