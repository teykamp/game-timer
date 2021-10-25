<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import PlayerArch from "./PlayerArch"

    const dispatch = createEventDispatcher();

    export let id:number;

    let name:string;
    let time:number;
    
    const onSubmit = (e):void => {
        e.preventDefault();
        let player = new PlayerArch(id+2, name, time*60, "", false);
        dispatch("addplayer", player);
    };
  </script>

<form name="newPlayerForm" on:submit={onSubmit} class="">
    <input type="text" placeholder="Player Name" bind:value={name}/>
    <input type="number" min="0" placeholder="Starting Time (minutes)" bind:value={time}/>
    <input type="submit" class="" value="Add Player"/>
</form>