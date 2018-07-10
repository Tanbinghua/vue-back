<template>
  <div class="sort-list">
    <sortable-list lockAxis="y" v-model="items">
      <sortable-item v-for="(item, index) in items" :key="index"
        :index="index" :item="item">
      </sortable-item>
    </sortable-list>
  </div>
</template>

<script>
import { ContainerMixin, ElementMixin } from 'vue-slicksort'

const SortableList = {
  mixins: [ContainerMixin],
  template: `
    <ul class="list">
      <slot></slot>
    </ul>
  `
}

const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `
    <li class="list-item">{{ item }} </li>
  `
}

export default {
  data () {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
    }
  },
  components: {
    SortableList,
    SortableItem
  }
}
</script>
