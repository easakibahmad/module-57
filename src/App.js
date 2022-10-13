import { getAuth } from "firebase/auth";
import './App.css';
import app from './Firebase/Firebase.init';
import RegisterReactBootstrap from "./RegisterRectBootstrap/RegisterReactBootstrap";

function App() {

  const auth = getAuth(app)

  
  return (
    <div>
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
