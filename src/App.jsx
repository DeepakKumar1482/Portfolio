import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './Pages/Home.jsx';
// import {Helmet}from 'react-helmet'
function App() {
  return (
    <div>
      {/* <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap"
        />
      </Helmet> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
