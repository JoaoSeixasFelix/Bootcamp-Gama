import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

type Props = React.PropsWithChildren<{
  onClick?: () => void | Dispatch<SetStateAction<any>>;
  type: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
  width?: string;
  height?: string;
  backGroundColor: string;
  textColor: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  rounded?: string;
}>;

export const Button = ({
  children,
  onClick,
  type,
  disabled = false,
  width,
  height,
  backGroundColor,
  textColor,
  border,
  borderColor,
  borderRadius,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  rounded,
}: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={classNames(
          `${backGroundColor}
           ${textColor}
           ${width}
           ${height}
           ${border}
           ${borderColor}
           ${borderRadius}
           ${margin}
           ${marginTop}
           ${marginRight}
           ${marginBottom}
           ${marginLeft}
           ${padding}
           ${paddingTop}
           ${paddingBottom}
           ${paddingRight}
           ${paddingLeft}
           ${rounded}
           font-bold
           rounded-lg font-Poppins`
        )}
      >
        {" "}
        {children}{" "}
      </button>
    </>
  );
};

export default Button;
