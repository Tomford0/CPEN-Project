import React from 'react'
import './Dashboard.css'

function DashBoard() {
  return (
    <div className='dash-container'>
        <div className='img-box'>
          <h1></h1>
        </div>
        <div className='tabs'>
          <div className='tab-1 item'>
            <h1>Current Courses</h1>
            <button className='btn'>Check Course Status</button>
          </div>
          <div className='tab-2 item'>
            <h1>Incoming Assignments</h1>
            <button className='btn'>Lectures to course assignments</button>
            <button className='btn'>Lectures to T.A assignments</button>
          </div>
          <div className='tab-3 item'>
            <h1>Incoming Examination</h1>
            <button className='btn'>Date for Examinations</button>
          </div>
        </div>
        <div className='tabs'>
        <div className='tab-1 item'>
          <h1>Announcememnt</h1>
          <button className='btn'>No current announcememnt</button>
        </div>
          <div className='tab-2 item'>
            <h1>Resources</h1>
            <button  className='btn'>Course Materials</button><br />
            <button className='btn'>Shared Resources</button>
          </div>
        </div>
    </div>
  )
}

export default DashBoard