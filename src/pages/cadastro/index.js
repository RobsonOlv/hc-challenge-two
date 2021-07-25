import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import './styles.css';


export default function Cadastro(){

    let { name } = useParams();
    let formN, formM, formE;

    if(name == "cliente"){
        formN = 'Nome';
        formM = 'E-mail';
        formE = 'Endereço';       
    } else {
        formN = 'Nome';
        formM = 'Descrição';
        formE = 'Estoque';   
    }

    const [formNv, setformNv] = useState('');
    const [formMv, setformMv] = useState('');
    const [formEv, setformEv] = useState('');

    function submit(formN, formM, formE){
        let data = [];
    
        if(localStorage.getItem(name) != null){
          data = JSON.parse(localStorage.getItem(name));
        }

        if(name == "cliente"){
            data.push({nome: formN, email: formM, endereco:formE});
        } else {
            data.push({nome: formN, descricao: formM, estoque:formE});
        }
        localStorage.setItem(name, JSON.stringify(data));
        alert(name + " cadastrado com sucesso!");
      }


    return(
        <div className="Cadastro-container">
            <section className="form">
                    <div class="title">
                    <h1>Cadastre o {name}</h1>
                    <Link to={"/"}>
                        <button type="button">
                            Voltar
                        </button>
                    </Link>
                    </div>

                    <input 
                    placeholder={formN}
                    value={formNv}
                    onChange={e => setformNv(e.target.value)}
                    />

                    <input 
                    placeholder={formM}
                    value={formMv}
                    onChange={e => setformMv(e.target.value)}
                    />

                    <input 
                    placeholder={formE}
                    value={formEv}
                    onChange={e => setformEv(e.target.value)}
                    />

                    <button className = "button" type="submit" onClick={() => submit(formNv, formMv, formEv)}>Cadastrar</button>
            </section>
        </div>
    );
}