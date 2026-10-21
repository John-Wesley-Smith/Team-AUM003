import "./App.css"
import { data } from "./assets/data"

export function App() {
  console.log(data);
  return (
    <>
      <div className="header-section" >
        <h1>Customer DashBoard</h1>
      </div>
      <div className="Customer-dashboard-container">
        <div>
          <input type="text" />
          <button className="search-btn">Search</button>        
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

          <div className="customer-data">
            {/* {data.map((items) => {
            return(
             <div>
              <h1>Hello</h1>
              <p>customer_id</p>
              <p>name</p>
              <p>Contact</p>
              <p>Request</p>
              <p>notes</p>
            </div> 
            )
          })
          }  */}
      
          </div>
          
          
        </div>
      </div>
    </>
  )
}