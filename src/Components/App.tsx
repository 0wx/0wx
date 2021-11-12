import style from '../styles/App.module.scss'
import { Line } from './Line'
import { Main } from './Main'
import { techStack, project, link } from '../lib/info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nanoid } from 'nanoid'

function App() {
  return (
    <Main>
      <div className={style.content}>
        <div className={style.head}>
          <div className={style.picture}>
            <img
              width="100px"
              height="100px"
              src="/profile.png"
              alt="Gilang Ramadhan"
            />
            <div className={style.greet}>
              <span className={style.greetings}>Hello! My name is</span>
              <span className={style.name}>Gilang Ramadhan</span>
            </div>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.infoBox}>
            <div className={style.sectionTitle}>About Me</div>
            <p
              className={style.aboutMe}
            >{`Self-taught programmer from Semarang, Indonesia. For more than ${Math.floor(
              (Date.now() - 1553990563068) / 31536000000
            )} Years I'm learning Web development, Automation, Blockchain, and so much more.`}</p>
          </div>
          <div className={style.infoBox}>
            <div className={style.sectionTitle}>Tech Stack</div>
            <ul className={style.techStackList}>
              {techStack.map((v) => {
                return (
                  <li key={nanoid()}>
                    <div className={style.logo}>
                      <img
                        src={v.logo}
                        width={v.width}
                        height={v.height}
                        alt={v.title}
                      />
                    </div>
                    <div className={style.techDetail}>
                      <span>{v.title}</span>
                      <Line color="#007acc" length={v.line} />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={style.infoBox}>
            <div className={style.sectionTitle}>Project</div>
            <div className={style.projectBox}>
              {project.map((v) => {
                return (
                  <div className={style.project} key={nanoid()}>
                    <div className={style.projectTitle}>
                      <FontAwesomeIcon className={style.fa} icon={v.font} />
                      <a href={v.url}>{v.title}</a>
                    </div>
                    <div className={style.ProjectDescription}>
                      {v.description}
                    </div>
                    <div className={style.language}>
                      <div
                        style={{
                          backgroundColor: v.color,
                          width: 14,
                          height: 14,
                          borderRadius: '100%',
                        }}
                      />
                      <span>{v.language}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={style.infoBox}>
            <div className={style.sectionTitle}></div>
            <div className={style.projectBox}>
              <div className={style.link}>
                {link.map((v) => {
                  return (
                    <a key={nanoid()} href={v.url}>
                      <FontAwesomeIcon icon={v.logo} color="#eee" size="2x" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default App
