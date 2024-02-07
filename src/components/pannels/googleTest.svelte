<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script = document.createElement('script');
      script.src = 'https://cse.google.com/cse.js?cx=b40cea31f0e6a4a66';
      script.async = true;
      document.body.appendChild(script);
    });
</script>
  
 <div class="gsce-search"></div>