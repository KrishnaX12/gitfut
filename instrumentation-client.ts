// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Errors only. The backend is self-hosted GlitchTip, which ingests exceptions
// but not session replays or logs — those would be bundle weight and traffic to
// our own box for data nothing can read. The DSN is public by design (it only
// permits writing events), so hardcoding it also keeps the Docker build free of
// a NEXT_PUBLIC_ build arg.
Sentry.init({
  dsn: "https://14c8af2b54fe4787a5064b60111a06d4@glitchtip.gitfut.com/1",

  tracesSampleRate: 0,

  // Browser noise that never means anything: extension scripts, and the
  // ResizeObserver warnings Chrome raises as errors.
  ignoreErrors: [
    "ResizeObserver loop limit exceeded",
    "ResizeObserver loop completed with undelivered notifications",
    "Non-Error promise rejection captured",
  ],
  denyUrls: [/extensions\//i, /^chrome(-extension)?:\/\//i, /^moz-extension:\/\//i],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
