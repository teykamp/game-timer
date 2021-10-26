<script lang="ts">
	import Player from "./Player.svelte";
	import AddPlayer from "./AddPlayer.svelte"
	import PlayerArch from "./PlayerArch"

	let countDir:boolean = false; // false=down, true=up
	let activePlayer:number = 0;
	let currentID:number = 0;
	let examplePlayer:PlayerArch = new PlayerArch(currentID, "Player 1", 60, "#FFF", false);
	let activeTimer:boolean = false;
	
	let playerList:PlayerArch[] = [];
	playerList = [...playerList, examplePlayer]


	const updateActivePlayer = ():void => {
		activePlayer = activePlayer == playerList.length ? 0 : activePlayer++;
	};
	const removePlayer = (e):void => {
    	playerList = playerList.filter(player => player.getID() !== e.detail);
  	};
	const addPlayer = (e):void => {
		currentID++;
		let newPlayer = e.detail;
		newPlayer.setID(currentID);
		playerList = [...playerList, newPlayer];
		console.log("player:", playerList[1]);
	};

	const toggleTimer = ():void => {
		activeTimer = false;
	};

</script>
	<div class="container">
		<AddPlayer 
		on:addplayer={addPlayer}
		id={currentID}
		/>
		<button on:click={toggleTimer}>Start/Pause</button>
		{#if playerList.length === 0}
			<p>No Players.</p>
		{:else}
			{#each playerList as player}
				<Player
				id={player.getID()}
				name={player.name}
				time={player.time}
				color={player.color}
				on:removeplayer={removePlayer} />
			{/each}
		{/if}
	</div>


<style>

</style>