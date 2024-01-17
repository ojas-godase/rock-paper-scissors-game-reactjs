import React from 'react'

export default function Game() {
    const[score , setScore] = React.useState({userscore:0,compscore:0})
    const[winner , setWinner] = React.useState({text : "Play your move", backgroundColor: '#081b31'})
    
    function handleScores() {
        if(choice.userchoice==='Rock') {
            if(choice.compchoice==='Paper') {
                setScore((prevScore) => ({
                    ...prevScore,
                    compscore : prevScore.compscore + 1
                }))
                setWinner(({text:"You lost. Play again " , backgroundColor:'#FF0000'}))
            } else if(choice.compchoice==='Scissors') {
                setScore((prevScore) => ({
                    ...prevScore ,
                    userscore : prevScore.userscore + 1
                }))
                setWinner({text:"You won 🤩" ,backgroundColor:'#178006' })
            } else {
                setWinner({text:"Oops... It's a draw. Play again" , backgroundColor:"#2b250a"})
            }
        }
        if(choice.userchoice==='Paper') {
            if(choice.compchoice==='Scissors') {
                setScore((prevScore) => ({
                    ...prevScore,
                    compscore : prevScore.compscore + 1
                }))
                setWinner(({text:"You lost. Play again " , backgroundColor:'#FF0000'}))
            } else if(choice.compchoice==='Rock') {
                setScore((prevScore) => ({
                    ...prevScore ,
                    userscore : prevScore.userscore + 1
                }))
                setWinner({text:"You won 🤩" ,backgroundColor:'#178006' })
            } else {
                setWinner({text:"Oops... It's a draw. Play again" , backgroundColor:"#2b250a"})
            }
        }
        if(choice.userchoice==='Scissors') {
            if(choice.compchoice==='Rock') {
                setScore((prevScore) => ({
                    ...prevScore,
                    compscore : prevScore.compscore + 1

                }))
                setWinner(({text:"You lost. Play again " , backgroundColor:'#FF0000'}))
            } else if(choice.compchoice==='Paper') {
                setScore((prevScore) => ({
                    ...prevScore ,
                    userscore : prevScore.userscore + 1
                }))
                setWinner({text:"You won 🤩" ,backgroundColor:'#178006' })
            } else {
                setWinner({text:"Oops... It's a draw. Play again" , backgroundColor:"#2b250a"})
            }
        }
        Choice()
}
    const[choice , setChoice] = React.useState({userchoice:"",compchoice:""})
    function handleUserChoice(event) {
        getRandomChoice()
        setChoice((prevChoice) => ({
            ...prevChoice,
            userchoice : event.target.id,
        }))
        handleScores()

    }
    function getRandomChoice() {
        const arr = ['Rock','Paper','Scissors']
        const random = Math.floor(Math.random()*3);
        setChoice((prevChoice) => ({
            ...prevChoice,
            compchoice:arr[random]
        }))
    }
    const[displayChoice , setDisplayChoice] = React.useState("")
    function Choice() {
        if(choice.userchoice!=0 && choice.compchoice!=0) {
            setDisplayChoice(`You chose ${choice.userchoice} & Computer chose ${choice.compchoice}`)
        }
        
    }

  return (
    <div>
        <div className="images">
            <img src="images/rock.png" alt="" className="image" id='Rock' onClick={handleUserChoice}/>
            <img src="images/paper.png" alt="" className="image" id='Paper' onClick={handleUserChoice}/>
            <img src="images/scissors.png" alt="" className="image" id='Scissors' onClick={handleUserChoice}/>
        </div>
        <div className="scores">
            <div className="you-score">
                <p>{score.userscore}</p>
                <p>You</p>
            </div>
            <div className="comp-score">
                <p>{score.compscore}</p>
                <p>Computer</p>
            </div>
        </div>
        <div className="display">
            <p id='msg' style={winner}>{winner.text}</p>
        </div>
        <div className="displaychoice">
            {displayChoice}
        </div>
    </div>
  )
}
