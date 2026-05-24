import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Effect from "effect/Effect";

export default Alchemy.Stack(
  "DevChris",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const site = yield* Cloudflare.StaticSite("Website", {
      command: "bun run build",
      outdir: "dist",
      main: "./src/worker.ts",
      assetsConfig: {
        notFoundHandling: "single-page-application",
      },
      domain: "devchris.me",
    });

    return {
      url: site.url,
    };
  }),
);
