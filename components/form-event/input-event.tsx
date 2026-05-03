interface InputFormEventoProps {
  type: string;
  placeholder?: string;
}
export function InputFormEvento({ type, placeholder }: InputFormEventoProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-lg border border-[#4A4949] outline-none"
    />
  );
}
