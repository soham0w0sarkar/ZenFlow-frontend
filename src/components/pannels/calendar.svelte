<script>
	import { onMount } from 'svelte';
    
    const VITE_API_URL = import.meta.env.VITE_API_URL;

    onMount(async () => {
        try {
            const res = await fetch(`${VITE_API_URL}/widgets/calendar/getAllEvents`, {
		    method: 'GET',
		    credentials: 'include',
	    });
            const data = await res.json();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    })
</script>