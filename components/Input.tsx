import classNames from "classnames";

type Props = {
  onValueChange: (login?, pass?, email?) => void;
  placeholder: string;
  name: string;
  value?: string;
  type: "text" | "password" | "email" | undefined;
  size: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  login?: string;
  email?: string;
  password?: string;
};

function Input({
  onValueChange,
  name,
  placeholder,
  value = "",
  type,
  size,
  bgColor,
  textColor,
  borderColor,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: Props) {
  
  return (
    <input
    onChange={(e) => onValueChange(e.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      className={classNames(
        `${borderColor}
         ${bgColor}
         ${textColor}
         ${size}
         ${margin}
         ${marginTop}
         ${marginRight}
         ${marginBottom}
         ${marginLeft}
         font-bold py-2 px-4 rounded 
         shadow appearance-none border-2 
         text-gray-700
         mb-3
         leading-tight
         focus:outline-nonefirst-letter:focus:shadow-outline`
      )}
    />
  );
}

export default Input;
