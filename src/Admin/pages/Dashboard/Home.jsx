import React, { useState } from 'react'
import AdminDashboard from '../../components/AdminDashboard.jsx'
import { Chart } from 'chart.js'
import  BarChart  from './components/BarChart.jsx'
import {UserData} from './Data.jsx'
import BarGraph from './BarGraph.jsx'
import LineGraph from './LineGraph.jsx'
import { TableOne } from './TableOne.jsx'

const Home = () => {
  const [userData,setUserData] = useState({
    label: UserData.map((e)=>(
      e.year
    )),
    datasets: [{
      label:"Users Gained",
      data: UserData.map((e)=>(
        e.userGain
      )),
    }]
  })
  return (
    <div>
       <AdminDashboard >
        <div className='flex'>
          <BarGraph />
          {/* <LineGraph /> */}
          </div>
          <TableOne />
       </AdminDashboard>
    </div>
  )
}

export default Home
