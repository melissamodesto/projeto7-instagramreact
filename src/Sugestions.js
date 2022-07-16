const userSugestions = [
    {
        image: 'assets/img/bad.vibes.memes.svg',
        username: 'bad.vibes.memes',
        reasonToFollow: 'Segue você',
        follow: 'Seguir'
    },
    {
        image: 'assets/img/chibirdart.svg',
        username: 'chibirdart',
        reasonToFollow: 'Segue você',
        follow: 'Seguir'
    },
    {
        image: 'assets/img/razoesparaacreditar.svg',
        username: 'razoesparaacreditar',
        reasonToFollow: 'Novo no Instagram',
        follow: 'Seguir'
    },
    {
        image: 'assets/img/adorable_animals.svg',
        username: 'adorable_animals',
        reasonToFollow: 'Segue você',
        follow: 'Seguir'
    },
    {
        image: 'assets/img/smallcutecats.svg',
        username: 'smallcutecats',
        reasonToFollow: 'Segue você',
        follow: 'Seguir'
    }
]

function ContainerSugestion(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">{props.reasonToFollow}</div>
                </div>
            </div>
            <div class="seguir">{props.follow}</div>
        </div>
    )
}

export default function Sugestions() {

    return (
        <div class="sugestoes">
            <div class="titulo">
                <div>Sugestões para você</div>
                <div>Ver tudo</div>
            </div>

            {userSugestions.map(user =>
                <ContainerSugestion
                    image={user.image}
                    username={user.username}
                    reasonToFollow={user.reasonToFollow}
                    follow={user.follow} />
            )}

        </div>
    )
}
