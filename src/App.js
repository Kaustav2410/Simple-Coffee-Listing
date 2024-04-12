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
    <div className="App ">
            <img src={coffee} alt="Coffee Image" className=" w-full z-1 object-cover h-2/4" />
            <div className="bg-blackish z-1 pb-16">
                <CollectionCard />
            </div>
        </div>
  );
}

export default App;
