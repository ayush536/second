import React from 'react'
import { RegistrationContext } from '../Context/RegistrationContext';
import { useNavigate } from 'react-router-dom';

export const Form1=()=> {
    const { name, age, dateOfBirth, dispatch } =
    React.useContext(RegistrationContext);
    const navigate = useNavigate();

  return (
    <div>
        <input 
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => 
        dispatch({type: "CHANGE_NAME", paylaod: e.target.value })
        }
        />
        <br />
        <input 
        type="text"
        placeholder='Age'
        value={age}
        onChange={(e) => 
        dispatch({type: "CHANGE_AGE", paylaod: e.target.value })
        }
        />
        <br />
        <input 
        type="date"
        placeholder='Date Of Birth'
        value={dateOfBirth}
        onChange={(e) => 
        dispatch({type: "CHANGE_DATE_OF_BIRTH", paylaod: e.target.value })
        }
        />
        <br />
        <button
        disabled={!name && !age && !dateOfBirth}
        onClick={() => {
            navigate(`/registration/two`);
        }}
        >
            NEXT
        </button>
    </div>
  )
}

