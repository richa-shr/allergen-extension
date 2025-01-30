import { useState ,useEffect} from "react";
import axios from 'axios';
const App=()=>{
   const[allergens,setallergen]=useState([]);
   const[newallergen,setnew]=useState('');
   useEffect(()=>{
     const fetchit=async()=>{
      try {
        const response = await axios.get('http://localhost:3000/api/allergens');
        console.log(response)
        setallergen(response.data.allergens);
    } catch (error) {
        console.error('Error fetching allergens', error);
    }
};
fetchit();
     
   },[])
   const saveAllergens=async()=>{
     await axios.post('http://localhost:3000/api/allergens',{
       allergens:newallergen.split(',')
     },{
       withCredentials:true
     });
     const response = await axios.get('http://localhost:3000/api/allergens');
        setallergen(response.data.allergens);

   }
   return (<div>
     <h1>Allergen Extension</h1>
     <div>
       <input type='text' value={newallergen} onChange={(e)=>setnew(e.target.value)} placeholder="Enter allergens comma seperated"/>
       <button onClick={saveAllergens}>Save</button>
     </div>
     <h2>Saved Allergens</h2>
     <ul>
       {allergens.map((a)=>(
         <li>{a.name}</li>
       ))}
     </ul>
   </div>)
}
export default App