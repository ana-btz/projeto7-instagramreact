import React, { useState } from "react"

export default function Posts() {
    const posts = [
        {
            imgUsuario: "assets/img/meowed.svg",
            usuario: "meowed",
            imgPost: "assets/img/gato-telefone.svg",
            imgSeguidor: "assets/img/respondeai.svg",
            seguidor: "respondeai",
            likes: 128523
        },

        {
            imgUsuario: "assets/img/barked.svg",
            usuario: "barked",
            imgPost: "assets/img/dog.svg",
            imgSeguidor: "assets/img/adorable_animals.svg",
            seguidor: "adorable_animals",
            likes: 305299
        }
    ]

    return (
        <div className="posts">
            {posts.map((p, indice) =>
                <Post
                    key={indice}
                    imgUsuario={p.imgUsuario}
                    usuario={p.usuario}
                    imgPost={p.imgPost}
                    imgSeguidor={p.imgSeguidor}
                    seguidor={p.seguidor}
                    likes={p.likes}
                />
            )}
        </div>
    )
}

function Post(props) {
    const
        [corDoSave, setCorDoSave] = useState(""),
        [corDoLike, setCorDoLike] = useState(""),
        [likes, setLikes] = useState(props.likes),
        [contornoDoSave, setContornoDoSave] = useState("bookmark-outline"),
        [contornoDoLike, setContornoDoLike] = useState("heart-outline")

    function savePost() {
        if (contornoDoSave === "bookmark-outline") {
            setContornoDoSave("bookmark")
        } else {
            setContornoDoSave("bookmark-outline")
        }
    }

    function curtirPost() {
        if (corDoLike === "") {
            setCorDoLike("vermelho")
            setContornoDoLike("heart")
            setLikes(likes + 1)
        } else {
            setCorDoLike("")
            setContornoDoLike("heart-outline")
            setLikes(likes - 1)
        }
    }

    function curtirPelaImg() {
        if (corDoLike === "") {
            setCorDoLike("vermelho")
            setContornoDoLike("heart")
            setLikes(likes + 1)
        }
    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUsuario} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img
                    src={props.imgPost}
                    onDoubleClick={curtirPelaImg}
                    data-test="post-image"
                />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div className={corDoLike}>
                        <ion-icon
                            name={contornoDoLike}
                            onClick={curtirPost}
                            data-test="like-post">
                        </ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className={corDoSave}>
                        <ion-icon
                            name={contornoDoSave}
                            onClick={savePost}
                            data-test="save-post">
                        </ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgSeguidor} />
                    <div className="texto">
                        Curtido por <strong>{props.seguidor}</strong> e <strong data-test="likes-number"> outras {likes.toLocaleString("pt-BR")} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}