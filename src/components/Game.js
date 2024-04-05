import React from "react";

export default function Game() {
  const [score, setScore] = React.useState({ userScore: 0, compScore: 0 });
  const [winner, setWinner] = React.useState({
    text: "Play your move",
    backgroundColor: "#081b31",
  });
  const [choice, setChoice] = React.useState({
    userChoice: "",
    compChoice: "",
  });

  React.useEffect(() => {
    if (choice.userChoice !== "" && choice.compChoice !== "") {
      handleScores();
    }
  }, [choice]);

  function handleScores() {
    if (choice.userChoice === "Rock") {
      if (choice.compChoice === "Paper") {
        setScore((prevScore) => ({
          ...prevScore,
          compScore: prevScore.compScore + 1,
        }));
        setWinner({
          text: "You lost. Play again ",
          backgroundColor: "#FF0000",
        });
      } else if (choice.compChoice === "Scissors") {
        setScore((prevScore) => ({
          ...prevScore,
          userScore: prevScore.userScore + 1,
        }));
        setWinner({ text: "You won 🤩", backgroundColor: "#178006" });
      } else {
        setWinner({
          text: "Oops... It's a draw. Play again",
          backgroundColor: "#2b250a",
        });
      }
    } else if (choice.userChoice === "Paper") {
      if (choice.compChoice === "Scissors") {
        setScore((prevScore) => ({
          ...prevScore,
          compScore: prevScore.compScore + 1,
        }));
        setWinner({
          text: "You lost. Play again ",
          backgroundColor: "#FF0000",
        });
      } else if (choice.compChoice === "Rock") {
        setScore((prevScore) => ({
          ...prevScore,
          userScore: prevScore.userScore + 1,
        }));
        setWinner({ text: "You won 🤩", backgroundColor: "#178006" });
      } else {
        setWinner({
          text: "Oops... It's a draw. Play again",
          backgroundColor: "#2b250a",
        });
      }
    } else if (choice.userChoice === "Scissors") {
      if (choice.compChoice === "Rock") {
        setScore((prevScore) => ({
          ...prevScore,
          compScore: prevScore.compScore + 1,
        }));
        setWinner({
          text: "You lost. Play again ",
          backgroundColor: "#FF0000",
        });
      } else if (choice.compChoice === "Paper") {
        setScore((prevScore) => ({
          ...prevScore,
          userScore: prevScore.userScore + 1,
        }));
        setWinner({ text: "You won 🤩", backgroundColor: "#178006" });
      } else {
        setWinner({
          text: "Oops... It's a draw. Play again",
          backgroundColor: "#2b250a",
        });
      }
    }
  }

  function handleUserChoice(event) {
    getRandomChoice();
    setChoice((prevChoice) => ({ ...prevChoice, userChoice: event.target.id }));
  }

  function getRandomChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    setChoice((prevChoice) => ({ ...prevChoice, compChoice: arr[random] }));
  }

  return (
    <div>
      <div className="images">
        <img
          src="images/rock.png"
          alt=""
          className="image"
          id="Rock"
          onClick={handleUserChoice}
        />
        <img
          src="images/paper.png"
          alt=""
          className="image"
          id="Paper"
          onClick={handleUserChoice}
        />
        <img
          src="images/scissors.png"
          alt=""
          className="image"
          id="Scissors"
          onClick={handleUserChoice}
        />
      </div>
      <div className="scores">
        <div className="you-score">
          <p>{score.userScore}</p>
          <p>You</p>
        </div>
        <div className="comp-score">
          <p>{score.compScore}</p>
          <p>Computer</p>
        </div>
      </div>
      <div className="display">
        <p id="msg" style={winner}>
          {winner.text}
        </p>
        {choice.userChoice && choice.compChoice && (
          <p style={{ fontSize: "24px", marginTop: "20px" }}>
            You chose: {choice.userChoice} & Computer chose: {choice.compChoice}
          </p>
        )}
      </div>
    </div>
  );
}
