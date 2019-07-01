<script>
    import { activeIndex } from './stores'
    import Handle from './handle.svelte'
    import CardList from './card-list.svelte'
    import Card from './card.svelte'

	export let name;
    export let openings;

    let activeIndexValue;
    let currentVideo;

    const unsubscribe = activeIndex.subscribe(index => {
       activeIndexValue = index;
    })

        currentVideo = openings[activeIndexValue]


    const handleKeyDown = event => {
        let key = event.keyCode

        if (key === 39) {
            if (activeIndexValue === openings.length - 1)
                return

            activeIndex.navigateRight()
        }

        if (key === 37) {
            if (activeIndexValue === 0)
                return

            activeIndex.navigateLeft()
        }

        if (key === 13) {
            currentVideo = openings[activeIndexValue]
        }
    }

</script>

<style>
	h1 {
		color: purple;
	}

	.main-page {
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    left: 0;
	    text-align: center;
	}

	.embed-youtube {
	    width: 95%;
	    height: 50%;
	}
</style>

<svelte:window on:keydown={handleKeyDown} />

<div class="main-page">
    <h1>Hello {name}!</h1>
    <iframe
        title="kek"
        class="embed-youtube"
        frameborder="0"
        src="https://youtube.com/embed/{currentVideo.video}?autoplay=1"
     />
    <h2>Current Video: {currentVideo.name}</h2>
    {#each openings as op, index}
        <Card {...op} isActive="{index === activeIndexValue}"/>
    {/each}
</div>

