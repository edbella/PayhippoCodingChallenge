import { ReactNode } from "react";

const GlassCard = ({ children }: { children: ReactNode | JSX.Element }) => {
	return (
		<div className="bg-white w-full lg:max-w-3/4 xl:max-w-3/5 bg-opacity-10 rounded-lg border border-solid backdrop-filter backdrop-blur-sm py-10 px-6 md:px-10">
			{children}
		</div>
	);
};

export default GlassCard;
