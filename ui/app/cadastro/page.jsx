'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import axiosInstance from '../_Config/config';

export default function Home() {

    const router = useRouter();

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    console.log(nome, email, senha)

    function downloadSenhaCriptografada(nome,senhaCriptografada) {
        const mensagem = `Olá ${nome} esta é sua senha criptografada
        00 ${senhaCriptografada}, use ela para acessar nossa aplicação!!!`;

        // Criando um blob com o conteúdo da mensagem
        const blob = new Blob([mensagem], { type: 'text/plain' });

        // Criando um link para o download do blob
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'senha-criptografada.txt';

        // Adicionando o link ao documento e disparando o download
        document.body.appendChild(link);
        link.click();

        // Removendo o link do documento
        document.body.removeChild(link);
    }


    function cadastrar() {
        axiosInstance.post('/usuario', {
            nome: nome,
            email: email,
            senha: senha
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 201) {
                    alert('Cadastro realizado com sucesso!');
                    downloadSenhaCriptografada(response.data.nome,response.data.senha); // Substitua pelo caminho correto da senha criptografada
                    router.push("/");
                }
            })
            .catch(function (error) {
                if (error.response.status === 400) {
                    alert(error.response.data);
                }
                else if (error.response.status === 409) {
                    alert('Usuário já cadastrado');
                }
            });
    }



    return (
        <>
            <div className="fundo flex h-screen justify-center  items-center flex-col">
                <div className="flex flex-col text-bl w-full justify-center items-center h-full" >
                    <div className=" questao border-t-2 rounded-t-2xl text-white flex flex-col w-2/4 h-96  justify-evenly items-center ">
                        <p className="text-3xl">Cadastro</p>
                        <div >
                            <h3>Nome:</h3>
                            <input type="text" className="border-2 w-80 rounded-lg text-black" onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div>
                            <h3>Email:</h3>
                            <input type="text" className="border-2 w-80 rounded-lg text-black" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <h3>Senha:</h3>
                            <input type="password" className="border-2 w-80 rounded-lg text-black" onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <button className="border-2 w-20 rounded-lg" onClick={() => cadastrar()}>Enviar</button>
                        <h3>
                            <a href="/">Já tenho cadastro? Clique aqui!</a>
                        </h3>
                    </div>
                    <div className={"questao border-b-2 rounded-b-2xl text-white flex flex-col w-2/4 h-20 justify-evenly items-center"}>
                        <h3>Observação</h3>
                        <p>Após o cadastro sua senha será baixada na sua máquina!</p>
                    </div>
                </div >

            </div>
        </>
    );
}