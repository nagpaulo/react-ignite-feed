import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className={ styles.siderbar }>
            <img className= { styles.cover } 
                src="https://images.unsplash.com/photo-1611647832580-377268dba7cb?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
            />
            <div className={ styles.profile }>
                <img className={ styles.avatar } src="https://avatars.githubusercontent.com/u/4981854?v=4" alt="" />
                <strong>Paulo Roberto</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}