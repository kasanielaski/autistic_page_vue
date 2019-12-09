<template lang="pug">
CvHeader.user-menu
    | usermenu
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import { CvHeader } from '@carbon/vue';

@Component({
    components: {
        CvHeader
    }
})
export default class UserMenu extends Vue {}
</script>

<style lang="scss" scoped></style>
