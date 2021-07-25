import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

export default function Lista(){
    const history = useHistory();

    let clientes = JSON.parse(localStorage.getItem('cliente'));
    let produtos = JSON.parse(localStorage.getItem('produto'));

    if(clientes == null){
        clientes = [];
    }

    if(produtos == null){
        produtos = [];
    }


    function limpar(){
        alert("Memória limpa!");
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="list-container">
            <header>

                <span>Bem vindo, usuário !</span>

                <button onClick={limpar} type="button">
                    Limpar listas
                </button>

            </header>
            <h1>Clientes cadastrados</h1>
            <Link to={"/cadastro/cliente"}>
                <button type="button">
                    Cadastrar
                </button>
            </Link>
            <ul>
                { clientes.map(cliente => (
                    <li key={cliente.nome}>
                        <strong>Nome:</strong>
                        <p>{cliente.nome}</p>

                        <strong>Email:</strong>
                        <p>{cliente.email}</p>

                        <strong>Endereço:</strong>
                        <p>{cliente.endereco}</p>
                    </li>
                ))}
            </ul>
            <h1>Produtos cadastrados</h1>
            <Link to={"/cadastro/produto"}>
                <button type="button">
                    Cadastrar
                </button>
            </Link>
            <ul>
                {
                   produtos.map((produto, i) => {
                       return(
                            <li key={produto.nome}>
                                <strong>Nome:</strong>
                                <p>{produto.nome}</p>

                                <strong>Descrição:</strong>
                                <p>{produto.descricao}</p>

                                <strong>Estoque:</strong>
                                <p>{produto.estoque}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}