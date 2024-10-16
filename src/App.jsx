import './App.css'
import Count from './Count';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('click me');
  }

  const handleClicked = () => {
    alert('click here');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>

      <Team></Team>

      <Count></Count>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClicked}>Click Here</button>
      <button onClick={() =>{ alert('click now')}}>Click Now</button>
      <button onClick={() => addToFive(3)}>Add Five</button>
      
    </>
  )
}

export default App
