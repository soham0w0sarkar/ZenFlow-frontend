<script>
	import { isAuthenticated } from './../lib/store.js';

	const params = `scrollbars=no,resizable=no, status=no, location=no, toolbar=no, menubar=no,
width=1000, height=600, left=100, top=100`;

	const handleClick = async () => {
		const google = await fetch(`/api/auth/googleLogin`, {
			method: 'GET',
			credentials: 'include',
		});
		const data = await google.json();

		if (data.success) {
			const newWindow = window.open(data.loginUrl, 'loginWindow', params);
			if (window.focus) newWindow.focus();
			
			
			newWindow.onload = () => {
				newWindow.addEventListener('beforeunload', () => {
					$isAuthenticated = true;
				});
				
				const interval = setInterval(() => {
					if (newWindow.location.href.includes('zen-flow.vercel.app')) {
                		newWindow.close();
                		clearInterval(interval);
            		}
				}, 100);
			};
			
		}
	};
</script>

<button aria-label="google-login" class="variant-filled-primary p-1 rounded-sm w-2/5 flex items-center h-10" on:click={handleClick}>
	<span class="h-full w-1/4 rounded-sm bg-white mr-5 flex justify-center items-center">
		<img src="https://img.icons8.com/color/48/000000/google-logo.png" class="h-full" alt="google ka logo hona chahiye!!" />
	</span>
	<span class="text-2xl text-white">Sign in</span>
</button>
