import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    id: number,
    title: string,
    postContent: string,
    linkAttachment: string,
    hashtags: string[]
}

interface PostProps {
    author: Author,
    content: Content[],
    publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
    const INITIAL_STATE = [{id: 1, comment: "Post muit bacana, hein! 👏👏"}]
    const [comments, setComments] = useState(INITIAL_STATE)
    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormate = format(publishedAt, "dd 'de' LLLL 'de' yyyy 'ás' HH:mm'h'", { locale: ptBR })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{locale: ptBR, addSuffix: true })

    const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault();
        const id = comments.length + 1;
        const newComment = {id: id, comment: newCommentText}
        setComments([...comments, newComment])
        setNewCommentText('')
    }

    const deleteComment = (commentId: number) => {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment.id != commentId
        })
        setComments(commentsWithoutDeleteOne)
    }

    const handerNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório!')

    }

    const isNewCommentsEmpty = newCommentText.length === 0

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
                {content.map((c:Content) => {
                    return (
                        <div key={c.id}>                        
                            <p>{c.title}</p>
                            <p>{c.postContent}</p>
                            <p> 👉 {' '} <a href="">{c.linkAttachment}</a> </p>
                            <p> 
                                {c.hashtags.map((tag:string) => {
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
                    onInvalid={handerNewCommentInvalid}
                    required    
                />

                <footer>
                    <button 
                        type="submit" 
                        disabled = {isNewCommentsEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={ styles.commentList }>
            {comments.map(comment => {
                return (
                    <Comment 
                        content={comment} 
                        key={comment.id} 
                        onDeleteComment={deleteComment}
                    />
                )
            })}
            </div>
        </article>

    )
}