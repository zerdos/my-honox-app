import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children }, c) => {
  return (
    <html lang='en'>
      <head>
        <Script src='/app/client.ts' async nonce={c.get('secureHeadersNonce')} />
      </head>
      <body>{children}</body>
    </html>
  )
})