'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function Home() {
  
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get("/api/router")
      .then((response) => {
        const dados ={
          decimal: response.data.decimal,
          octal: response.data.octal,
          hexa: response.data.hexa,
          bin: response.data.bin
        }
        console.log(dados);
        setData(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="fundo flex flex-col justify-center items-center h-screen">

        <div className="m-auto flex w-screen">
          <button className="text-white ml-5 h-9 border-2 questao rounded-lg w-24" onClick={() => router.push("/calculadora")}> {"<= "}Voltar</button>
        </div>

        <div className="questao w-screen h-16 items-center flex flex-col text-white ">
          <h1>Tabela de Pessoas</h1>
          <div className="flex flex-col w-11/12 ">
            {/* Cabeçalho */}
            <div className="flex justify-between p-2 ">
              <div className="w-1/5 items-center flex justify-center ">Decimal</div>
              <div className="w-1/5 items-center flex justify-center">Octal</div>
              <div className="w-1/5 items-center flex justify-center">Binário</div>
              <div className="w-1/5 items-center flex justify-center">Hexadecimal</div>
            </div>
          </div>

        </div>
        <div className=" questao w-screen h-4/5  overflow-y-auto items-center  flex flex-col text-white ">
          <div className="flex flex-col w-11/12">
            {/* Corpo */}
            {data.map(dados => (
              <div className="flex justify-between p-2">
                <div className="w-1/5 items-center flex justify-center">{dados.decimal}</div>
                <div className="w-1/5 items-center flex justify-center">{dados.octal}</div>
                <div className="w-1/5 items-center flex justify-center">{dados.hexa}</div>
                <div className="w-1/5 items-center flex justify-center">{dados.bin}</div>
              </div>
            ))}
          </div>
        </div >
      </div>
    </>
  );
}
