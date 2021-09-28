import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/cliente'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('João', 45, '2'),
    new Cliente('Pedro', 67, '3'),
    new Cliente('Carlos', 25, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {

  }

  function clienteExcluido(cliente: Cliente) {

  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-5"
                onClick={() => setVisivel('form')}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} >
            </Tabela>
          </>
        ) : (
          <Formulario
            cliente={clientes[0]}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}
