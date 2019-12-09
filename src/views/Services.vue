<template lang="pug">
.services
    | services
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter, namespace } from 'vuex-class';

@Component
export default class Services extends Vue {}
</script>

<style lang="scss" scoped></style>
