import React from 'react'

export default function OrderForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
        <h1>Pizza</h1>

       
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.special}</div>
          <div>{errors.topping}</div>
        </div>

      <div className='form-group inputs'>
        <h4>Order Now!</h4>
        <label>Name
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Size
          <select name='size-menu' onChange={onChange} value={values.size}>
            <option value=''>Select a Size</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>  
        </label>

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        <label>Bacon
          <input
            type='checkbox'
            name='bacon'
            onChange={onChange}
            checked={values.bacon}
            />
        </label>

        <label>Pepperoni
          <input
              type='checkbox'
              name='pepperoni'
              onChange={onChange}
              checked={values.pepperoni}
              />
        </label>

        <label>Sausage
          <input
              type='checkbox'
              name='sausage'
              onChange={onChange}
              checked={values.sausage}
              />
        </label>

        <label>Jalapeno
          <input
              type='checkbox'
              name='jalapeno'
              onChange={onChange}
              checked={values.jalapeno}
              />
        </label>
      </div>
    </div>
</form>
  )
}
