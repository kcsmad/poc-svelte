<script>
    import Card from './card.svelte'

    export let data;
</script>

<style>

</style>

<ul>
    {#each data as op}
        <Card {...op}/>
    {/each}
</ul>
