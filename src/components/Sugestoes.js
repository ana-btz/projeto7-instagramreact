export default function Sugestoes() {

    const sugestoes = [
        {
            foto: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você",
            seguir: "Seguir"
        },
        {
            foto: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você",
            seguir: "Seguir"
        },
        {
            foto: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram",
            seguir: "Seguir"
        },
        {
            foto: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você",
            seguir: "Seguir"
        },
        {
            foto: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você",
            seguir: "Seguir"
        }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((s, indice) =>
                <Sugestao
                    key={indice}
                    foto={s.foto}
                    nome={s.nome}
                    razao={s.razao}
                    seguir={s.seguir}
                />
            )}

        </div>
    )
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.foto} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>

            <div className="seguir">{props.seguir}</div>
        </div>
    )
}