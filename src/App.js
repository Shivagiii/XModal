import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);
  const [data,setData] =useState({
    username:'',
    email:'',
    nub:'',
    date:''
  })
  
  function handleChange(e){
    setData({
      ...data,
      [e.target.name]:e.target.value
    })

  }

  function handleSubmit(e){
    e.preventDefault();
    const d = new Date();
    const dd=new Date(`${data.date}`);
    console.log(data.nub.length);
    if(!data.email.includes('@'))
    alert('Invalid email')
    else if(data.nub.length<10)
    alert('Invalid phone number. Please enter a 10-digit phone number.')
    else if(d<dd)
    alert('Invalid date of birth.Date of birth cannot be in future.')
  else{
    setData({
      username:'',
      email:'',
      nub:'',
      date:''
    })
  }



  }
var modal;
useEffect(() =>
{ modal = document.getElementById("myModal");
}
)

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button id="myBtn" onClick={() => modal.style.display = "block"} >Open Form</button>
      
        <div className="modal " id="myModal" >
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h1>Form Details</h1>
              <label for="username">Username:</label>
              <input required id="username" type="text" onChange={handleChange} value={data.username} name="username"/>
              <label for="email">Email Address:</label>
              <input required id="email" type="text" onChange={handleChange} value={data.email} name="email"/>
              <label for="phone">Phone Number:</label>
              <input required id="phone" type="number" onChange={handleChange} value={data.nub} name="nub"/>
              <label for="dob">Date Of Birth:</label>
              <input required id="dob" type="date" onChange={handleChange} value={data.date} name="date"/>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      
    </div>
  );
}

export default App;
