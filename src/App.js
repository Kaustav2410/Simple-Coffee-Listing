import { useEffect,useContext } from 'react';
import { AppContext } from "./context/appContext";
import './App.css';
import { CollectionCard } from './components/CollectionCard';
import coffee from './media/bg-cafe.jpg'
function App() {
  const {getProducts} = useContext(AppContext);
  useEffect(() => { 
    getProducts(); // Fetch products when the component mounts
}, []);
  // h-dvh to make an element span the entire height of the viewport, which changes as the browser UI expands or contracts.
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-blackish">
            <img src={coffee} alt="Coffee Image" className="fixed top-0 w-full z-1 object-cover h-[18.75rem] object-center " />
                <CollectionCard />
           
        </div>
  );
}

export default App;
