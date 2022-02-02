<script lang="ts">
  import { IsMobile } from "./stores";

  const titles = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
  };

  export let timeData: TimeData;
  export let active: string;

  $: timeFrame = timeData.timeframes[active] as TimeFrame;

  function hrs(value: number): string {
    return `${value}hr${value === 1 ? "" : "s"}`;
  }
</script>

<div
  class="card main-radius type-{timeData.name}"
  class:is-desktop={!$IsMobile}
>
  <div class="content main-radius">
    <div class="header">
      <div class="type-title">
        {timeData.title}
      </div>
      <div class="menu">
        <img alt="menu" src="/images/icon-ellipsis.svg" />
      </div>
    </div>
    <div class="data">
      <div class="hours font-larger">
        {hrs(timeFrame.current)}
      </div>
      <div class="last">
        Last {titles[active]} - {hrs(timeFrame.previous)}
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    padding-top: 2.7rem;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: top;
  }
  .content {
    background-color: var(--color-dark, hsl(235, 46%, 20%));
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .header {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    padding-bottom: 0.8rem;
  }
  .menu {
    cursor: pointer;
    color: var(--color-pale, hsl(236, 100%, 87%));
  }
  .data {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    padding-top: 0.1rem;
    padding-bottom: 1.5rem;
  }
  .hours {
    flex: 1;
  }
  .last {
    font-size: 16px;
    color: var(--color-pale, hsl(236, 100%, 87%));
  }
  .type-title {
    flex: 1;
  }
  .type-work {
    background-color: var(--color-work, hsl(15, 100%, 70%));
    background-image: url(/images/icon-work.svg);
    grid-area: work;
  }

  .type-play {
    background-color: var(--color-play, hsl(195, 74%, 62%));
    background-image: url(/images/icon-play.svg);
    grid-area: play;
  }
  .type-study {
    background-color: var(--color-study, hsl(348, 100%, 68%));
    background-image: url(/images/icon-study.svg);
    grid-area: study;
  }
  .type-exercise {
    background-color: var(--color-exercise, hsl(145, 58%, 55%));
    background-image: url(/images/icon-exercise.svg);
    grid-area: exercise;
  }
  .type-social {
    background-color: var(--color-social, hsl(264, 64%, 52%));
    background-image: url(/images/icon-social.svg);
    grid-area: social;
  }
  .type-self-care {
    background-color: var(--color-self-care, hsl(43, 84%, 65%));
    background-image: url(/images/icon-self-care.svg);
    grid-area: self-care;
  }

  .card.is-desktop {
    min-width: 185px;
    padding-top: 2.5rem;
  }
  .card.is-desktop .header {
    padding-bottom: 1.2rem;
  }

  .card.is-desktop .data {
    flex-direction: column;
    align-items: flex-start;
  }
  .card.is-desktop .hours {
    margin-bottom: 0.5rem;
  }
</style>
