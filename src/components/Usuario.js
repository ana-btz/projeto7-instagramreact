export default function Usuario() {
    return (
        <div class="usuario" data-test="user">
            <img src="assets/img/catanacomics.svg" data-test="profile-image" />
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    Catana
                    <ion-icon name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}