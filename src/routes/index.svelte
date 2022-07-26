<script>
  import { setContext } from "svelte";
  import { user } from "@helpers/store";
  import Box from "@components/box.svelte";
  import Button, { changeColor } from "@components/button.svelte";
  let count = 0;

  // set data to context
  const data = { username: "karn" };
  setContext("data", data);

  // Using store
  user.set({ username: "karn" })

  function increamentCount () {
    count++;
    // setContext("data", { username: "demo" })
    $user = { username: "demo" };
  }
</script>

<div class="w-3/5 mx-auto px-4">
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

  <button class="rounded-lg bg-red-300 text-white px-4 py-2">Hello</button>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div class="text-bold">{count}</div>
  <button class="border border-gray-300 rounded-lg px-4 py-2" on:click="{increamentCount}">+1</button>
  <Button />

  <Box color="yellow" />
</div>