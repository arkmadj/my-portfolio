
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
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
					<Link href="https://github.com/arkmadj" passHref>
						<a target="_blank" rel="noopenr noreferrer">
							<SiGithub />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://www.linkedin.com/in/ahmad-jinadu/" passHref>
						<a target="_blank" rel="noopenr noreferrer">
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
					<Link href="https://www.facebook.com/ahmad.adekunle1/" passHref>
						<a target="_blank" rel="noopenr noreferrer">
							<SiFacebook />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/AhmadJinadu" passHref>
						<a target="_blank" rel="noopenr noreferrer">
							<SiTwitter />
						</a>
					</Link>
				</li>
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
					<Link href="mailto:ahmadjinadu@gmail.com">
						<a target="_blank" rel="noopenr noreferrer">
							<div className="contact-info-item">
								<SiGmail />
								<span>ahmadjinadu@gmail.com</span>
							</div>
						</a>
					</Link>
					<Link href="https://wa.me/2348130215866">
						<a target="_blank" rel="noopenr noreferrer">
							<div className="contact-info-item">
								<SiWhatsapp />
								<span>+234 81 3021 5866</span>
							</div>
						</a>
					</Link>
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
