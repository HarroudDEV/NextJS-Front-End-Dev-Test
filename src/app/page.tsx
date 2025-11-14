import Navbar from "./Layouts/Navbar";
import Block1 from "./Layouts/Block1_";
import Block2 from "./Layouts/Block2_";
import Block3 from "./Layouts/Block3_";
import Block4 from "./Layouts/Block4_";
import Block5 from "./Layouts/Block5_";
import Footer from "./Layouts/Footer";
export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
