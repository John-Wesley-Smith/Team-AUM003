import { useEffect, useRef, useState } from "react"
import { Route, Router } from "react-router"
import "./App.css"
import { data } from "./assets/data"

export function App() {

  const[inputText, setInputText] = useState('');

  function DisplayCustomer() {
    // console.log(inputText)
    return(
      <div className="customer-data-container" >
            {data.map((items) => {
            return(
              (inputText === '') ? (
             <div key={items.id} className="customer-data">
              <p>{items.id}</p>
              <p>{items.name}</p>
              <p>{items.contact}</p>
              <p>{items.request}</p>
              <p>{items.note}</p>
            </div> 
              )
            :(
              (inputText === items.id) && (
                <div key={items.id} className="customer-data">
              <p>{items.id}</p>
              <p>{items.name}</p>
              <p>{items.contact}</p>
              <p>{items.request}</p>
              <p>{items.note}</p>
            </div> 
              )
          )
            )
          })
          } 
      
          </div>  
    )
  }

  function inputTextsaver(event){
    setInputText(event.target.value);
  }

  return (
    <>
      <div className="header-section" >
        <h1>Customer DashBoard</h1>
      </div>
      <div className="Customer-dashboard-container">
        <div>
          <input type="text" />
          <button className="search-btn" onChange={DisplayCustomer}>Search by Id</button>        
          <button className="filter-btn" >Filter</button>
        </div>
        <div className="customer-summary">
          <div className="customer-fields">
              <p>customer_id</p>
              <p>name</p>
              <p>Contact</p>
              <p>Request</p>
              <p>notes</p>
          </div>

          <DisplayCustomer />
        </div>
      </div>
    </>
  )
}