<script>
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	const handleClick = () => {
		window.location.href = `${VITE_API_URL}/auth/googleLogin`;
	};
</script>

<button class="variant-filled-primary p-1 rounded-sm w-2/5 flex items-center h-10" on:click={handleClick}>
	<span class="h-full w-1/4 rounded-sm bg-white mr-5 flex justify-center items-center">
		<img src="https://img.icons8.com/color/48/000000/google-logo.png" class="h-full" alt="google ka logo hona chahiye!!" />
	</span>
	<span class="text-2xl text-white">Sign in</span>
</button>
