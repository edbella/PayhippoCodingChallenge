import { Helmet } from "react-helmet-async";

const DocumentHeader = ({
	title,
	description,
}: {
	title: String;
	description?: string;
}) => (
	<Helmet
		titleTemplate="%s | PayHippo"
		defaultTitle="PayHippo"
		defer={false}
	>
		<title>{title}</title>
		<meta charSet="utf-8" />
		<meta
			name="description"
			content={
				description ||
				"Do much more With ALAT. Choose how and where you spend your money, save alone or with friends, take a loan to buy new devices and much more."
			}
		/>
		<link rel="canonical" href={window.location.href} />
	</Helmet>
);

export default DocumentHeader;
