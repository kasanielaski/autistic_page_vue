<template lang="pug">
.app
    UserMenu.app__user-menu
    RouterView.app__router
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter, namespace } from 'vuex-class';

import UserMenu from './components/UserMenu.vue';

@Component({
    components: {
        UserMenu
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/carbon';
</style>
