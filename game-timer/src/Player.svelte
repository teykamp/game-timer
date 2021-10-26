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
    const removeMinute = () => {
      if (time <= 60) {
        time = 0;
      }
      else {
        time -= 60
      } 
    };
    const timeConvert = (num:number):string => {
      const hours:number = Math.floor(num / 3600);
      num %= 3600;
      const minutes:number = Math.floor(num / 60);
      const seconds:number = num % 60;
      return `${hours}h:${minutes}m:${seconds}s`;
    };

</script>

<div class="card" style="background-color: {color}">
  <h1>
      {name}
    <button class="btn btn-sm" on:click={toggleControls}>
      {#if showControls}
          -
      {:else}
          +
      {/if}
    </button>
  </h1>
  {#if showControls}
    <button class="" on:click={addMinute}>+1</button>
    <button class="" on:click={removeMinute}>-1</button>
    <button class="btn btn-danger btn-sm" on:click={onDelete}>x</button>
    <input type="color" bind:value={color}>
  {/if}
  <h3>Time Remaining: {timeConvert(time)}</h3>
</div>

<style>

</style>

<!-- TODO: MAKE COLORS DYNAMIC and reactive (edit css cus wont work in div) -->