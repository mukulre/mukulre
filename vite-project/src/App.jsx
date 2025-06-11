import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routes/AppRouter";
import "./App.css";

function App() {
  return (
    <div>
      {/* The AppRouter will handle the routing for the application */}
      <AppRouter />
    </div>
  );
}

export default App;