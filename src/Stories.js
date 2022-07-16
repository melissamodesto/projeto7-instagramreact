const storiesList = [
    {
        image: 'assets/img/9gag.svg',
        username: '9gag'
    },
    {
        image: 'assets/img/meowed.svg',
        username: 'meowed'
    },
    {
        image: 'assets/img/barked.svg',
        username: 'barked'
    },
    {
        image: 'assets/img/nathanwpylestrangeplanet.svg',
        username: 'nathanwpylestrangeplanet'
    },
    {
        image: 'assets/img/wawawicomics.svg',
        username: 'wawawicomics'
    },
    {
        image: 'assets/img/respondeai.svg',
        username: 'respondeai'
    },
    {
        image: 'assets/img/filomoderna.svg',
        username: 'filomoderna'
    },
    {
        image: 'assets/img/memeriagourmet.svg',
        username: 'memeriagourmet'
    }]

function StoriesContainer(props) {


    return (

        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.username}
            </div>
        </div>

    )
}

export default function Stories() {

    return (
        <div class="stories">
            {storiesList.map(story =>
                <StoriesContainer
                    image={story.image}
                    username={story.username} />
            )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );

}