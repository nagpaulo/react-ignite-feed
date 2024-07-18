import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, content, publishedAt }) {
    const INITIAL_STATE = [{id: 1, comment: "Post muit bacana, hein! 👏👏"}]
    const [comments, setComments] = useState(INITIAL_STATE)
    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormate = format(publishedAt, "dd 'de' LLLL 'de' yyyy 'ás' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBr,
        addSuffix: true
    })

    const handleNewCommentChange = () => {
        setNewCommentText(event.target.value)
    }

    const handleCreateNewComment = () => {
        event.preventDefault();
        const id = comments.length + 1;
        const newComment = {id: id, comment: newCommentText}
        setComments([...comments, newComment])
        setNewCommentText('')
    }

    return (        
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <Avatar src={author.avatarUrl} />
                    <div className={ styles.authorInfo }>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormate} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={ styles.content }>
                {content.map(c => {
                    return (
                        <div key={c.id}>                        
                            <p>{c.title}</p>
                            <p>{c.postContent}</p>
                            <p> 👉 {' '} <a href="">{c.linkAttachment}</a> </p>
                            <p> 
                                {c.hashtags.map(tag => {
                                    return <a href="" key={tag} className={ styles.hashtags }>{tag}</a>
                                })}
                            </p>
                        </div>
                    )

                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={ styles.commentForm }>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name="comment" 
                    placeholder="Escreva aqui seu comentario"
                    value={newCommentText}
                    onChange={handleNewCommentChange}    
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={ styles.commentList }>
            {comments.map(comment => {
                return <Comment content={comment} key={comment.id}/>
            })}
            </div>
        </article>

    )
}