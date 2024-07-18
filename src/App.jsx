import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './assets/css/global.css'
import styles from  './App.module.css'

const posts = [  
  {
    id: 1,
    author: {
      id: 1,
      avatarUrl: 'https://avatars.githubusercontent.com/u/26276218?v=4',
      name: 'Thiago Segato',
      role: 'Devolps, Solution Architect'
    },
    content: [
      {
        id: 1,
        title: 'Fala galeraa! 👋',
        postContent: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        linkAttachment: 'jane.design/doctorcare',
        hashtags: [
          "#novoprojeto", 
          "#nlw", 
          "#rocketseat"
        ]
      }
    ],
    publishedAt: new Date('2024-06-18 06:40:45')
  },
  {
    id: 2,
    author: {
      id: 2,
      avatarUrl: 'https://avatars.githubusercontent.com/u/14332127?v=4',
      name: 'Jeferson Inacio Macedo',
      role: 'Project Manager, Web Developer'
    },
    content: [
      {
        id: 2,
        title: 'E ai manos! 👋',
        postContent: 'Projeto realizado com sucesso. Projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é MyCare 🚀',
        linkAttachment: '👉 jane.design/doctorcare',
        hashtags: [
          "#novoprojeto", 
          "#nlw", 
          "#rocketseat"
        ]
      }
    ],
    publishedAt: new Date('2024-07-18 06:37:45')
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </>
  )
}


export default App
