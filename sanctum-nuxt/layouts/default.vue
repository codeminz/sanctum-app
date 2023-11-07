<script lang="ts" setup>
const auth = useAuthStore();

const handleLogout = async () => {
    await auth.onLogout();
};
</script>

<template>
    <div>
        {{ auth.user }}

        <button v-if="auth.isLoggedIn" @click="handleLogout">Logout</button>

        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/register">Register</NuxtLink></li>
            <li><NuxtLink to="/login">Login</NuxtLink></li>
            <li><NuxtLink to="/auth-only">Auth Only</NuxtLink></li>
            <li><NuxtLink to="/guest-only">Guest Only</NuxtLink></li>
        </ul>
        <slot />
    </div>
</template>

<style scoped></style>
