import Link from "next/link";
import { StyledButtonProps } from "styled-components";

export interface ButtonProps extends StyledButtonProps {
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	className,
	text,
	icon,
	link = "/",
}) => {
	return (
		<div className={className}>
			<Link href={link}>
				<a target="_blank" rel="noopenr noreferrer">
					<span>
						{icon}
						{text}
					</span>
				</a>
			</Link>
		</div>
	);
};

export default Button;
