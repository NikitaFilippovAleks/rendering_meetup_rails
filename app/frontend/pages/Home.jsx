import { InertiaLink } from '@inertiajs/inertia-react'

export default function Home({name}) {
  return (
    <div className='column'>
      <h1>Inertia.js</h1>
      <InertiaLink href="/products">Products</InertiaLink>
      <InertiaLink href="/counter">Counter</InertiaLink>
    </div>
  )
}
