<script lang="ts">
  import EmployeeCard from "./components/EmployeeCard.svelte";
  import { IsMobile, setScreenWidth } from "./components/stores";
  import TimeCard from "./components/TimeCard.svelte";
  import { jeremy } from "./data";

  console.log("jeremy", jeremy);
  let active: string = "daily";
  let windowWidth: number = window.outerWidth;

  $: setScreenWidth(windowWidth);
</script>

<svelte:window bind:outerWidth={windowWidth} />

<div class="app" class:is-desktop={!$IsMobile}>
  <EmployeeCard employee={jeremy} bind:selected={active} />
  {#each jeremy.timeData as timeData (timeData.name)}
    <TimeCard {active} {timeData} />
  {/each}
</div>

<style>
  .app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "employee"
      "work"
      "play"
      "study"
      "exercise"
      "social"
      "self-care";

    column-gap: 1rem;
    row-gap: 1rem;
    padding: 1.5rem;
  }
  .app.is-desktop {
    max-width: 850px;
    grid-area: app;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "employee work     play   study"
      "employee exercise social self-care";
    justify-items: stretch;
    align-items: stretch;
  }
</style>
