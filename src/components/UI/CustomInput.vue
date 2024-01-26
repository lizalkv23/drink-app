<template>
    <div>
        <!-- :type="placeholderTitle" -->
        <input  :type="placeholderTitle" @input="upDate" :value="modelValue"  :placeholder="placeholderTitle"/>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        modelValue: {
            type: [String, Number]
        },
        placeholderTitle:{
            type: String,
            required: true
        },
        typeInput:{
            type: String,
            required: true
        }
    },
    methods: {
        upDate(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
