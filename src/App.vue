<template lang="pug">
.app
    router-view.app__router
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class App extends Vue {}
</script>

<style lang="scss">
.app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f2fa;
    text-align: center;
    color: #523a64;
    margin-top: 60px;
}
</style>
