import { useForm } from 'react-hook-form'

const RegisterScreen = () => {
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch')
      return
    }
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          className='form-input'
          {...register('firstName')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Confirm Password</label>
        <input
          type='password'
          className='form-input'
          {...register('confirmPassword')}
          required
        />
      </div>
      <button type='submit' className='button'>
        Login
      </button>
    </form>
  )
}

export default RegisterScreen
