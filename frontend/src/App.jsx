import { ContentArea } from "./ContentArea";
import { Layout } from "./Components/utilities/Layout";
import { Footer } from "./Components/utilities/Footer";
import { NavBar } from "./Components/utilities/NavBar";
function App() {
  return (
    <>
      <Layout
        footer={<Footer />}
        ContentArea={<ContentArea />}
        NavBar={<NavBar />}
      />
    </>
  );
}

export default App;
