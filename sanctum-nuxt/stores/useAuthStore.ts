type User = {
    id: number;
    name: string;
    email: string;
};

type Credentials = {
    email: string;
    password: string;
};

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null);
    const isLoggedIn = computed(() => !!user.value);

    const fetchUser = async () => {
        const { data } = await useApiFetch("/api/user");

        user.value = data.value as User;
    };

    const onLogin = async (credentials: Credentials) => {
        await useApiFetch("/sanctum/csrf-cookie");

        const login = await useApiFetch("/login", {
            method: "POST",
            body: credentials,
        });

        await fetchUser();

        return login;
    };

    const onLogout = async () => {
        await useApiFetch("/logout", {
            method: "POST",
        });
        user.value = null;
        return navigateTo("/login");
    };

    return { user, onLogin, isLoggedIn, fetchUser, onLogout };
});
