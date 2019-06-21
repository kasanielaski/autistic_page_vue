<template lang="pug">
.mock
    | {{ mockValue }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';

const mock = namespace('mock');

@Component
export default class Mock extends Vue {
    @mock.Action('mockAction') mockAction!: (payload: string) => void;

    @mock.Getter('getMockValue') mockValue!: string;

    created() {
        this.mockAction('newSting');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
