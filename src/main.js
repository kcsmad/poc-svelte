import App from './App.svelte';
import data from './data'

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		openings: data,
	}
});

export default app;
