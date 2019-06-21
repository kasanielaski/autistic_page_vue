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
    @mock.Getter('getPlaylistUrl') playlistUrl!: string;

    scPlayer: any = null;

    created() {
        this.scPlayer = new SoundCloudAudio(this.clientID);

        this.scPlayer.resolve(this.playlistUrl, (playlist: any) => {
            this.scPlayer.play();

            this.scPlayer.on('ended', () => {
                this.scPlayer.next();
            });
        });

        window.addEventListener('click', () => {
            this.scPlayer.pause();
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
