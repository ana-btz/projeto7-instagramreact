export default function Usuario() {

    return (
        <ElementoUsuario foto="assets/img/catanacomics.svg" nick="catanacomics" nome="Catana" />
    )
}

function ElementoUsuario(props) {
    
    return (
        <div class="usuario" data-test="user">
            <img src={props.foto} data-test="profile-image" />
            <div class="texto">
                <strong>{props.nick}</strong>
                <span data-test="name">
                    {props.nome}
                    <ion-icon name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
} 