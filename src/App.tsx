import React from "react";
import "./App.css";
import Header from "./Components/Header";
import {BrowserRouter as Router} from 'react-router-dom'
import Routing from "./Config/Routing";
// import {gql,useQuery} from '@apollo/client'

// const GET_SPACEX_DETAILS = gql`
//   query getDetails {
//     launches {
//       launch_success
//       mission_id
//       mission_name
//     }
//   }
// `;

const App: React.FC<{}> = () => {
//   const { loading, error, data } = useQuery(GET_SPACEX_DETAILS);

//   if(loading) return <h1>Loading...</h1>
//   if(error) return <h1>Error...</h1>

//   console.log(data)
  return (
    <div className="App">
     <Router>
       <Header />
       <Routing />
     </Router>
    </div>
  );
};

export default App;
