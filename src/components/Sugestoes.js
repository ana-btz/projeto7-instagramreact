export default function Sugestoes() {

    const sugestoes = [
        { foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você", seguir: "Seguir" },
        { foto: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você", seguir: "Seguir" },
        { foto: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram", seguir: "Seguir" },
        { foto: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você", seguir: "Seguir" },
        { foto: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você", seguir: "Seguir" }
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            
            {sugestoes.map((s) => <Sugestao foto={s.foto} nome={s.nome} razao={s.razao} seguir={s.seguir} />)}

        </div>
    )
}

function Sugestao(props) {
    
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.foto} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">{props.seguir}</div>
        </div>
    )
}