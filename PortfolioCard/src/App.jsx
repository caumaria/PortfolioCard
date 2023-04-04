import Splash from "./components/splash screen/Splash";
import Homepage from './components/homepage/Homepage';
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return <>{loading ? <Splash /> : <Homepage />}</>;
}

export default App;
