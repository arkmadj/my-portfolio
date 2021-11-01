import { Whatsapp } from "@styled-icons/boxicons-logos";
import Link from "next/link";
import { FaPhone, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  SiFacebook,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import { StyledText } from "../Styled/Text.style";

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <ul>
        <li>
          <Link href="/">
            <a>
              <SiGithub />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <SiLinkedin />
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="">
            <a>
              <SiWhatsapp />
            </a>
          </Link>
        </li> */}
        <li>
          <Link href="/">
            <a>
              <SiFacebook />
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="">
            <a>
              <SiTwitter />
            </a>
          </Link>
        </li> */}
        {/* <li>
          <Link href="">
            <a>
              <SiInstagram />
            </a>
          </Link>
        </li> */}
      </ul>
      <div className="content">
        <div>
          <StyledText
            fontSize="1.5em"
            fontWeight="700"
            letterSpacing="2px"
            color="orange"
          >
            ZULTAN
          </StyledText>
          <p>&copy; ZULTAN All rights reserved</p>
        </div>
        <div className="contact-info">
          <div className="contact-info-item">
            <SiGmail />
            <span>ahmajinadu@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <SiWhatsapp />
            <span>+234 81 3021 5866</span>
          </div>
          <div className="contact-info-item">
            <FaPhoneAlt />
            <span>+234 81 3021 5866</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
