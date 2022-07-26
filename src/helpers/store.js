import { writable } from "svelte/store";
// create store
export let user = writable({ username: "karn" });
