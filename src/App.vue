<script setup>
// import Recognize from './components/Recognize.vue';
</script>

<template>
  <div class="page">
    <div class="top_bar">
    <router-link to="/recognize">Go to Study</router-link>
    <router-link to="/tables">Go to Tables</router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top_bar {
  display: flex;
  gap: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 10px;
  background-color: slategrey;
  color: white;
}

</style>
