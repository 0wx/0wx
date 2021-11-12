import style from '../styles/Main.module.scss'
import Game from './Game'

export const Main: React.FC = ({ children }) => {
  
  return (
    <div className={style.main}>
      <div className={style.game}>
        {window && <Game height={window.innerHeight} width={window.innerWidth} />}
      </div>
      <div className={style.content}>{children}</div>
    </div>
  )
}
