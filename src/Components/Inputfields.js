import React from 'react'

function Inputfields() {
    const [nameValue, setNameValue] = React.useState('')
   // const [ageValue, setAgeValue] = React.useState('0')
    return (

    <label htmlFor="form-message">

            type="text"
        id="form-message"
            name="message"
            value={nameValue}
            onChange={(e) => {console.log(e.target.value); setNameValue(e.target.value)}}
    </label>

    );
}

    export default Inputfields;




