<script>
    let key = 0;

	const handleKeyDown = (event) => {
	  console.log(event)
	  key = event.keyCode
	}
</script>

<style>

</style>

<svelte:window on:keydown={handleKeyDown} />
<div>
    The key code pressed is: {key}
</div>
