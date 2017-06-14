<template>
  <div class='container'>
    <cellRow v-for="(col, x) in currentState" :key='col' :col='col' :x='x'></cellRow>
  </div>
</template>

<script src="./container.js"></script>
<style src="./container.css" scoped></style>
