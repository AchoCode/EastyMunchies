import { ContentArea } from "./ContentArea";
import { Layout } from "./Layout";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <>
      <Layout footer={<Footer />} ContentArea={<ContentArea />} />
    </>
  );
}

export default App;
