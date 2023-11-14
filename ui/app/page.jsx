'use client'

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation';
import axiosInstance from "./_Config/config";

export default function Home() {

    const router = useRouter();

    const params = useSearchParams();
    console.log(params)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function logar() {
        axiosInstance.post('/usuario/login', {
            email: email,
            senha: senha
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert('Login realizado com sucesso!')
                    router.push('/entrada')
                } else {
                    alert('Erro ao logar!')
                }
            })
            .catch(function (error) {
                if (error.response.status == 401) {
                    alert('Email ou Senha incorretos!')
                }
            });
    }

    return (
        <>
            <div className="fundo flex h-screen justify-center  items-center flex-col">
                <div className="flex text-bl w-full justify-center items-center h-full" >
                    <div className=" questao border-b-2 border-t-2 rounded-lg text-white flex flex-col w-2/5 h-4/6 m-auto justify-evenly items-center ">
                        <p className="text-3xl">Login</p>
                        <div>
                            <h3>Email:</h3>
                            <input type="text" defaultValue={email} className="border-2 rounded-lg text-black" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <h3>Senha:</h3>
                            <input type="password" defaultValue={senha} className="border-2 rounded-lg text-black" onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <button className="border-2 w-20 rounded-lg" onClick={() => logar()}>Enviar</button>
                        <h3>
                            <a href="/cadastro">Não possui cadastro? Clique aqui!</a>
                        </h3>
                    </div>
                </div >

            </div>
        </>
    );
}