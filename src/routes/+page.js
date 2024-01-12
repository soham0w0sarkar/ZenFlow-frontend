export async function load({ fetch }) {
	const res = await fetch(`http://localhost:9090/auth/status`);
	const data = await res.json();

	return { props: { data } };
}
