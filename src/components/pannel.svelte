<script>
    import { IconList, IconCalendar, IconHourglassHigh, IconDeviceAnalytics, IconSettings, IconUser } from '@tabler/icons-svelte';
    export let title;
    export let pannelNo;

    let icon;
    $: {
        switch (pannelNo) {
            case 1:
                icon = IconList;
                break;
            case 2:
                icon = IconCalendar;
                break;
            case 3:
                icon = IconHourglassHigh;
                break;
            case 4:
                icon = IconDeviceAnalytics;
                break;
            case 5:
                icon = IconSettings;
                break;
            case 6:
                icon = IconUser;
                break;
            default:
                icon = IconList;
        }
    }
</script>
<div class="variant-glass-surface rounded-r-lg w-96 overflow-hidden">
    <div class="variant-glass-surface h-8 flex p-1">
        <span><svelte:component this={icon} /></span>
        <span class="font-bold ml-1">{title}</span>
    </div>
</div>