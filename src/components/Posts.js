import React, { useState } from "react"

export default function Posts() {
    const posts = [
        {
            imgUsuario: "assets/img/meowed.svg",
            usuario: "meowed",
            imgPost: "assets/img/gato-telefone.svg",
            imgSeguidor: "assets/img/respondeai.svg",
            eguidor: "respondeai",
            likes: 101523
        },

        {
            imgUsuario: "assets/img/barked.svg",
            usuario: "barked",
            imgPost: "assets/img/dog.svg",
            imgSeguidor: "assets/img/adorable_animals.svg",
            seguidor: "adorable_animals",
            likes: 298123
        }
    ]

    return (
        <div class="posts">
            {posts.map((p) =>
                <Post
                    imgUsuario={p.imgUsuario}
                    usuario={p.usuario}
                    imgPost={p.imgPost}
                    imgSeguidor={p.imgSeguidor}
                    seguidor={p.seguidor}
                    likes={p.likes} />)}
        </div>
    )
}

function Post(props) {
    const [corIcone, setCorIcone] = useState("")
    const [contorno, setContorno] = useState("-outline")

    function salvar() {
        setCorIcone("salvo")
        setContorno("")
    }

    const [corDoLike, setCorDoLike] = useState("")
    const [contornoDoLike, setContornoDoLike] = useState("-outline")
    const [likes, setLikes] = useState(props.likes)

    function curtir() {
        if (corDoLike === "") {
            setCorDoLike("curtido")
            setContornoDoLike("")
            setLikes(likes + 1)
        } else {
            setCorDoLike("")
            setContornoDoLike("-outline")
            setLikes(likes - 1)
        }
    }

    const [imgPost, setImgPost] = useState(props.imgPost)

    function curtirPelaImg() {
        if (corDoLike === "") {
            setCorDoLike("curtido")
            setContornoDoLike("")
            setLikes(likes + 1)
        }
    }

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
                <img src={imgPost} onDoubleClick={curtirPelaImg} data-test="post-image" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon
                            name={"heart" + contornoDoLike}
                            class={corDoLike}
                            onClick={curtir}
                            data-test="liske-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={"bookmark" + contorno} class={corIcone} onClick={salvar} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgSeguidor} />
                    <div class="texto">
                        Curtido por <strong>{props.seguidor}</strong> e <strong data-test="like-number">outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}