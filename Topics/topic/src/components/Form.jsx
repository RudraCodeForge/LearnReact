import '../App.css'
const Form =()=>{
  return(
    <div className='container'>
      <h1 className='text-center'>USING FORM</h1>
      <h3 className='First'>State Management : </h3>
      <p>Every input's state stored in a component's state.</p>
      <h3 className='First'>Handling Changes : </h3>
      <p>Use onChange to detect input changes.</p>
      <h3 className='First'>Submission : </h3>
      <p>Utilize onSubmit for form submit and use prevendefault event.preventDefault()</p>
      <h3 className='First'>Validation : </h3>
      <p>Implement custom Validation aur use third party library.</p>
    </div>
  )
}
export default Form;