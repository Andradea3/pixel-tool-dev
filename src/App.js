import { Route, Switch } from "react-router-dom";


import WelcomePage from "./pages/Welcome";
import Layout from "./components/layout/Layout";

import Form from "./pages/Form"

function App() {
	

	return (
		<Layout>
			<div>
				<Switch>
					<Route path="/" exact>
						<WelcomePage />
					</Route>


					<Route path="/new-pixel-info">
						<Form/>
					</Route>  
				</Switch>
			</div>
		</Layout>
	);
}

export default App;
