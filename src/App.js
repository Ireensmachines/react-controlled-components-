import React from 'react';
import './App.css';
import HandleSubmit from "./Components/HandleSubmit";





function App() {
    const [nameValue, setNameValue] = React.useState('')
    const [isChecked, toggleCheckBox] = React.useState(false)
    const [ageValue, setAgeValue] = React.useState('0')
    const [commentValue, setCommentValue] = React.useState("")
function onVerzend(e){
        e.preventDefault();
    console.log({nameValue})
    console.log({isChecked})
    console.log({ageValue})
    console.log({commentValue})
}

    return (
        <>
            <span>

        <form onSubmit={onVerzend}>

                <h2>Gegevens</h2>

                <label htmlFor="form-message">
                    <div>
                    Naam:
                   <input
                       type="text"
                       id="naam-box"
                       name="message"
                       value={nameValue}
                       onChange={(e) => {

                           setNameValue(e.target.value)
                       }}
                   />
                    </div>
                </label>


                <label htmlFor="form-bericht">
<div1>
    Leeftijd:
    <input
        type="number"
        id="age-box"
        name="ageInput"
        value={ageValue}
        onChange={(e) => {

            setAgeValue(e.target.value)
        }}
    />
                </div1>

        </label>



            <h2>Jouw Review</h2>
            <section>
            <h1>Opmerkingen:</h1>

                <label>
                    <nav>
                        jouw bericht:

                        <input
                            type="text"
                            id="text-box"
                            name="comment"

                            value={commentValue}
                            onChange={(e) => {

                                setCommentValue(e.target.value)
                            }}
                        />
                    </nav>
                </label>


            </section>

            <footer>
                <label htmlFor="check-box-news-letter">
                    <input
                        type="checkbox"
                        id="box-news"
                        name="check-box-news-letter"
                        value={isChecked}
                        onClick={(e) => {

                            toggleCheckBox(!isChecked)
                        }
                        }


                    />
                    ik wil de nieuwsbrief
                </label>
            </footer>
            <main>
                <label htmlFor="submit">

                    <HandleSubmit


                    />
                </label>

            </main>

            </form>
            </span>


</>


    );
}


export default App;
