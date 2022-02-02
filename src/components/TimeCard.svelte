<script lang="ts">
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

<div class="card bg-{timeData.name} main-radius type-{timeData.name}">
  <div class="content main-radius bg-dark">
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
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    padding-bottom: 0.8rem;
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
  }
  .type-title {
    flex: 1;
  }
  .type-work {
    background-image: url(/images/icon-work.svg);
  }
  .type-play {
    background-image: url(/images/icon-play.svg);
  }
  .type-study {
    background-image: url(/images/icon-study.svg);
  }
  .type-exercise {
    background-image: url(/images/icon-exercise.svg);
  }
  .type-social {
    background-image: url(/images/icon-social.svg);
  }
  .type-self-care {
    background-image: url(/images/icon-self-care.svg);
  }
</style>
