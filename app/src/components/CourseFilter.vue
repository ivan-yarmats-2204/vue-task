<script setup>
const props = defineProps({
  defaultItem: String,
  items: Array,
})

let selectedItem = props.defaultItem

defineEmits(['selectedItem'])
</script>

<template lang="pug">
select(v-model="selectedItem" @change="$emit('selectedItem', selectedItem)")
  option {{props.defaultItem}}
  option(v-for="item in props.items" :key="item") {{item}}
</template>

<style scoped lang="scss">
select {
  margin: 5px;
}
</style>