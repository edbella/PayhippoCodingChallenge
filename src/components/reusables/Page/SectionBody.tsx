import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) => ({
	root: {
		[theme.breakpoints.up("xs")]: {
			minHeight: `calc(100vh - ${
				2 *
				theme?.mixins?.toolbar?.[
					"@media (min-width:0px) and (orientation: landscape)"
				]?.minHeight
			}px)`,
		},
		[theme.breakpoints.up("sm")]: {
			minHeight: `calc(100vh - ${theme?.mixins?.toolbar?.["@media (min-width:640px)"]?.minHeight
			}px)`,
		},
		minHeight: `calc(100vh - ${+theme?.mixins?.toolbar?.minHeight}px)`,
	},
}));

const SectionBody = ({ children }: { children: JSX.Element }) => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, "w-full container py-12 flex flex-col")}>{children}</div>
	);
};

export default SectionBody;
