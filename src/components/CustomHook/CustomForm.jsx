import React from 'react'

function CustomForm() {
    const { values, errors, handleSubmit, handleChange } = useForm({ firstName : '', lastName : ''})
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      {errors.firstName && <span>{errors.firstName}</span>}
    </div>

    <div>
      <input
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      {errors.lastName && <span>{errors.lastName}</span>}
    </div>

    <div>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email}</span>}
    </div>

    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
);
}

export default CustomForm