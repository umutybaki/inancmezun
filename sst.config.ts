/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "inancmezun",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: { region: "us-east-1" },
      },
    }
  },
  async run() {
    const site = new sst.aws.StaticSite("Web", {
      build: {
        command: "pnpm build",
        output: "out",
      },
      // domain: "inancmezun.org", // uncomment when DNS is on Route 53
      transform: {
        distribution: {
          priceClass: "PriceClass_100", // US + Europe only — Turkish users hit Frankfurt/Paris
        },
      },
    })

    return { url: site.url }
  },
})
