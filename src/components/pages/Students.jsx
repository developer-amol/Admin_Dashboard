import React from 'react'
import App from "../BarChart/Index"
import PieChart from '../BarChart/piechart'
export default function Students() {
  return (
    <>
    {/* Main content goes here */}
    <div className=" p-1 w-screen h-screen py-2">
    {/* Main content goes here */}
      <div className="container grid grid-cols-12 gap-3">
        <div className="col-span-9">
          <App />
        </div>
        <div className="col-span-3">
          <PieChart />
        </div>
      </div>
    </div>
    </>
  )
}
