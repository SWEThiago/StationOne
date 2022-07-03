import { gql, useQuery } from "@apollo/client";
import { subscribe } from "graphql";
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Food from "./pages/Food";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";


const GET_SUBSCRIBERS_QUERY = gql`
query {
  subscribers{
    name
    email
  }  
}
`


function App() {
  const { data } = useQuery(GET_SUBSCRIBERS_QUERY)
  console.log(data);

  return (
      <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/food" element={<Food />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
      </BrowserRouter>
    
  )
}

export default App
