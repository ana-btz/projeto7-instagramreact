import React, {useState} from "react";

export default function Usuario() {
    return (
        <ElementoUsuario foto="assets/img/catanacomics.svg" nick="catanacomics" nome={"Catana"} />
    );
}

function ElementoUsuario(props) {
    const [nome, setNome] = useState(props.nome);
    const [foto, setFoto] = useState(props.foto);

    function alterarNome() {
        setNome(prompt("Digite seu novo nome"));
    }

    function alterarFoto() {
        setFoto(prompt("Por favor, insira o novo link"));
    }

    return (
        <div className="usuario" data-test="user">
            <img src={foto} onClick={alterarFoto} data-test="profile-image" />
            <div className="texto">
                <strong>{props.nick}</strong>
                <span data-test="name">
                    {nome ? nome : props.nome}
                    <ion-icon name="pencil" onClick={alterarNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
} 