import Link from "next/link";
import { StyledButton } from "../Styled/Button.style";

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/">
        <a className="logo">Zultan</a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <StyledButton text="Contact Me" background="#202024"></StyledButton>
        </li>
      </ul>
    </div>
  );
};

export default Header;
