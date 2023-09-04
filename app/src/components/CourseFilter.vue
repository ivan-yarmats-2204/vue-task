<script setup>
const props = defineProps({
  defaultItem: String,
  items: Array,
})

let selectedItem = props.defaultItem

defineEmits(['selectItem'])
</script>

<template lang="pug">
select(v-model="selectedItem" @change="$emit('selectItem', selectedItem)")
  option {{props.defaultItem}}
  option(v-for="item in props.items" :key="item") {{item}}
</template>

<style scoped lang="scss">
select {
  margin: 5px;
}
</style>