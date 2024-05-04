// import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      {/* <Test /> */}
    </>
  );
};

export default App;
