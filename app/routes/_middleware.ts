
// app/routes/_middleware.ts
import { createRoute } from 'honox/factory'
import { secureHeaders, NONCE } from 'hono/secure-headers'

secureHeaders({
  contentSecurityPolicy: (import.meta as unknown as any).env.PROD
    ? {
        scriptSrc: [NONCE],
      }
    : undefined,
})