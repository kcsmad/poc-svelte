<script>
    import Card from './card.svelte'

    export let openings;
</script>

<style>

</style>

<ul>
    {#each openings as op}
        <Card {...op}/>
    {/each}
</ul>
