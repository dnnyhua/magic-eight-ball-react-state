import { useState } from "react"
import "./Eightball.css"

// { msg: "It is certain.", color: "green" },

const Eightball = ({ answers }) => {
    const startingQuestion = { msg: "Think of a Question", color: "black" }

    const restart = () => {
        setResponse(startingQuestion.msg)
        setColor(startingQuestion.color)
    }

    // this will be used to display response from the magic 8 ball
    const [response, setResponse] = useState(startingQuestion.msg)
    const [color, setColor] = useState(startingQuestion.color)

    // need to update when clicked on
    const getResponse = () => {
        let idx = Math.floor(Math.random() * answers.length)
        let randResponse = answers[idx]
        setResponse(randResponse.msg)
        setColor(randResponse.color)
    }


    return (
        <div>
            <div className="Eightball" onClick={getResponse} style={{ backgroundColor: color }}>
                <h1 className="Eightball-message">{response}</h1>
            </div>
            <div>
                <button className="Eightball-resetBtn" onClick={restart}>Reset</button>
            </div>
        </div>
    )
}


export { Eightball }