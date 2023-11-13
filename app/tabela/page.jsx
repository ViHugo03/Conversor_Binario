'use client'
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import axiosInstance from "../Config/config";

export default function Home() {

  // Inicializar dados como um array vazio
  const [dados, setDados] = useState([]);
  const [dadosPesquisados, setDadosPesquisados] = useState([]);
  const evento = ["Decimal", "Octal", "Hexadecimal", "Binário"];
  const [tipoConversao, setTipoConversao] = useState("");
  const [numeroPesquisado, setNumeroPesquisado] = useState("");

  const router = useRouter();

  useEffect(() => {
    axiosInstance.get("/conversao")
      .then((response) => {
        const dadosOrdenados = response.data.sort((a, b) => a.decimal - b.decimal);
        setDados(dadosOrdenados);
        setDadosPesquisados(dadosOrdenados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function adicionaTipo(tipo) {
    if (tipoConversao === tipo) {
      setTipoConversao("");
    } else {
      setTipoConversao(tipo);
    }
  }

  function pesquisar(event, tipo) {
    console.log(event);
    console.log(tipo);
    const valorPesquisado = event;
    if (tipo === "") return setDadosPesquisados(dados);
    const dadosFiltrados = dados.filter((conversao) => {
      if (tipo === "Decimal") {
        return conversao.decimal.toString() === valorPesquisado;
      } else if (tipo === "Octal") {
        return conversao.octal.toString() === valorPesquisado;
      } else if (tipo === "Hexadecimal") {
        return conversao.hexa.toString() === valorPesquisado;
      } else if (tipo === "Binário") {
        return conversao.bin.toString() === valorPesquisado;
      }
    });
    setDadosPesquisados(dadosFiltrados);
  }

  return (
    <>
      <div className="fundo flex flex-col justify-center items-center h-screen">
        <div className="m-auto flex w-screen ">
          <button className="text-white ml-5 h-9 border-2 questao rounded-lg w-24" onClick={() => router.push("/calculadora")}>{"<= "}Voltar</button>
        </div>
        <div className=" w-screen questao h-28 justify-around items-center flex flex-col text-white ">
          <h1>Tabela de Conversões</h1>
          <div className=" w-screen h-5 items-center justify-around flex flex-row">
            <div className="flex flex-row w-2/5 justify-around ">
              <div className="flex flex-row justify-evenly w-24 ">
                <input
                  type="checkbox"
                  value={evento[0]}
                  onClick={(e) => {
                    adicionaTipo(e.target.value);
                  }}
                />
                <b>{evento[0]}</b>
              </div>
              <div className="flex flex-row justify-evenly w-20 ">
                <input
                  type="checkbox"
                  value={evento[1]}
                  onClick={(e) => {
                    adicionaTipo(e.target.value);
                  }}
                />
                <b>{evento[1]}</b>
              </div>
            </div>
            <div className="flex flex-row">
              <input
                id="searchBox"
                className="text-black rounded-lg mr-2 w-52 text-center"
                placeholder="Encontar Número..."
                onChange={(event) => {
                  setNumeroPesquisado(event.target.value);
                }}
              />
              <button onClick={() => pesquisar(numeroPesquisado, tipoConversao)} className="text-black bg-white rounded-lg w-16 flex justify-center">
                <p>Enviar</p>
              </button>
            </div>
            <div className="flex flex-row w-2/5 justify-evenly ">
              <div className="flex flex-row justify-evenly w-32 ">
                <input
                  type="checkbox"
                  value={evento[2]}
                  onClick={(e) => {
                    adicionaTipo(e.target.value);
                  }}
                />
                <b>{evento[2]}</b>
              </div>
              <div className="flex flex-row justify-evenly w-20 ">
                <input
                  type="checkbox"
                  value={evento[3]}
                  onClick={(e) => {
                    adicionaTipo(e.target.value);
                  }}
                />
                <b>{evento[3]}</b>

              </div>
            </div>
          </div>

          <div className="flex flex-col w-11/12 ">
            <div className="flex justify-between p-2 ">
              <div className="w-2/5 items-center flex justify-center ">Decimal</div>
              <div className="w-2/5 items-center flex justify-center">Octal</div>
              <div className="w-2/5 items-center flex justify-center">Hexadecimal</div>
              <div className="w-2/5 items-center flex justify-center">Binário</div>
            </div>
          </div>
        </div>

        <div className="questao w-screen h-3/4 overflow-y-auto items-center flex flex-col text-white ">
          <div className="flex flex-col w-11/12">
            {dadosPesquisados.map((conversao, index) => (
              <div key={index} className="flex justify-between p-2">
                <div className="border-b-2 w-2/5 items-center flex justify-center">{conversao.decimal}</div>
                <div className="border-b-2 w-2/5 items-center flex justify-center">{conversao.octal}</div>
                <div className="border-b-2 w-2/5 items-center flex justify-center">{conversao.hexa}</div>
                <div className="border-b-2 w-2/5 items-center flex justify-center">{conversao.bin}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
