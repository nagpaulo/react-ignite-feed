import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={ styles.avatar } src="https://avatars.githubusercontent.com/u/4981854?v=4" alt="" />
            
            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Paulo Roberto</strong>
                            <time title="11 de Maio ás 08:13h" dateTime="2024-07-17 10:48:30">Publicado há 1h</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>                        
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>            
        </div>
    )
}