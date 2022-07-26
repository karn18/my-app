<script>
  import { getContext } from "svelte";
  import { user } from "@helpers/store";

  export let color;

  // const { username } = getContext("data");
  // let { username } = get($user);
  console.log($user);

  function backgroundColor (color) {
    switch(color) {
      case "red":
        return "bg-red-400";
      case "yellow":
        return "bg-yellow-400";
      default:
        return "bg-green-500";
    }
  }
</script>

<div class="rounded-lg {backgroundColor(color)} p-4">
  {$user.username}
</div>