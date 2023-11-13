'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import axiosInstance from "../Config/config";

export default function Home() {

  const [texto, setTexto] = useState('');
  const router = useRouter();

  const [decimal, setDecimal] = useState('');
  const [octal, setOctal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [binario, setBinario] = useState('');

  function salvarConversao(dec, oct, hex, bin) {
   
    axiosInstance.post("/conversao", {
      decimal:dec, 
      octal:oct, 
      hexa:hex, 
      bin:bin
    })
      .then(response => {
        console.log("Dados salvos com sucesso:", response);
      })
      .catch(error => {
        console.error("Erro ao salvar os dados:",error);
      });

  }

  function Calcular() {
    if (inpDec.value != "") {
      btDec();
    }
    else if (inpOc.value != "") {
      btOc();
    }
    else if (inpHex.value != "") {
      btHex();
    }
    else if (inpBin.value != "") {
      btBin();
    }
  }

  function Limpar() {
    inpDec.value = "";
    inpOc.value = "";
    inpHex.value = "";
    inpBin.value = "";
    setDecimal('');
    setOctal('');
    setHexadecimal('');
    setBinario('');
  }

  function btDec() {
    var decimal = Number(inpDec.value);

    let octal = decimal.toString(8);

    let hexadecimal = decimal.toString(16).toUpperCase();

    let binaria = decimal.toString(2);


    inpOc.value = octal;
    inpHex.value = hexadecimal;
    inpBin.value = binaria;

    salvarConversao(decimal, octal, hexadecimal, binaria);
  }

  function btOc() {
    var aux = inpOc.value;
    aux = aux.toString(10);
    var decimal = parseInt(aux, 8);
    let hexadecimal = decimal.toString(16);
    let binaria = decimal.toString(2);
    inpDec.value = decimal;
    inpHex.value = hexadecimal.toUpperCase();
    inpBin.value = binaria;

    salvarConversao(decimal, aux, hexadecimal, binaria);
  }

  function btHex() {
    var aux = inpHex.value;
    aux = aux.toString(10).toUpperCase();
    var decimal = parseInt(aux, 16);
    let octal = decimal.toString(8);
    let binaria = decimal.toString(2);

    inpHex.value = aux;
    inpDec.value = decimal;
    inpOc.value = octal;
    inpBin.value = binaria;
    salvarConversao(decimal, octal, aux, binaria);
  }

  function btBin() {
    var aux = inpBin.value;
    aux = aux.toString(10);
    var decimal = parseInt(aux, 2);
    inpDec.value = decimal;

    let octal = decimal.toString(8);

    let hexadecimal = decimal.toString(16).toUpperCase();

    inpOc.value = octal;
    inpHex.value = hexadecimal;
    salvarConversao(decimal, octal, hexadecimal, aux);
  }


  return (
    <>
      <div className="fundo flex flex-col justify-center items-center h-screen">

        <div className="m-auto flex w-screen justify-between h-16 items-center">
          <button className="text-white ml-5 h-9 border-2 questao rounded-lg w-24" onClick={() => router.push("/")}> {"<= "}Voltar</button>
          <button className="text-white mr-5 h-9 border-2 questao rounded-lg w-24" onClick={() => router.push("/tabela")}> Tabela{" =>"}</button>
        </div>

        <div className="flex flex-col w-screen justify-around items-center h-screen">

          <div className="questao border-2 m-auto rounded-lg text-white flex flex-col w-2/6 h-3/6 justify-evenly items-center ">

            <p>Inspirado por Marise's Machine</p>
            <div className="calculo flex flex-row justify-around w-full">
              <div className=" w-1/6  flex flex-col justify-center items-center"><h3>Decimal</h3>
                <input type="text" id="inpDec" defaultValue={decimal} className="w-2/3 flex border-2 rounded-lg text-black" onChange={(e) => setTexto(e.target.value)} />
              </div>
              <div className=" w-1/6  flex flex-col justify-center items-center"><h3>Octal</h3>
                <input type="text" id="inpOc" defaultValue={octal} className="w-2/3 flex border-2 rounded-lg text-black" onChange={(e) => setTexto(e.target.value)} />
              </div>

            </div>
            <div className="flex flex-row justify-around w-full">
              <div className=" w-1/6  flex flex-col justify-center items-center"><h3>Binário</h3>
                <input type="text" id="inpBin" defaultValue={binario} className="w-2/3 flex border-2 rounded-lg text-black" onChange={(e) => setTexto(e.target.value)} />
              </div>
              <div className=" w-1/5 flex flex-col justify-center items-center"><h3>Hexadecimal</h3>
                <input type="text" id="inpHex" defaultValue={hexadecimal} className="w-2/3 flex border-2 rounded-lg text-black" onChange={(e) => setTexto(e.target.value)} />
              </div>
            </div>
            <div className="flex justify-around w-56">
              <button className="border-2 w-20 rounded-lg" onClick={() => Calcular()} >Enviar</button>
              <button className="border-2 w-20 rounded-lg" onClick={() => Limpar()} >Limpar</button>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}
