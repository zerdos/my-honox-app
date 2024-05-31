import { Hono, Context } from 'hono'
import Counter from '../../islands/counter'

// const app = new Hono()

// matches `/about/:name`
// app.get('/:name', (c) => {
//   const name = c.req.param('name')
//   return c.json({
//     'your name is': name,
//   })
// })

export default function Home(_c: Context) {

    return <><h1>Welcome!</h1>
    <Counter storeName='index' />
    </>
  }

// export default app