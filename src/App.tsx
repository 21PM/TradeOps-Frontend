import Navbar from "./components/layout/Navbar";
import QuickMenu from "./components/ui/quickMenu/QuickMenu";
import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <>
      <Navbar />
      <QuickMenu />
      <AppRouter />
    </>
  );
}

export default App;
