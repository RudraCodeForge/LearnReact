import Child from './Child'
const Parant = () =>{
  const HandleClick = () =>{
    alert("Child pass the response to parent");
  }
  const SubmitHandler = (FormData)=>{
    alert(`${FormData} Bhai Ram Ram 🙏🙏`);
  }
  return(
    <>
      <Child 
        HandleClick={HandleClick}
        SubmitHandler={SubmitHandler}
        />
    </>
  )
}
export default Parant