import React from "react";

const postList = [
    {
        userImage: './assets/img/meowed.svg',
        username: 'meowed',
        postImage: 'assets/img/gato-telefone.svg',
        likeImage: 'assets/img/respondeai.svg',
        likeProfile: 'respondeai',
        likeNumbers: '101523'
    },
    {
        userImage: './assets/img/barked.svg',
        username: 'barked',
        postImage: 'assets/img/dog.svg',
        likeImage: 'assets/img/adorable_animals.svg',
        likeProfile: 'adorable_animals',
        likeNumbers: '99159'
    }
]

function PostContainer(props) {

    const [likeProfile, setLikeProfile] = React.useState(props.likeProfile);
    const [likeNum, setLikeNum] = React.useState(Number(props.likeNumbers));
    const [like, setLike] = React.useState('heart-outline');
    const [save, setSave] = React.useState('bookmark-outline');

    function likeHeart() {
        if (like === 'heart-outline') {
            setLike('heart');
            setLikeNum(likeNum + 1);
            
        } else {
            setLike('heart-outline');
            setLikeNum(likeNum - 1);
        }
    }

    function savePost() {
        if (save === 'bookmark-outline') {
            setSave('bookmark');
        } else {
            setSave('bookmark-outline');
        }
    }


    return (

        <div class="post" >
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onDoubleClick={() => {
                    if (like === 'heart-outline') {
                        setLike('heart')
                        setLikeNum(likeNum + 1);
            
                    } else {
                        setLike('heart-outline')
                        setLikeNum(likeNum - 1);
                    }

                }} src={props.postImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={likeHeart} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={savePost} name={save}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImage} />

                    <div class="texto">
                        Curtido por <strong>{props.likeProfile}</strong> e <strong>outras {likeNum} pessoas</strong>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default function Post() {

    return (


        postList.map(post =>
            <PostContainer
                userImage={post.userImage}
                username={post.username}
                postImage={post.postImage}
                likeImage={post.likeImage}
                likeProfile={post.likeProfile}
                likeNumbers={post.likeNumbers} />
        )

    )

}