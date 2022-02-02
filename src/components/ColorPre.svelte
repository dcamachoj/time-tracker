<script lang="ts">
  const colorMap = {
    blue: "hsl(246, 80%, 60%)",
    work: "hsl(15, 100%, 70%)",
    play: "hsl(195, 74%, 62%)",
    study: "hsl(348, 100%, 68%)",
    exercise: "hsl(145, 58%, 55%)",
    social: "hsl(264, 64%, 52%)",
    "self-care": "hsl(43, 84%, 65%)",
    darker: "hsl(226, 43%, 10%)",
    dark: "hsl(235, 46%, 20%)",
    desaturated: "hsl(235, 45%, 61%)",
    pale: "hsl(236, 100%, 87%)",
  };

  export let onColor: (key: string, val: string) => string;

  $: value = Object.entries(colorMap)
    .map(([key, val]) => onColor(key, val))
    .join("\n");
</script>

<textarea class="colors" readonly {value} />

<style>
  .colors {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
