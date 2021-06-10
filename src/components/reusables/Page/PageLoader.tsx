import { useEffect } from "react";
import { ReactComponent as PayHippoLogo } from "assets/svgs/app-logo.svg";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  logoIcon: {
    fontSize: theme.typography.h1.fontSize,
    width: "auto",
  },
}));

const PageLoader = ({ message = "Please wait..." }: { message?: string }) => {
	const classes = useStyles();

	useEffect(() => {
		const { body } = document;

		body.classList.add("overflow-hidden");
		return () => {
			body.classList.remove("overflow-hidden");
		};
	}, []);

	return (
		<div
			className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-white p-5 z-2000 overflow-hidden"
			style={{ margin: 0 }}
		>
			<div className="z-10 text-center">
				<div className="flex justify-center items-center relative mb-4">
					<SvgIcon className={classes.logoIcon} viewBox="0 0 163 50">
						<PayHippoLogo />
					</SvgIcon>
				</div>
				<Typography variant="caption" component="p">
					{message}
				</Typography>
			</div>
		</div>
	);
};

export default PageLoader;
