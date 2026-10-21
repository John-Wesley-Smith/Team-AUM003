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
          <input type="text" id="one"/>
          <button className="search-btn">Search</button>        
          <button className="filter-btn" >Filter</button>
        </div>
        <div className="customer-summary">
          <div className="customer-fields">
              <p class="id2">customer_id</p>
              <p class="name2">name</p>
              <p class="contact2">Contact</p>
              <p class="request2">Request</p>
              <p class="notes2">notes</p>
          </div>

          <div className="customer-data-container"class="row">
            {data.map((items) => {
            return(
             <div key={items.id} className="customer-data"  >
              {/* <div class="row"> */}
              <p class="id1">{items.id}</p>
              {/* </div> */}
              {/* <div class="row"> */}
              <p class="name1">{items.name}</p>
              {/* </div> */}
              {/* <div class="row"> */}
              <p class="contact1">{items.contact}</p>
              {/* </div> */}
              {/* <div class="row"> */}
              <p class="request1">{items.request}</p>
              {/* </div> */}
              {/* <div class="row"> */}
              <p class="notes1">{items.note}</p>
              {/* </div> */}
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