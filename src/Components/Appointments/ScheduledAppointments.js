import React from 'react'
import "./.css";


function ScheduledAppointments() {
  return (
    <div className='app-card'>
        <div className='patient-info'>
            <div className='patient-pp'>
                <img></img>
            </div>
            <div className='patient-name'>
                <p>John Doe</p>
                <p>john.doe@mail.com</p>
            </div>
        </div>

        <div className='app-date'>
            <p className='time'>10:00 AM - 10:30 AM</p>
            <p className='day'>Wed</p>
            <p className='date'>28-Nov-2023</p>
        </div>


        <div className='doctor-info'>
            <div className='doctor-pp'>
                <img></img>
            </div>
            <div className='doctor-name'>
                <p>Dr. Nat Ellis</p>
                <p>nat.ellis@mail.com</p>
            </div>
        </div>


    </div>
  )
}

export default ScheduledAppointments