import Child from './Child'
const Parant = () =>{
  const HandleClick = () =>{
    alert("Child pass the response to parent");
  }
  const SubmitHandler = (FormData)=>{
    if(FormData.toLowerCase() ==="pooja" || FormData.toLowerCase() === "vidhi")
    {
      alert(`${FormData} I LOVE YOU INFINITELY 💕💕❤️❤️😘😘`)
    }
    else{
      alert(`${FormData} Ram Ram 🙏🙏`);
    }
    
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