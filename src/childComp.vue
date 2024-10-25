<template>
  <div class="childComp"> {{ child }} </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    inject: { child: { default: 'default'} } 
  });
</script>