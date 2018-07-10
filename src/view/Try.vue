<template>
  <div class="sort">
    <!-- <my-list></my-list> -->
    <sortable-list v-model="items" @sortStart="sortstart" @sortEnd="sortend" @sortMove="sortmove"
      :useDragHandle="true" lockAxis="y" helperClass="change-bg">
      <sortable-item v-for="(item, index) in items" :showHandle="showHandle" :showDelete="showDelete"
        :index="index" :key="index" :item="item"></sortable-item>
    </sortable-list>
  </div>
</template>

<script>
import MyList from '../components/List'
import SortableList from '../components/SortableList'
import SortableItem from '../components/SortableItem'

export default {
  data () {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'],
      showHandle: true,
      showDelete: true
    }
  },
  components: {
    MyList,
    SortableList,
    SortableItem
  },
  methods: {
    sortstart () {
    },
    sortmove () {
    },
    sortend () {
    }
  }
}
</script>

<style>
.sort {
  padding: 50px;
}
.change-bg {
  background: #fff;
}
</style>
