import Description from "./Description";
import TablePrograms from "./Table";
import TableClients from "./TableClients";

export const MyClients = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="flex flex-col h-36 w-4/5 ml-5 justify-center">
            <div className="flex h-3/4 items-center font-Poppins text-5xl">
              <Description myprograms={"Clientes"} />
            </div>
            <div className="flex h-1/4 text-lg mb-3 items-end">
              <Description
                salutation={
                  "Gerencie e acompanhe o progresso dos seus clientes"
                }
              />
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center"></div>
        </div>
        <div className="flex">
          <TableClients
            Name="Nome"
            clientName="Isaura dSa"
            Status="Status"
            qantitiesOfCustomers="Visitas"
            start="Última Visita"
            icons=""
          />
        </div>
      </div>
    </div>
  );
};

export default MyClients;
