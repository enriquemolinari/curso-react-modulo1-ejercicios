import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";
import PanelDer from "./PanelDer";
import PanelIzq from "./PanelIzq";
export default function Layout() {
  return (
    <>
      <Header />
      <section>
        <PanelIzq />
        <PanelDer />
      </section>
      <Footer />
    </>
  );
}
