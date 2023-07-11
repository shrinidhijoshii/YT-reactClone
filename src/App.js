import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;

/*
Head

Body
 - sidebar
  - options
 - main container
   - buttons list
   - video container
    - video cards

footer

*/
