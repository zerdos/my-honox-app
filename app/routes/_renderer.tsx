// app/routes/_renderer.tsx
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Script src='/app/client.ts' />
      </head>
      <body>{children}</body>
    </html>
  )
})
