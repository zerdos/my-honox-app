import { useState, useEffect } from 'hono/jsx'

export default (props: {start?: number, storeName?: string })  => {
  
  const [count, setCount] = useState(0 ||  props.start as number)

  useEffect(() => {

    console.log('useEffect', count);
    if (typeof window === 'undefined') return;

    cookieStore.set(props.storeName, count.toString());

  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1 )}>Decrement</button>
      
    </div>
  )
}