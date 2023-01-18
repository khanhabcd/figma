import "./App.css";
import Layout from "./page1/Layout/Layout";
import Layout2 from "./page2/Layout2/Layout2";
import Layout3 from "./page3/Layout3/Layout3";
import Layout4 from "./page4/Layout/Layout4";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div class="app">
      <div className="container">
        <Layout />
        <Layout2 />
        <Layout3 />
        <Layout4/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
