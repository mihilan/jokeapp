import React, {useState, useEffect} from "react";

const Fetch = ()=>{

  const [joke,setajoke] = useState("")
  const [but,setBut] = useState(false)
  useEffect(()=>{
    const fetchdata = async ()=>{
      const response = await fetch(' https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes')
      const data = await response.json();
      setajoke(`${data.setup} ${data.punchline}`);
    }
    fetchdata();
  },[but])

 return(
   <div>
   <h1>{joke}</h1>
   <button onClick={()=> setBut(!but)} type="button">New Joke</button>
   </div>
 )

}

export default Fetch;
