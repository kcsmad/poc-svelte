<script>
    export let cover;
    export let isActive = false;
    export let name;
</script>

<style>
    .card-list-item {
        height: 300px;
        width: 240px;
        list-style: none;
        border: 2px solid transparent;
        display: inline-block;
        text-align: center;
    }

    .card-list-item > img {
        width: 100%;
        height: 100%;
    }

    .active {
        border-color: white;
    }
</style>

<li class="card-list-item {isActive ? 'active' : ''}">
    <img src={cover} alt="Kek"  />
    <h4>{name}</h4>
</li>
