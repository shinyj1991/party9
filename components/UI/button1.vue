<template>
  <button type="button" @click="$emit('click')" class="button1">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scope>
.button1 {display: block; width: 100%; height: 100px; border-radius: 10px; border: 2px solid #2699fb; background: #2699fb; font-size: 30px; line-height: 96px; color: #ffffff; text-align: center;}
</style>