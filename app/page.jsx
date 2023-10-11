'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

export default function Home() {

  const [texto, setTexto] = useState('');
  const router = useRouter();

  function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function validateString(input) {
    const normalizedInput = removeAccents(input.toLowerCase());
    const normalizedTarget = removeAccents("o caminho da luz e o binario".toLowerCase());

    return normalizedInput === normalizedTarget;
  }

  function validarResposta(e) {

    if (validateString(e)) {
      router.push('/calculadora')
    }
    else {
      router.push('/NOTFOUND')
    }
  }

  return (
    <>
      <div className="fundo flex h-screen justify-center  items-center flex-col">
        <div className="flex text-bl w-full justify-center items-center h-full" >
          <div className=" questao border-2 rounded-lg text-white flex flex-col w-2/5 h-4/6 m-auto justify-evenly items-center ">
            <p className="font-bold">Inspirado por Marise's Machine</p>
            <h1 className="font-bold">Oque era oculto e que ainda será revelado para humanidade?</h1>
            <input type="text" className="w-2/4 border-2 rounded-lg text-black" onChange={(e) => setTexto(e.target.value)} />
            <button className="border-2 w-20 rounded-lg" onClick={() => validarResposta(texto)} >Enviar</button>
          </div>
        </div >

      </div>
    </>
  );
}
