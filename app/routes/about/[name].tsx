import {Context} from "hono"
import { createRoute } from 'honox/factory'
import { getCookie, setCookie } from 'hono/cookie'
import Counter from '../../islands/counter'

export const POST = createRoute(async (c) => {
  const { name } = await c.req.parseBody<{ name: string }>()
  setCookie(c, 'name', name)
  return c.redirect('/')
})

const counterSaver = async (c: Context) => {
  const name =   await c.req.param('name');
  const counterName = `${name}-counter`;

return (newNum: number)=>setCookie(c, counterName, newNum.toString());

}

export default createRoute( async ( c) => {
 const body =   await c.req.param('name');
  const name = getCookie(c, 'name') ?? 'no name'
  const counter = +(getCookie(c, `${body}-counter`) ?? 1);
  const saveCounter = await counterSaver(c);
  saveCounter(counter+1);


  
  console.log('c', body);



  return c.render(
    <div>
      <h1>Hello {body }, {name}!</h1>
      <Counter start={counter} storeName={`${body}-counter`}/>
      <form method='POST'>
        <input type='text' name='name' placeholder='name' />
        <input type='submit' />
      </form>
    </div>
  )
})