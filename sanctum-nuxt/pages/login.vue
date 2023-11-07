<script setup>
import { ref } from "vue";
import { useApiFetch } from "../composables/useApiFetch";

const form = ref({
    email: "test@example.com",
    password: "password",
});

const auth = useAuthStore();

const handleLogin = async () => {
    const { error } = await auth.onLogin(form.value);

    console.log(error);
};
</script>

<template>
    <div>
        <form @submit.prevent="handleLogin">
            <input type="email" v-model="form.email" />
            <input type="password" v-model="form.password" />
            <button>Submit</button>
        </form>
    </div>
</template>

<style scoped></style>
