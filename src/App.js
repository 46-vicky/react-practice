import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Form from './useReducer2/Form'
import RootLayout from './layout/RootLayout';
import Home from './component/Home';
import Products from './component/Products';
import Carrer from './component/Carrer';
import About from './component/About';
import Login from './component/Login';
import CreatePost from './component/CreatePost';
import EditPost from './component/EditPost';
// import LearnRedux from './LearnRedux';
// import LoginContextProvider from './context/LoginContextProvider';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/carrer' element={<Carrer />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/editPost/:id' element={<EditPost />}/>
        <Route path='/create-post' element={<CreatePost />}/>
    </Route>
  ))
  return (
   <RouterProvider router={router}></RouterProvider>
  // <div>
  //   {/* <LoginContextProvider>
  //     <ParentEle/>
  //   </LoginContextProvider> */}
  //   {/* <LearnRedux /> */}
  //   {/* <Form /> */}
  // </div>
  );
}

export default App;
