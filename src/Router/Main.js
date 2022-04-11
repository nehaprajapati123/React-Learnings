import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Error from './Error';

function Main() {

  return (

    <>

      <Router>
        <nav>
          <Link to="/home">Home</Link>  <br />
          <Link to="/about">about</Link><br />
          <Link to="/profile">profile</Link><br />
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />


        </Routes>

        <footer>Footer</footer>
      </Router>

    </>


  )
}

export default Main;




// 1. install react router dom
// 2. we we import BrowserRouter for routing and providing our code some wrapers like....
// 3. the whole code will be wraped by router links and routes 
// 4. we use link becos it supports routing  <a> is does not support routing, links for link of that file
// 5. to us as same href for making a link for component
// 6. routes use for wrapping all my paths, switch used before route, paths can also use without links
// 7. in element we can also write the whole html code in place of writing component