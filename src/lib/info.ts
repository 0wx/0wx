import { faDev, faGithub, faMedium, faNpm } from '@fortawesome/free-brands-svg-icons'
import {
  faBook,
  faEnvelope,
  faGlobe,
  faRobot,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
interface TechStack {
  title: string
  logo: string
  width: number
  height: number
  line: number
}
export const techStack: TechStack[] = [
  {
    title: 'TypeScript',
    logo: '/images/ts.png',
    width: 20,
    height: 20,
    line: 92,
  },
  {
    title: 'JavaScript',
    logo: '/images/js.png',
    width: 20,
    height: 20,
    line: 98,
  },
  {
    title: 'ReactJS',
    logo: '/images/react.png',
    width: 20,
    height: 20,
    line: 90,
  },
  {
    title: 'NextJs',
    logo: '/images/next.svg',
    width: 20,
    height: 20,
    line: 90,
  },
  {
    title: 'MongoDB',
    logo: '/images/mongo.png',
    width: 6.7,
    height: 20,
    line: 90,
  },
  {
    title: 'NodeJs',
    logo: '/images/node2.png',
    width: 18,
    height: 20,
    line: 98,
  },
  {
    title: 'Googling',
    logo: '/images/google.png',
    width: 20,
    height: 20,
    line: 100,
  },
]

interface Project {
  font: IconDefinition
  title: string
  description: string
  url: string
  language: string
  color: string
}

export const project: Project[] = [
  {
    font: faBook,
    title: 'gameoflife.js',
    description: "JavaScript Library for John Conway's popular Game of Life",
    url: 'https://github.com/0wx/gameoflife.js',
    language: 'TypeScript',
    color: '#2b7489',
  },
  {
    font: faBook,
    title: 'seed-to-color',
    description:
      'JavaScript Library for Generating random Color using seed that you prefered',
    url: 'https://github.com/0wx/seed-to-color',
    language: 'TypeScript',
    color: '#2b7489',
  },
  {
    font: faBook,
    title: 'medium-scrape',
    description: 'JavaScript Library to get content from medium.com',
    url: 'https://github.com/0wx/medium-scrape',
    language: 'JavaScript',
    color: '#f1e05a',
  },
  {
    font: faBook,
    title: 'imgbox',
    description:
      '📂 Unofficial library to upload multiple images to imgbox.com',
    url: 'https://github.com/0wx/imgbox',
    language: 'TypeScript',
    color: '#2b7489',
  },
  {
    font: faRobot,
    title: 'sikadu-bot',
    description:
      'Bot untuk mengakses sikadu.unwahas.ac.id menggunakan framework Telegraf',
    url: 'https://github.com/0wx/sikadu-bot',
    language: 'JavaScript',
    color: '#f1e05a',
  },
  {
    font: faBook,
    title: 'zippy-next',
    description:
      'Unofficial library for upload and download files from zippyshare easly',
    url: 'https://github.com/0wx/zippy-next',
    language: 'JavaScript',
    color: '#f1e05a',
  },
  {
    font: faGlobe,
    title: 'same-stream',
    description: 'Website to stream your favorite Anime',
    url: 'https://stream.yui.pw',
    language: 'TypeScript',
    color: '#2b7489',
  },
  {
    font: faBook,
    title: '0wx.github.io',
    description: 'My personal portofolio website',
    url: 'https://github.com/0wx/0wx.github.io',
    language: 'TypeScript',
    color: '#2b7489',
  },
]

interface Link {
  logo: IconDefinition
  url: string
}

export const link: Link[] = [
  {
    logo: faGithub,
    url: 'https://github.com/0wx',
  },
  {
    logo: faMedium,
    url: 'https://0wx.medium.com',
  },
  {
    logo: faDev,
    url: 'https://dev.to/0wx',
  },
  { 
    logo: faNpm, 
    url: 'https://www.npmjs.com/~0wx' 
  },
  { 
    logo: faEnvelope, 
    url: 'mailto:hai@0wx.dev' 
  },
]
