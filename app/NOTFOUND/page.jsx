'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

export default function Home() {

    const [texto, setTexto] = useState('');
    const router = useRouter();

    const [decimal, setDecimal] = useState('');
    const [octal, setOctal] = useState('');
    const [binario, setBinario] = useState('');
    const [hexadecimal, setHexadecimal] = useState('');



    return (
        <>
            <div className="bg-black flex flex-col justify-center items-center h-screen">

                <div className="m-auto flex w-screen h-16 items-center">
                    <button className="text-white ml-5 h-9 border-2 questao rounded-lg w-24" onClick={() => router.back()}> {"<= "}Voltar</button>
                </div>

                <div className="flex flex-col w-screen justify-around items-center h-screen">

                    <div className="questao border-2 m-auto rounded-lg text-white flex flex-col w-2/6 h-3/6 justify-evenly items-center ">
                        <p className="font-bold text-7xl">
                            404
                        </p>
                        <p className="font-bold text-3xl">
                            Tente Novamente
                        </p>
                    </div>



                </div>
            </div>
        </>
    );
}
