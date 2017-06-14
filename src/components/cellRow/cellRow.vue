<template>
  <div class='cell-row'>
    <div v-for="(cell, y) in col" class='cell-container'>
      <cellAlive v-if='cell' :cell='cell' :y='y' :x='x'></cellAlive>
      <cellDead v-if='!cell' :cell='cell' :y='y' :x='x'></cellDead>
    </div>
  </div>
</template>

<script src="./cellRow.js"></script>
<style src="./cellRow.css" scoped></style>
