import CounterButton from "./components/CounterButton";
import Profile from "./components/Profile";

const showButton = false;

function App() {
  return (
    <>
      { showButton ? (
        <CounterButton />
      ) : (
        <Profile />
      )}
    </>
  );
}

export default App;
