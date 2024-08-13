import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import SendingProps from './components/SendingProps'
import UserForm from './components/UserForm'

function App() {

  // function noChange(){
  //   setCounter((c)=>c+1);
  //   setCounter((c)=>c-1);
  //   console.log("nothing changed")
  // }

  // const [counter, setCounter] = useState(0);
    
  // useEffect(() => {
  //   document.title = `You clicked ${counter} times`;
  // }, [counter]);

    return (
    	<Router>
        	<div>
            	<nav>
                	<ul>
                    	<li>
                        	<Link to="/">Home</Link>
                          </li>
                    	<li>
                        	<Link to="/about">About</Link>
                    	</li>
                	</ul>
            	</nav>
            	<Routes>
                	<Route path="/" element={<Home />} />
                	<Route path="/about" element={<About />} />
            	</Routes>
        	</div>
    	</Router>
	);

}

export default App
