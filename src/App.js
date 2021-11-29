import { Route, Switch } from "react-router-dom";


import WelcomePage from "./pages/Welcome";
import Layout from "./components/layout/Layout";

import Form from "./pages/Form"

// TODO
// ! When the user advances through the form, make sure that if they swipe back they go back to the previous screen
// ! Maybe using the history api ? so that links end something like "http://localhost:3000/new-pixel/scope"
// ! and i think we're gonna need some server-side redirectioning to prevent users from accesing "http://localhost:3000/new-pixel/scope" wthout first
// ! giving info for the first screen

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
