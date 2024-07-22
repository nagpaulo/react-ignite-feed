import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface Content {
    id: number,
    comment: string
}

interface CommentProps {
    content: Content;
    onDeleteComment: (id: number) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const {id, comment} = content;
    const [likeCount, setLikeCount] = useState(0)

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1;
        })
    }

    const handleDeleteComment = () => {
        onDeleteComment(content.id)
    }

    return (
        <div className={styles.comment} key={id}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/26276218?v=4" />
            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Paulo Roberto</strong>
                            <time title="11 de Maio ás 08:13h" dateTime="2024-07-17 10:48:30">Publicado há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{comment}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>                        
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>            
        </div>
    )
}