import App from './App.svelte';
import data from './data'

const app = new App({
	target: document.body,
	props: {
		openings: data,
	}
});

export default app;
