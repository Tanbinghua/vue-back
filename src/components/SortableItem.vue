<template>
  <li class="list-item">
    <span v-handle class="handle">click</span>
    {{item}}
  </li>
</template>

<script>
import { ElementMixin, HandleDirective } from 'vue-slicksort'

export default {
  mixins: [ElementMixin],
  props: ['item', 'showHandle'],
  directives: { handle: HandleDirective }
}
</script>

<style>
.handle:hover {
  cursor: move;
}
.list-item {
  background: #fff;
}
</style>
