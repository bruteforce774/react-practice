import CounterButton from "./components/CounterButton";
import Profile from "./components/Profile";
import ProductList from "./components/ProductList";

const showButton = false;

function App() {
  return (
    <>
      { showButton ? (
        <CounterButton />
      ) : (
        <Profile />
      )}

      <ProductList />
    </>
  );
}

export default App;
