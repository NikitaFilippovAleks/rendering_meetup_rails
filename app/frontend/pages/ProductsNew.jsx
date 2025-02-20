import { useForm } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'

export default function ProductsNew() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    category: ''
  })

  function submit(e) {
    e.preventDefault()
    Inertia.post('/products', data)
  }

  return (
    <div className='column'>
      <h1>New product</h1>

      <form className='column' onSubmit={submit}>
        <div className='column'>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} name='name' />
          </div>

          <div>
            <label htmlFor='category'>Category:</label>
            <input type="text" value={data.category} onChange={e => setData('category', e.target.value)} name='category' />
          </div>
        </div>

        <div>
          <button type="submit" disabled={processing}>Create</button>
        </div>
      </form>
    </div>
  )
}
