<script>
	import { IconBrandGoogle } from "@tabler/icons-svelte";

    let focused = false;
    
    const focus = () => {
        focused = true;
    };

    const blur = () => {
        focused = false;
    };

</script>

<div class="h-full w-full p-2">
    <div class="h-fit w-full flex justify-center transition-all pl-2 rounded-full items-center {focused ? 'variant-ghost-surface':'bg-transparent'} duration-200">
        {#if focused}
            <IconBrandGoogle />
        {/if}
        <input type="text" name="google" on:focus={focus} on:blur={blur}  id="google" class="w-11/12 {focused ? 'bg-transparent':'variant-ghost-surface'} text-xl rounded-full focus:border-transparent  focus:ring-0" placeholder="{focused ? '' : 'Search'}"/>
    </div>
</div>
