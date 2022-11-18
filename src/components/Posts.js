export default function Posts() {
    const posts = [
        { imgUsuario: "assets/img/meowed.svg", usuario: "meowed", imgPost: "assets/img/gato-telefone.svg", imgSeguidor: "assets/img/respondeai.svg", seguidor: "respondeai" },
        { imgUsuario: "assets/img/barked.svg", usuario: "barked", imgPost: "assets/img/dog.svg", imgSeguidor: "assets/img/adorable_animals.svg", seguidor: "adorable_animals" }
    ]

    return (
        <div class="posts">
            {posts.map((p) => <Post imgUsuario={p.imgUsuario} usuario={p.usuario} imgPost={p.imgPost} imgSeguidor={p.imgSeguidor} seguidor={p.seguidor} />)}
        </div>
    )
}

function Post(props) {
    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} data-test="post-image" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" data-test="liske-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgSeguidor} />
                    <div class="texto">
                        Curtido por <strong>{props.seguidor}</strong> e <strong data-test="like-number">outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}