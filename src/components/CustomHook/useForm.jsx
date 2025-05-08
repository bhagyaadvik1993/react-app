import { useState } from 'react';

// Custom hook for managing form state and validation
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues); // State to store form values
  const [errors, setErrors] = useState({}); // State to store validation errors

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!values.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!values.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email address is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
