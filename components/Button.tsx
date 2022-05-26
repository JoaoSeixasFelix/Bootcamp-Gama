import classNames from "classnames";

type Props = React.PropsWithChildren<{
  onClick: () => void;
  type: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
  width?: string;
  height?: string;
  backGroundColor: string;
  textColor: string;
  border?: string;
  borderColor?: string;
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
