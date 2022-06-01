import classNames from "classnames";

type inputProps = {
  onValueChange: (login?, pass?, email?) => void;
  placeholder: string;
  name: string;
  value?: string;
  type: "text" | "password" | "email" | "select" | undefined;
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
  required?: boolean;
};

type selectProps = {
  onValueChange: (login?, pass?, email?) => void;
  placeholderSelection: string;
  name: string;
  value?: string;
  width: string;
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

export const Input = ({
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
  required
}: inputProps) => {
  return (
    <input
      onChange={(e) => onValueChange(e.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      required
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
         font-bold py-3 px-5 rounded text-xs
         shadow appearance-none border-2 
         mb-3 leading-tight focus:outline-nonefirst-letter:focus:shadow-outline`
      )}
    />
  );
};

export const Selection = ({
  onValueChange,
  name,
  placeholderSelection,
  value = "",
  width,
  bgColor,
  textColor,
  borderColor,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: selectProps) => {
  return (
    <div>
      <select
        onChange={(e) => onValueChange(e.target.value)}
        name={name}
        placeholder={placeholderSelection}
        value={value}
        required
        className={classNames(
          `${borderColor}
           ${bgColor}
           ${textColor}
           ${width}
           ${margin}
           ${marginTop}
           ${marginRight}
           ${marginBottom}
           ${marginLeft}
           font-Poppins py-2 px-4 rounded text-xs
           shadow border-2 mb-3 appearance-none ${
             value ? "text-black" : "text-gray-400"
           }
           `
        )}
      >
        <option className="appearance-none" disabled value={""} selected>
          {placeholderSelection}
        </option>
        <option value="client" className="appearance-none">
          Sou Cliente
        </option>
        <option value="restaurant" className="appearance-none">
          Sou Empresa
        </option>
      </select>
    </div>
  );
};

export default Input;
