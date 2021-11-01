import Link from "next/link";
import { StyledButtonProps } from "styled-components";

export interface ButtonProps extends StyledButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, text, icon }) => {
  return (
    <div className={className}>
      <Link href="/">
        <a>
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
