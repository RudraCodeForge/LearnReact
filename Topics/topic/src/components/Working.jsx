import '../App.css'
const Working = () =>{
  return(
    <div className="container">
      <h1 className="text-center">HOW REACT WORKS</h1>
      <h3 className="First">ROOT COMPONENT</h3>
      <ol>
        <li>The App is tha main or root component in the react application.</li>
        <li>It is the starting point of react component tree.</li>
      </ol>
      <img className="propsimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTe1eVk2-l3BTupqlVVVmthojfAsF1hqTsbWz7Eb_ZmqA93GPj3NNFX48&s=10" alt="root component"/>"
      <h3 className="First">VIRTUAL DOM</h3>
      <ol>
        <li>React create an in-memory structure is called react DOM.</li>
        <li>Different from actual browser DOM.</li>
        <li>It's a lightweight representation where each node stands for a component and it's attributes.</li>
      </ol>
      <h3 className="First">RECONCILIATION PROCESS</h3>
      <ol>
        <li>When component data changes,React update the virtual DOM's state to mirror changes.</li>
        <li>React than compare the current and previous version to the virtual DOM.</li>
        <li>It's identified the specific node that need updated.</li>
        <li>Only these node are updated in the real browser DOM, making it efficient.</li>
      </ol>
    </div>
  )
}
export default Working