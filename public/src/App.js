import "./App.css";
// import FlowChart from "./components/Flowchart/FlowChart";

import { PatientVisualizer } from "fhir-visualizers";
import React, { useState, useEffect } from "react";

function App(props) {
  const client = props.client;
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    client.patient.read().then((patient) => {
      console.log("patient info:");
      console.log(patient);
      setPatient(patient);
    });
  });

  // return <div className="App">{/* <FlowChart></FlowChart> */}</div>;

  return (
    <div id="app">
      {patient ? <PatientVisualizer patient={patient} /> : <h1>Loading</h1>}
    </div>
  );
}

export default App;
