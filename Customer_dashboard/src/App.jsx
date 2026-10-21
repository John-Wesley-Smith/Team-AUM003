import { useRef, useState } from "react"
import "./App.css"
import { data } from "./assets/data"

export function App() {

  const[inputText, setInputText] = useState('');
  const customerRef = useRef();

  function searchById() {
    return(
      <div className="customer-data-container">
            {data.map((items) => {
            return(
              (items.name === inputText) &&(
             <div key={items.id} className="customer-data">
              <p>{items.id}</p>
              <p>{items.name}</p>
              <p>{items.contact}</p>
              <p>{items.request}</p>
              <p>{items.note}</p>
            </div> 
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
          <input type="text" onChange={inputTextsaver}/>
          <button className="search-btn" onClick={searchById}>Search</button>        
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

          <div className="customer-data-container">
            {data.map((items) => {
            return(
             <div key={items.id} className="customer-data">
              <p>{items.id}</p>
              <p>{items.name}</p>
              <p>{items.contact}</p>
              <p>{items.request}</p>
              <p>{items.note}</p>
            </div> 
            )
          })
          } 
      
          </div>                    
        </div>
      </div>
    </>
  )
}