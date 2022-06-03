import Description from "./Description";
import TablePrograms from "./Table";
import TableClients from "./TableClients";

export const MyPrograms = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="flex flex-col h-36 w-4/5 ml-5 justify-center">
            <div className="flex h-3/4 items-center font-Poppins text-5xl">
              <Description myprograms={"Meus Programas"} />
            </div>
            <div className="flex h-1/4 text-lg mb-3 items-end">
              <Description
                salutation={
                  "Crie e Personalize programas de recompensas para o seu cliente"
                }
              />
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <button className="bg-orange-600 w-16 h-16 rounded-full">
              asas
            </button>
          </div>
        </div>
        <div className="flex">
          <TablePrograms Name="Nome" Status="Status" qantitiesOfCustomers="Clientes" start="Inicio"  icons="" />
        </div>
      </div>
    </div>
  );
};

export default MyPrograms;
