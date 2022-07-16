function UserContainer(props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <strong>{props.username}</strong> {props.user}
            </div>
        </div>
    )
}


export default function UserSidebar() {
    return (
        <UserContainer image='assets/img/catanacomics.svg' username='catanacomics' user='Catana' />
    )
}