<script>
    import {IconSun} from '@tabler/icons-svelte';
</script>

<div class="variant-glass-surface flex justify-between rounded-md h-1/2 w-60 p-2">
    <div class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface">
        <div class="w-full h-2/3 flex justify-evenly text-xl font-bold"><IconSun size={30}/>100&deg;</div>
        <div class="w-full h-1/3 flex justify-center">G Noida</div>
    </div>
    <span class="h-full bg-white w-px"></span>
    <div class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface">
        <div class="w-full h-2/3 flex justify-center text-xl font-bold">00:00</div>
        <div class="w-full h-1/3 flex justify-center">Thu, 25</div>
    </div>
</div>