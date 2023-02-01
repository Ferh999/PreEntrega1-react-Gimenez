
import CardMui from "./components/CardMui/CardMui";
import Header from "./components/Header/Header";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import Layout from "./components/Layout/Layout";

function App() {


  return (
    <div className="App">
      <Layout>
        <Header />
        <ItemListConteiner usuario="Fer" edad={37} />
      </Layout>
      <CardMui title="Teclados" imagen="https://http2.mlstatic.com/D_NQ_NP_876249-MLA51700399267_092022-O.webp" descripcion="Teclados Mecanicos" />
      <CardMui title="Mouse" imagen="https://i.blogs.es/27c890/raton-gaming/1366_2000.jpg" descripcion="Mouse alto rendimiento" />
      <CardMui title="Audio" imagen="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/11/auriculares-razer-2148203.jpg?itok=A_afjJ7v" descripcion="El mejor sonido al alcance de tu mano" />
    </div>
  );
}

export default App;
