<script lang="ts">
	import Player from "./Player.svelte";
	import AddPlayer from "./AddPlayer.svelte"
	import PlayerArch from "./PlayerArch"

	let countDir:boolean = false;
	let activePlayer:number = 0;
	let currentID = 0;
	let examplePlayer = new PlayerArch(currentID, "Player 1", 60, "FFF");
	
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

</script>
	<div class="container">
		<AddPlayer on:addplayer={addPlayer}/>
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