<script lang="ts">
  import { IsDesktop, IsMobile } from "./stores";

  export let employee: Employee;
  export let selected: string;

  const tabs: { name: string; text: string }[] = [
    "Daily",
    "Weekly",
    "Monthly",
  ].map((text) => ({ name: text.toLowerCase(), text }));

  function onSelect(value: string): () => void {
    return () => {
      selected = value;
    };
  }
</script>

<div
  class="employee bg-dark main-radius flex-col"
  class:is-desktop={!$IsMobile}
>
  <div class="profile main-radius flex">
    <div class="image">
      <img alt="profile" src="/images/image-{employee.userName}.png" />
    </div>
    <div class="info">
      <div class="report-for">Report for</div>
      <div class="display-name font-larger">
        {employee.displayName}
      </div>
    </div>
  </div>
  <dic class="tabs flex">
    {#each tabs as tab (tab.name)}
      <button
        class="tab"
        class:is-active={selected === tab.name}
        on:click={onSelect(tab.name)}
      >
        {tab.text}
      </button>
    {/each}
  </dic>
</div>

<style>
  .employee {
    margin: 0;
    margin-top: 4rem;
    grid-area: employee;
  }
  .profile {
    background-color: #5746ea;
    padding: 2rem;
    padding-right: 0.5rem;
    padding-bottom: 1.2rem;
    flex-direction: row;
  }
  .image > img {
    width: 54px;
    height: 54px;
    border: 4px solid white;
    border-radius: 50%;
  }
  .info {
    margin: 0.7rem;
    margin-right: 0;
  }
  .tabs {
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem;
  }
  .tab {
    border: none;
    display: block;
    background: transparent;
    color: #444886;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    cursor: pointer;
  }
  .tab.is-active {
    color: white;
  }
  .employee.is-desktop {
    margin: 0;
    min-width: 185px;
  }
  .employee.is-desktop .profile {
    flex-direction: column;
    padding: 1.5rem;
    padding-right: 0.5rem;
    padding-bottom: 1.2rem;
  }
  .employee.is-desktop .tabs {
    flex-direction: column;
    align-items: flex-start;
  }
  .employee.is-desktop .info {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }
</style>
