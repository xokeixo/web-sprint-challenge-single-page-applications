import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(3, 'Name has to be 3 characters or more!'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Pizza size is required!')
        .required('Pizza size is required!'),
    special: yup
        .string()
        .trim(),
    bacon: yup.boolean(),
    spinach: yup.boolean(),
    pepperoni: yup.boolean(),
    jalapeno: yup.boolean(),
    cheese: yup.boolean(),
})

export default formSchema;