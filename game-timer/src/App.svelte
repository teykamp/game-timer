<script lang="ts">
	import Player from "./Player.svelte";

	type PlayerArch = { 
			id:number	
			name:string;
			time:number;
			color:string;
	};
	let playerList:PlayerArch[] = [];
	let countDir:boolean = false;
	let activePlayer:number = 0;


	const updateActivePlayer = () => {
		activePlayer = activePlayer == playerList.length ? 0 : activePlayer++
	};
	const removePlayer = (e):void => {
    	playerList = playerList.filter(player => player.id !== e.detail);
  	};

</script>
	<div class="container">
		<!-- <AddPlayer on:addplayer={addPlayer} /> -->
		{#if playerList.length === 0}
			<p>No Players.</p>
		{:else}
			{#each playerList as player}
				<Player
				id={player.id}
				name={player.name}
				time={player.time}
				color={player.color}
				on:removeplayer={removePlayer} />
			{/each}
		{/if}
	</div>


<style>

</style>