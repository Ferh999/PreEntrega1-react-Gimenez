import Header from "./components/Header/Header";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import Layout from "./components/Layout/Layout";
function App() {


  return (
    <div className="App">
      <Layout>
      <Header />
        <ItemListConteiner usuario="Fer" edad={37}/>
      </Layout>
    
    </div>
  );
}

export default App;
