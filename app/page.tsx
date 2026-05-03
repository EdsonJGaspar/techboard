import Image from "next/image";
import imgLogo from "../assets/logo.png";
import imgBanner from "../assets/banner.png";
import { SelectFormEvento } from "@/components/form-event/select-event";
import { InputFormEvento } from "@/components/form-event/input-event";
export default function Home() {
  return (
    <main>
      <header className="bg-[#06151A]">
        <div className="w-7xl mx-auto flex items-center justify-center  py-8">
          <Image src={imgLogo} alt="Logo" />
        </div>
      </header>
      <section className="bg-linear-180 from-[#17E4B9] to-[#091D24]">
        <div className=" min-h-[70vh] w-7xl mx-auto relative flex h- items-center justify-center">
          <Image
            src={imgBanner}
            alt="Banner principal"
            className="max-h-[70vh] h-full object-contain w-auto"
          />
        </div>
      </section>
      <section>
        <FormularioDoEvento />
      </section>
    </main>
  );
}

const FormularioDoEvento = () => {
  return (
    <form className="bg-[#212121] text-white w-96 mx-auto py-8 px-7 space-y-8 rounded-xl my-16 flex flex-col items-center justify-center">
      <h2 className="text-xl">Preencha para criar um evento</h2>
      <div className="w-full space-y-4">
        <fieldset className="flex flex-col gap-2">
          <label>Qual e o nome do evento?</label>
          <InputFormEvento type="text" placeholder="Summer dev hits" />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Data do evento</label>
          <InputFormEvento type="date" />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Tema do evento?</label>
          <SelectFormEvento />
        </fieldset>
      </div>
      <button className="bg-[#17D9B1] text-[#212121] font-semibold py-2 px-4 rounded-lg cursor-pointer">
        Criar Evento
      </button>
    </form>
  );
};
