<script lang="ts">
  import EmployeeCard from "./components/EmployeeCard.svelte";
  import { setScreenWidth } from "./components/stores";
  import TimeCard from "./components/TimeCard.svelte";
  import { jeremy } from "./data";

  console.log("jeremy", jeremy);
  let active: string = "daily";
  let windowWidth: number = window.outerWidth;

  $: setScreenWidth(windowWidth);
</script>

<svelte:window bind:outerWidth={windowWidth} />

<EmployeeCard employee={jeremy} bind:selected={active} />
{#each jeremy.timeData as timeData (timeData.name)}
  <TimeCard {active} {timeData} />
{/each}
