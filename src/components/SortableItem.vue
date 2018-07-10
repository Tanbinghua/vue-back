<template>
  <li class="list-item">
    <span class="delete" v-if="showDelete">X</span>
    {{item}}
    <span v-handle class="handle" v-if="showHandle">三</span>
  </li>
</template>

<script>
import { ElementMixin, HandleDirective } from 'vue-slicksort'

export default {
  mixins: [ElementMixin],
  props: ['item', 'showHandle', 'showDelete'],
  directives: { handle: HandleDirective }
}
</script>

<style scoped>
.list-item {
  position: relative;
  display: block;
  padding: 15px 0 15px 50px;
  border: 1px solid #fff;
}
.handle, .delete {
  position: absolute;
  display: inline-block;
  padding: 5px 10px;
  background: #eee;
  color: #666;
}
.handle {
  right: 5px;
  top: 8px;
}
.delete {
  left: 5px;
  top: 8px;
}
.handle:hover {
  cursor: move;
}
.delete:hover {
  cursor: pointer;
}
</style>
