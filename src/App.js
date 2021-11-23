import { Route, Switch } from "react-router-dom";

import InfoPage from "./pages/Info";
import ScopePage from "./pages/Scope";
import PagePage from "./pages/Pages";
import PixelPage from "./pages/Pixel";
import WelcomePage from "./pages/Welcome";
import Layout from "./components/layout/Layout";

function App() {
  // This is where we should have the state

  return (
    <Layout>
      <div>
        <Switch>
        <Route path="/" exact>
            <WelcomePage
            
            />
          </Route>
          <Route path="/new-pixel-info">
            <InfoPage />
          </Route>
          <Route path="/scope">
            <ScopePage />
          </Route>
          <Route path="/pixels">
            <PixelPage />
          </Route>
          <Route path="/pages">
            <PagePage />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
