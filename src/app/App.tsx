import "@/shared/styles/global.scss";
import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

const App: React.FC = observer(() => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
