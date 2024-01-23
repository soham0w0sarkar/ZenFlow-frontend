<script>
	const VITE_API_URL  =  import.meta.env.VITE_API_URL;
    import { IconPower } from "@tabler/icons-svelte";
    import { isAuthenticated } from "../lib/store.js";

    const logout = async () => {
        try {
            console.log("clicked");
            const res = await fetch(`${VITE_API_URL}/auth/logout`);
            const data = await res.json();

            if(data.success) {
                isAuthenticated.set(false);
            }
        } catch (error) {
            console.error(error)
        }
    }

</script>

{#if $isAuthenticated === true}
    <button on:click={logout}><IconPower/></button>
{/if}
