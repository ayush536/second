import React from 'react'
import { RegistrationContext } from '../Context/RegistrationContext';
import { Navigate } from 'react-router-dom';

export const Form2=()=> {
    const {
        dispatch,
        stateOfResidence,
        address,
        pincode,name,age,
        dateOfbirth,
        handleSubmit
    } = React.useContext(RegistrationContext);

    if(!name || !age || !dateOfbirth){
        return <Navigate to='/registration/one' />
    }
  return (
   <div>
       <input 
        type="text"
        placeholder='State of Residence'
        value={stateOfResidence}
        onChange={(e)=>
        dispatch({
            type: "CHANGE_STATE_OF_RESIDENCE",
            payload:e.target.value
        })
        } 
        />
        <br />
        <input 
        type="text"
        placeholder='Address'
        value={address}
        onChange={(e)=>
        dispatch({
            type: "CHANGE_ADDRESS",
            payload:e.target.value
        })
        } 
        />
        <br />
        <input 
        type="text"
        placeholder='Pincode'
        value={pincode}
        onChange={(e)=>
        dispatch({
            type: "CHANGE_PINCODE",
            payload:e.target.value
        })
        } 
        />
        <br />
        <button
         disabled={
             !stateOfResidence ||
             !address ||
             !pincode ||
             !name ||
             !age ||
             !dateOfbirth
         }
         onClick={handleSubmit}
        >
            SUBMIT

        </button>
   </div>
  )}