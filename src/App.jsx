import Heroes from "./Components/Heroes";
import SalesNav from "./Components/NavbarSales";
import NavbarMain from "./Components/Navbar";
import Cards from "./Components/Card1";
import PCSelections from "./Components/Selection";
import Card2 from "./Components/Card2";
import Reviews from "./Components/Reviews";
import Heroes2 from "./Components/Heroes2";
import LatestRelease from "./Components/LatestRelease";
import RestCards from "./Components/RestCards";
import BestSellers from "./Components/BestSellers";

function App() {
  return (
    <>
      <SalesNav />
      <NavbarMain />
      <Heroes />
      <Cards />
      <PCSelections />
      <Card2 />
      <Reviews />
      <Heroes2 />
      <LatestRelease />
      <RestCards />
      <BestSellers />
    </>
  );
}

export default App;
