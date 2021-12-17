import React from 'react'
import '../App.css'

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
    <form id="pizza-form" onSubmit={onSubmit}>
    <h1> Pizza</h1>
    <div id="name-input">{errors.name}</div>
    <label className="name"><b>Name</b></label>
                <br/>
    <input type='text' name='name'
        onChange={onChange}
        value={values.name} />
            <br/>
    <label className="size"><b>Size</b></label>
            <br/>
    <select id="size-dropdown"
        name="size" onChange={onChange} value={values.size}>
        <option value=''> - select a Size -</option>
        <option value="small">
            Small
        </option>
        <option value="medium">
            Medium
        </option>
        <option value="large">
            Large
        </option>
    </select>
            <br/>
    <label><b>Toppings</b></label>
            <br/>
    <label>Bacon
        <input name="bacon" type="checkbox" checked={values.bacon} onChange={onChange} />
            <br/>
    </label>
    <label>Peperoni
        <input name="pepperoni" type="checkbox" checked={values.pepperoni} onChange={onChange} />
    </label>
            <br/>
    <label>Spinach
        <input name="spinach" type="checkbox" checked={values.spinach} onChange={onChange} />
            <br/>
    </label>
    <label>Jalapeno
        <input name="jalapeno" type="checkbox" checked={values.jalapeno} onChange={onChange} />
    </label>
                <br/>
    <label>Cheese
        <input name="jalapeno" type="checkbox" checked={values.jalapeno} onChange={onChange} />
    </label>
                <br/>
    <label className="special"><b>Special Selection</b></label>
                <br/>
    <input id="special-text" type="text" name="special"
        onChange={onChange} value={values.special} />
                <br/>
    <button id="submitBtn" disabled={disabled}>Order</button>


</form>
  )
}
