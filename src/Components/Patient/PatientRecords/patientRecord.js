import React from 'react'
import '../PatientRecords/patientRecrodStyle.css'
import Profile from '../../../Images/doctor svg.svg'

function patientRecord() {
  return (

    <div className='main-section'>
      <h3>Patient Mangement</h3>


    <div className='main-card'>
      <div className='user-info'>
        <div className='user-pic'>

          <img src={Profile} alt=''/>
          

        </div>
        <div className='user-name'>
        <p className='name'>John Doe</p>
          <p className='email'>john.doe@mail.com</p>

        </div>
      </div>


      <div className='buttons'>
        <button className='delete'>Delete Record</button>
        <button className='active'>Active/Deactive</button>
        <button className='view-profile'>View Profile</button>

      </div>
    </div>


    <div className='main-card'>
      <div className='user-info'>
        <div className='user-pic'>

          <img src={Profile} alt=''/>
          

        </div>
        <div className='user-name'>
        <p className='name'>John Doe</p>
          <p className='email'>john.doe@mail.com</p>

        </div>
      </div>


      <div className='buttons'>
        <button className='delete'>Delete Record</button>
        <button className='active'>Active/Deactive</button>
        <button className='view-profile'>View Profile</button>

      </div>
    </div>


    <div className='main-card'>
      <div className='user-info'>
        <div className='user-pic'>

          <img src={Profile} alt=''/>
          

        </div>
        <div className='user-name'>
        <p className='name'>John Doe</p>
          <p className='email'>john.doe@mail.com</p>

        </div>
      </div>


      <div className='buttons'>
        <button className='delete'>Delete Record</button>
        <button className='active'>Active/Deactive</button>
        <button className='view-profile'>View Profile</button>

      </div>
    </div>


    <div className='main-card'>
      <div className='user-info'>
        <div className='user-pic'>

          <img src={Profile} alt=''/>
          

        </div>
        <div className='user-name'>
        <p className='name'>John Doe</p>
          <p className='email'>john.doe@mail.com</p>

        </div>
      </div>


      <div className='buttons'>
        <button className='delete'>Delete Record</button>
        <button className='active'>Active/Deactive</button>
        <button className='view-profile'>View Profile</button>

      </div>
    </div>


    <div className='main-card'>
      <div className='user-info'>
        <div className='user-pic'>

          <img src={Profile} alt=''/>
          

        </div>
        <div className='user-name'>
        <p className='name'>John Doe</p>
          <p className='email'>john.doe@mail.com</p>

        </div>
      </div>


      <div className='buttons'>
        <button className='delete'>Delete Record</button>
        <button className='active'>Active/Deactive</button>
        <button className='view-profile'>View Profile</button>

      </div>
    </div>

    </div>




    )
}

export default patientRecord