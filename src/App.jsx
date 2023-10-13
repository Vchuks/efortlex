import { Route, Routes } from "react-router-dom";
import "./App.css";
import Listing from "./components/pages/Listing";
import DetailPage from "./components/pages/DetailPage";
import { DataProvider } from "./context/DataContext";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <>
    <Header/>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="details_page/:dataid" element={<DetailPage />} />
        </Routes>
      </DataProvider>
      <Footer/>
    </>
  );
}

export default App;
