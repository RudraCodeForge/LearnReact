import {ThemeProvider} from './Store/Theme';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

const Context_Api = () =>{
  return(
    <div className="container">
      <h1 className="text-center">CONTEXT API</h1>
      <ThemeProvider>
        <div>
          <Navbar/>
          <Content/>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  )
}
export default Context_Api;