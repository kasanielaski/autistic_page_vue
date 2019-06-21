<template lang="pug">
.mock
    | test_app
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
// @ts-ignore
import SoundCloudAudio from 'soundcloud-audio';

const mock = namespace('mock');

@Component
export default class Mock extends Vue {
    @mock.Getter('getClientID') clientID!: string;

    created() {
        const scPlayer = new SoundCloudAudio(this.clientID);

        scPlayer.play({
            streamUrl: 'https://api.soundcloud.com/tracks/344408230/stream'
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
