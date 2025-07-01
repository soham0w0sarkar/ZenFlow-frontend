<script>
	 
	const handleClick = async () => {
		const google = await fetch(`http://localhost:9090/api/v1/auth/googleLogin`, {
			method: 'GET',
			credentials: 'include'
		});

		const data = await google.json();

		if (data.success) {
			window.location.href = data.loginUrl;
		}
	};
</script>

<button aria-label="google-login" class="variant-filled-primary p-1 rounded-sm w-2/5 flex items-center h-10" on:click={handleClick}>
	<span class="h-full w-1/4 rounded-sm bg-white mr-5 flex justify-center items-center">
		<img src="https://img.icons8.com/color/48/000000/google-logo.png" class="h-full" alt="google ka logo hona chahiye!!" />
	</span>
	<span class="text-2xl text-white">Sign in</span>
</button>
