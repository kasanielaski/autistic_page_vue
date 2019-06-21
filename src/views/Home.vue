<template lang="pug">
.home
    Mock
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Mock from '@/components/Mock.vue';

@Component({
    components: {
        Mock
    }
})
export default class Home extends Vue {}
</script>
