import { InertiaLink } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default function Products({products}) {
  return (
    <div className='column'>
      <h1>Products</h1>

      <button>
        <InertiaLink href="/products/new">New product</InertiaLink>
      </button>

      <div id="products">
        {products.map((product, index) => (
          <div className='product' key={product.name + index}>
            <div className='product_data'>
              <div>
                Name: <InertiaLink href={`/products/${product.id}`}>{product.name}</InertiaLink>
              </div>

              <span>Category: {product.category}</span>
            </div>

            <button onClick={() => Inertia.delete(`/products/${product.id}`)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
