import React, { useState, useEffect } from "react";
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Confirmation from './components/Confirmation';
import OrderForm from './components/OrderForm';
// import Home from './components/Home';
import photo from './Pizza.jpg';


const initialFormValues = {
  name: '',
  size: '',
  special: '',
  bacon: false,
  pepperoni: false,
  spinach: false,
  jalapeno: false,
  cheese: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const initialPizza = []
const initialDisabled = true

const App = () => {

const [pizza, setPizza] = useState(initialPizza)          
const [formValues, setFormValues] = useState(initialFormValues) 
const [formErrors, setFormErrors] = useState(initialFormErrors) 
const [disabled, setDisabled] = useState(initialDisabled) 

const getPizza = () => {
  axios.get('https://reqres.in/api/orders')
    .then(resp => {
      setPizza(resp.data);
    }).catch(err => console.log(err));
}

const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
    .then(resp => {
      setPizza([ resp.data, ...pizza ])
    }).catch(err => console.log(err))
    .finally(() => setFormValues(initialFormValues))
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value 
  })
}

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    special: formValues.special,
    toppings: ['bacon', 'pepperoni', 'spinach', 'jalapeno'].filter(topping => !!formValues[topping])
  }
  postNewPizza(newPizza);
}

useEffect(() => {
  getPizza()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


  return (
    <div className='container'>
      <div className='logo-header'>
        <img src={photo} />
      </div>
      <header><h1>Lambda Eats</h1></header>

      <OrderForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />


    </div>
  )}
export default App


