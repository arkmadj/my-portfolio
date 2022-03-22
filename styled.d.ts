// import original module declarations
import { IconType } from "react-icons/lib";
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      light: string;
      dark: string;
      darker: string;
      body: string;
      footer: string;
    };
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }

  export interface StyledFlexProps {
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    background?: string;
    equalSections?: boolean;
    margin?: string;
    flexWrap?: string;
    gap?: string;
    width?: string;
    background?: string;
    padding?: string;
    isResponsive?: boolean;
  }

  export interface StyledButtonProps {
    margin?: string;
    color?: string;
    background?: string;
    scale?: boolean;
    text: string;
    width?: string;
    icon?: JSX.Element;
    reverseShadow?: boolean;
    link?: string;
  }

  export interface StyledFloatingCardProps {
    imageSrc: string;
    flexDirection?: string;
  }

  export interface StyledImageProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
  }

  export interface StyledGlassCardProps {
    background?: string;
    color?: string;
    title?: string;
    icons?: JSX.Element[];
    description?: string;
    websiteLink?: string;
    githubLink?: string;
  }

  export interface StyledTextProps {
    fontSize?: string;
    color?: string;
    isItalized?: boolean;
    fontWeight?: string;
    isUnderlined?: boolean;
    letterSpacing?: string;
    textAlign?: string;
  }

  export interface StyledSkillCardProps {
    title: string;
    description: string;
    icon: JSX.Element;
    iconBackground?: string;
    value?: number;
    progressRadius?: number;
    // progressStrokeWidth?: number;
  }

  export interface StyledIconProps {
    color?: string;
    size?: string;
    icon?: IconType;
  }

  export interface StyledProgressBarProps {
    color?: string;
    type?: ProgressType;
    title?: string;
    width: string;
    height?: string;
    borderRadius?: string;
    radius?: number;
    value: number;
  }

  export interface StyleExperienceCard {}

  export enum ProgressType {
    circle = "circle",
    linear = "linear",
  }
}
