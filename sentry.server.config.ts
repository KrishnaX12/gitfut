// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Errors only — see instrumentation-client.ts for why tracing and logs are off.
Sentry.init({
  dsn: "https://14c8af2b54fe4787a5064b60111a06d4@glitchtip.gitfut.com/1",
  tracesSampleRate: 0,
});
