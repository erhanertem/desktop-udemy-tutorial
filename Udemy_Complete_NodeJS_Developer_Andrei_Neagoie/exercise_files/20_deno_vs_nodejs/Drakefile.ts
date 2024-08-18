import { desc, run, sh, task } from "https://deno.land/x/drake@v1.7.0/mod.ts";

desc("Minimal Drake task");
task("hello", [], async function () {
  console.log("Hello from Drake!");
  await sh("deno run --allow-env main.ts");
});

run();
