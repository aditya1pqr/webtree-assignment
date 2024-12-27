import { useEffect, useState } from "react"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  
  const [users,setUser]=useState("");
  useEffect(()=>{
    fetch(" https://randomuser.me/api/?page=1&results=1&seed=abc").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp.results[0].name.first)
        setUser(resp)
      })
    })
  },[])

  return (
    <>
    <div >
      <Header />
      <h1 className="ml-[650px] text-5xl">Profiles</h1>
    <Card users={users}/>
    
    <Footer/>
    </div>
    </>
  )
}

export default App
