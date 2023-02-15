// import CardMui from "./components/CardMui/CardMui";
//import FetchingData from "./components/FetchingData/FetchingData";
import Header from "./components/Header/Header";
//import ItemCount from "./components/ItemCount/ItemCount";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
//import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import Cart from "./components/Cart/Cart";


function App() {


  return (
    <div className="App">
      {/* <Layout>
        <Header />
        <ItemListConteiner />
        <ItemCount />
        <FetchingData />
      </Layout> */}
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <ItemListConteiner />} />
        <Route path="/category/:categoryName" element={ <ItemListConteiner />} />
        <Route path="/itemDetail/:id" element={ <ItemDetailConteiner />}/>
        <Route path="/cart" element ={ <Cart /> }/>
        <Route path="*" element={<h4>Error, 404 not found</h4>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
