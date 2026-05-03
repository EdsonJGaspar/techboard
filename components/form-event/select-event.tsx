import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SelectFormEvento() {
  return (
    <Select>
      <SelectTrigger className="w-full border border-[#4A4949] px-4 py-2">
        <SelectValue placeholder="Escolher tema" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"devs"}>
            Como inpulsionar o mercado de desenvolvimento em Angola
          </SelectItem>
          <SelectItem value={"Ia"}>
            Inteligencia Artificial para DEVs
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
