<template>
  <div class='menu'>
    <button @click='randomFill'>Random fill</button>
    <input v-model.number='width' type='number' placeholder='width'>
    <input v-model.number='height' type='number' placeholder='height'>
    <button @click='setDimensions'>Set dimensions</button>
    <button @click='triggerPlay'>{{ setPlayStatus }}</button>
    <input v-model.number='interval' type='number' placeholder='interval'>
    <button @click='setInterval'>Set Interval (ms)</button>
    <button @click='setGosper'>Gosper glider gun</button>
  </div>
</template>

<script src="./menu.js"></script>
<style src="./menu.css" scoped></style>
