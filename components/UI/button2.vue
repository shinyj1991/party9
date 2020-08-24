<template>
  <button type="button" @click="$emit('click')" class="button2">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scope>
.button2 {display: block; width: 100%; height: 100px; border-radius: 10px; border: 2px solid #2699fb; background: #ffffff; font-size: 30px; line-height: 96px; color: #2699fb; text-align: center;}
</style>