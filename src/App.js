import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choice = {
  rock: {
    name: "Rock",
    img: "/rock.png"
  },
  scissors: {
    name: "Scissors",
    img: "/scissors.png"
  },
  paper: {
    name: "Paper",
    img: "/paper.png"
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const [resultC, setResultC] = useState("")
  const play = (userChoice) => {
    console.log(userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    let userResult = judgement(choice[userChoice], computerChoice);
    setResult(userResult);

    setResultC(userResult === "비겼다" ? "비겼다" : userResult === "이겼다!!" ? "졌다.." : "이겼다!!");
  };

  const judgement = (user, computer) => {
    // if(user.name === computer.name){
    //   return "tie"
    // }else if(user.name=="Rock"){
    //   if(computer === "Scissors"){
    //     return "win"
    //   }else {
    //     return "lose"
    //   }
    // }
    if (user.name === computer.name) {
      return "비겼다"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "이겼다!!" : "졌다.."
    else if (user.name === "Scissors") return computer.name === "Paper" ? "이겼다!!" : "졌다.."
    else if (user.name === "Paper") return computer.name === "Rock" ? "이겼다!!" : "졌다.."
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 Array로 만듦
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div className='main'>
      <h1 className='name'>가위 바위 보</h1>
      <div className='bg'>
        <Box title="Computer" item={computerSelect || { img: "/rock.png" }} result={resultC} />
        <Box title="User" item={userSelect || { img: "/rock.png" }} result={result} />
      </div>
      <div className='buttonsection'>
        <button onClick={() => play("scissors")}>
          <img src='/scissors.png' alt='가위 이미지'></img>
        </button>
        <button onClick={() => play("rock")}>
          <img src='/rock.png' alt='바위 이미지'></img>
        </button>
        <button onClick={() => play("paper")}>
          <img src='/paper.png' alt='보 이미지'></img>
        </button>
      </div>
      <div className='pop'>
        <h1 className='result'>{result}</h1>
      </div>
    </div>
  );
}

export default App;