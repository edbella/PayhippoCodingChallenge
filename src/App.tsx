import { Suspense } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
import { HelmetProvider } from "react-helmet-async";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import {
	Footer,
	NavigationBar,
	PageLoader,
	SectionBody,
} from "components/reusables";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import appRoutes from "app.routes";

function App() {
	return (
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<Suspense fallback={<PageLoader />}>
					<MuiPickersUtilsProvider utils={DayjsUtils}>
						<div className="custom-blob">
							<NavigationBar />
							<SectionBody>
								<Router>
									<Switch>
										<Redirect
											push
											path="/"
											to={{
												pathname: "/signup",
											}}
											exact
										/>
										{appRoutes?.map(({ path, component: Component, title, ...rest }) => {
											return (
												<Route
													key={path}
													path={path}
													exact
													render={(props) => <Component title={title} {...props} />}
													{...rest}
												/>
											);
										})}
										<Redirect
											push
											to={{
												pathname: "/404",
											}}
											exact
										/>
									</Switch>
								</Router>
							</SectionBody>
							<Footer />
						</div>
					</MuiPickersUtilsProvider>
				</Suspense>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default App;
