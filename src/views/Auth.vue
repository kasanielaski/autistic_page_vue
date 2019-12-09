<template lang="pug">
.auth
    | auth
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';

import { UserT } from '../store/user/types';

const userStore = namespace('user');

@Component
export default class Auth extends Vue {
    @userStore.Action('authorize') authorize!: (payload: {
        login: string;
        password: string;
    }) => Promise<void>;

    @userStore.Getter('getUser') user!: UserT;

    login = '';
    password = '';

    loginRules = [(value: string) => Boolean(value) || 'Login is required'];

    passwordRules = [
        (value: string) => Boolean(value) || 'Password is required'
    ];

    submitForm() {
        // костыль, чтобы TS не ругался на метод validate()
        const form: any = this.$refs.form;

        if (form.validate()) {
            const { authorize, login, password } = this;
            authorize({ login, password });
        }
    }

    @Watch('user')
    onUserChange() {
        if (this.user.token) {
            this.$router.push('/services');
        }
    }
}
</script>
