import Coronelco from './Coronelco'
import { Routes, Route } from "react-router-dom"
import Coronelco from "./Coronelco.jsx"
import PromLanzamiento from "./PromLanzamiento.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Coronelco />} />
      <Route path="/promlanzamiento" element={<PromLanzamiento />} />
    </Routes>
  )
  
export default function App() {
  return <Coronelco />
}


