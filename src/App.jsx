import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './assets/css/global.css'
import styles from  './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
        <Post 
          author="Bebeto"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur fugit aliquid quos deleniti quam reprehenderit sapiente delectus? Voluptas hic, consectetur libero doloremque adipisci tempora accusantium natus repellendus repellat assumenda numquam." 
        />
        <Post 
          author="Nagila"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur fugit aliquid quos deleniti quam reprehenderit sapiente delectus? Voluptas hic, consectetur libero doloremque adipisci tempora accusantium natus repellendus repellat assumenda numquam." 
        />
        </main>
      </div>
    </>
  )
}


export default App
