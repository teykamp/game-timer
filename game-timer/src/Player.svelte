<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let id:number;
    export let name:string;
    export let time:number;
    export let color:string;

    let showControls:boolean = false;

    const toggleControls = () => (showControls = !showControls);
    const onDelete = () => dispatch("removeplayer", id);
    const addMinute = () => (time += 60);
    const removeMinute = () => (time -= 60);
    const timeConvert = (num:number):string => {return Math.floor(num / 60) + ":" + num % 60};
</script>

<div class="card" background-color="{color}">
    <h1>
       {name} | {id}
      <button class="btn btn-sm" on:click={toggleControls}>
        {#if showControls}
            -
        {:else}
            +
        {/if}
      </button>
      <button class="" on:click={onDelete}>x</button>
    </h1>
    <h3>Time Remaining: {timeConvert(time)}</h3>
    {#if showControls}
      <button class="" on:click={addMinute}>+1</button>
      <button class="" on:click={removeMinute}>-1</button>
      <button class="btn btn-danger btn-sm" on:click={onDelete}>x</button>
    {/if}
  </div>