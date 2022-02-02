<script lang="ts">
  const colorMap = {
    blue: "hsl(246, 80%, 60%)",
    "red-work": "hsl(15, 100%, 70%)",
    "blue-play": "hsl(195, 74%, 62%)",
    "red-study": "hsl(348, 100%, 68%)",
    "green-exercise": "hsl(145, 58%, 55%)",
    "violet-social": "hsl(264, 64%, 52%)",
    "orange-care": "hsl(43, 84%, 65%)",
    "blue-darker": "hsl(226, 43%, 10%)",
    "blue-dark": "hsl(235, 46%, 20%)",
    "blue-desaturated": "hsl(235, 45%, 61%)",
    "blue-pale": "hsl(236, 100%, 87%)",
  };
  const colorList = Object.entries(colorMap).map(([key, val]) => ({
    key,
    back: `.back-${key} { background-color: ${val}; }`,
    text: `.text-${key} { color: ${val}; }`,
  }));
</script>

<pre>
  {#each colorList as itm (itm.key)}
    {itm.back}
  {itm.text}
  {/each}
</pre>
