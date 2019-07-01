<script>
    import data from './data'
    import Handle from './handle.svelte'
    import CardList from './card-list.svelte'

	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<div>
    <h1>Hello {name}!</h1>
     <CardList data={data} />
    <Handle />
</div>

