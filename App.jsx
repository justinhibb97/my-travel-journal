import React from "react"
import Navbar from "./components/Navbar"
import Poi from "./components/Poi"
import travelData from "./data"

export default function App() {
  const travelElements = travelData.map(poi => {
    return (
      <Poi
        key={poi.id}
        {...poi}
      />
    )
  })
  return (
    <div className="container">
      <Navbar />
      <section className="poi--list">
        {travelElements}
      </section>
    </div>
  )
}
