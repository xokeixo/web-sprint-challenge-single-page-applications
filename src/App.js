import React, { useState, useEffect } from "react";
import axios from 'axios';
import schema from '../validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  special: '',
  bacon: false,
  pepperoni: false,
  sausage: false,
  jalapeno: false,
}

const initialError = {
  name: '',
  size: '',
  special: '',
}

const initialPizza = []
const initialDisabled = true

const App = () => {

const [pizza, setPizza] = useState(initialPizza)
const [formValues, setFormValues] = useState(initialFormValues)
const [errors, setErrors] = useState(initialError)
const [disabled, setDisabled] = useState(initialDisabled)

const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setPizza([ res.data, ...pizza ])
  }).catch(err => {
    console.log(err)
  }).finally(() => {
    setFormValues(initialFormValues)
  })
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    special: formValues.special.trim(),
    toppings: ['bacon', 'pepperoni', 'sausage', 'jalapeno'].filter(pizz => !!formValues[pizz])
  }
  postNewPizza(newPizza);
}

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
