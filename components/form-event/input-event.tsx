import { ComponentProps } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputFormEventoProps extends ComponentProps<"input"> {}
export function InputFormEvento({
  type,
  placeholder,
  ...props
}: InputFormEventoProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-lg border border-[#4A4949] outline-none"
      {...props}
    />
  );
}
