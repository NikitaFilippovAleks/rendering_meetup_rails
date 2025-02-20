import { InertiaLink } from '@inertiajs/inertia-react'

export default function ProductsShow({product}) {
  return (
    <div className='column'>
      <h1>{product.name}</h1>

      <InertiaLink href="/products">Back to products</InertiaLink>
    </div>
  )
}
