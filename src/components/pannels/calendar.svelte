<script>
    import { IconChevronDown } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

    onMount(async () => {
        try {
            const res = await fetch(`/api/widgets/calendar/getAllEvents`, {
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