import Center from "./Center";
import Footer from "./Footer";
import MidPage from "./MidPage";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Center/>
      <MidPage/>
      <Footer/>
    </div>
  );
}
export default Home;
