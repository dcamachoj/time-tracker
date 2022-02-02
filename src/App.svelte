<script lang="ts">
  import EmployeeCard from "./components/EmployeeCard.svelte";
  import { IsMobile, setScreenWidth } from "./components/stores";
  import TimeCard from "./components/TimeCard.svelte";
  import { jeremy } from "./data";

  console.log("jeremy", jeremy);
  let active: string = "daily";
  let windowWidth: number = window.outerWidth;

  $: setScreenWidth(windowWidth);

  // var(--color-blue, hsl(246, 80%, 60%));
  // var(--color-work, hsl(15, 100%, 70%));
  // var(--color-play, hsl(195, 74%, 62%));
  // var(--color-study, hsl(348, 100%, 68%));
  // var(--color-exercise, hsl(145, 58%, 55%));
  // var(--color-social, hsl(264, 64%, 52%));
  // var(--color-self-care, hsl(43, 84%, 65%));
  // var(--color-darker, hsl(226, 43%, 10%));
  // var(--color-dark, hsl(235, 46%, 20%));
  // var(--color-desaturated, hsl(235, 45%, 61%));
  // var(--color-pale, hsl(236, 100%, 87%));

  // const  onColor = (key: string, val: string) => `// var(--color-${key}, ${val});`;
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
