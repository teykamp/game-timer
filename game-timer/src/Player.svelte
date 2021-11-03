<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let id:number;
    export let name:string;
    export let time:number;
    export let color:string;
    export let textColor:string;
    console.log(textColor)


    $: {
      colorUpdator(color);
    }

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

    const colorUpdator = (color:string):void => {
      console.log(color, textColor);
      if (textColor == "") { // first time check
        textColor = "#000";
      }
      else {
        color = color.replace("#", "");
        var r = parseInt(color.substr(0, 2), 16);
        var g = parseInt(color.substr(2, 2), 16);
        var b = parseInt(color.substr(4, 2), 16);
        var lum = ((r*299) + (g*587) + (b*114)) / 1000;
        (lum >= 128) ? textColor = '#000' : textColor = '#FFF';
      }
      
    };

</script>

<div class="card" style="background-color: {color}">
  <h1 style="color: {textColor}">
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
    <input type="color" bind:value={color} default-value="#FFF">
  {/if}
  <h3 style="color: {textColor}">Time Remaining: {timeConvert(time)}</h3>
</div>

<style>

</style>

<!-- TODO: MAKE COLORS DYNAMIC and reactive (edit css cus wont work in div) -->