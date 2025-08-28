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
      <img className="propsimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTe1eVk2-l3BTupqlVVVmthojfAsF1hqTsbWz7Eb_ZmqA93GPj3NNFX48&s=10" alt="root component"/>
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
      <h3 className="First">REACT AND REACT-DOM</h3>
      <ol>
        <li>The actual updating in browser's DOM isn't done by react itself.</li>
        <li>Its handle by campanion library called react-dom</li>
      </ol>
      <h3 className="First">ROOT ELEMENT</h3>
      <ol>
        <li>The root div work like as a container for a react app.</li>
        <li>The script tag where the react app start executing.</li>
        <li>If you check the main.tsx. The component tree is rendered inside this root element.</li>
      </ol>
      <h3 className="First">STRICT MODE COMPONENT</h3>
      <ol>
        <li>It is a special component in react.</li>
        <li>Doesn't have vasiual representation.</li>
        <li>It's purpose to detect the potential issue in your react app.</li>
      </ol>
      <h3 className="First">PLATFORM INDEPENDENT</h3>
      <ol>
        <li>React's design allow it to be a agnostic</li>
        <li>While react-dom helps bulid web UI using react, ReactNative can used to be craft mobile app UI.</li>
      </ol>
    </div>
  )
}
export default Working