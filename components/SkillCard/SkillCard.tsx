import { StyledSkillCardProps } from "styled-components";
import { StyledProgressBar } from "../../components/Styled/ProgressBar.style";

export interface SkillCardProps extends StyledSkillCardProps {
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  className,
  description,
  value,
  progressRadius,
  icon,
}) => {
  return (
    <div className={className}>
      <div className="icon">
        {icon}
        <div className="percent">
          <svg>
            <circle cx="50%" cy="50%" r={40}></circle>
            <circle cx="50%" cy="50%" r={40}></circle>
          </svg>
          <div className="number">
            <h2>
              {value}
              <span>%</span>
            </h2>
          </div>
        </div>
      </div>
      {/* <StyledProgressBar
        className="progress"
        value={70}
        width="80px"
        radius={40}
      /> */}
      {/* <div className="percent">
        <svg>
          <circle cx="50%" cy="50%" r={radius}></circle>
          <circle cx="50%" cy="50%" r={radius}></circle>
        </svg>
        <div className="number">
          <h2>
            {value}
            <span>%</span>
          </h2>
        </div>
      </div> */}
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
