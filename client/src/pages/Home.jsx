import React from "react";
import { useState, useEffect } from "react";
import { getTopCountries } from "../utilities/topCountries";
import { useSelector, useDispatch } from "react-redux";
import { getFlightData } from "../store/slice";
import { getTotalFlights } from "../utilities/getTotalFlights";



const Home = () => {
const {flightData}=useSelector((state) => state.mySlice);
// const [time,setTime]=useState(new Date().getTime())
const dispatch=useDispatch();
//   const [flightData, setFlightData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);




//   useEffect(() => {
//     const fetchData = async (url) => {
//       setLoading(true);
//       try {
//         const data = await fetch(url, {
//           headers: {
//             Authorization: "Basic eWFzZW1pbmNhbGlza2FuOkh5ZmNsYXNzMzcu",
//           },
//         });
//         const json = await data.json();
//         console.log(json);
//         //get icao24, origin Country and longtitude and latitude from the states property of json
//         const dataToProcess=json.states.map(state=>[state[0],state[2],state[5],state[6]])
//         setFlightData(dataToProcess);
       
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData(netherlandsFlightURL);
//   }, []);


useEffect(()=>{
    console.log("girdi");
    dispatch(getFlightData());
},[dispatch]);
// const getRealTimeData=()=>{dispatch(getFlightData())};
// // const DataInterval= setInterval(getRealTimeData(),1000*60);
// // return ()=>{
// //     clearInterval(checkInterval);
// // }
 
//   return (
//     <div>
//       <p>The Netherlands Flights</p>
//       {flightData && (
//         <div>
//           <p>{` Number Of Flights Now :${flightData
//             .map(flight=>flight.states).reduce((accumulatedFlights,currentFlight)}`}</p>
//           <h2>Countries:</h2>
//           { 
//    topCountries(flightData).map((country,index)=><p key={index}> {`${country.name} : ${country.value}`}</p>)
//   }
//         </div>
//       )}
//     </div>
//   );
// };
return (
        <div>
          <p>The Netherlands Flights</p>
          {flightData.length>0 && (
            <div>
              <p>{`Number Of Flights :${getTotalFlights(flightData)}`}</p>
              <h2>Countries:</h2>
              { 
       getTopCountries(flightData).map((country,index)=><p key={index}> {`${country.name} : ${country.value}`}</p>)
      }
            </div>
          )}
        </div>
      );

    

}

export default Home;
