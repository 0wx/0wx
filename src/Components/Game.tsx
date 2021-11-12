import GameOfLife from 'gameoflife.js'
import { useEffect, useRef } from 'react'
import { getInitialCell, getRandomArrow } from '../lib/getInitialCell'
interface GameProps {
  width: number
  height: number
}
export default function Game(props: GameProps) {
  const ref = useRef<HTMLCanvasElement>(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const change = (
    cells: number[][],
    data: {
      width: number
      height: number
    }
  ) => {
    if (ref.current) {
      const context = ref.current.getContext('2d')
      if (context)
        for (let i = 0; i < data.height; i++) {
          for (let j = 0; j < data.width; j++) {
            const cell = cells[i][j]
            context.fillStyle = cell ? '#2d3541' : '#222831'
            const x = j * 10
            const y = i * 10
            context.fillRect(x, y, 10, 10)
          }
        }
    }
  }
  useEffect(() => {
    const data = {
      width: Math.floor(props.width / 10),
      height: Math.floor(props.height / 10),
    }
    const game = new GameOfLife({
      ...data,
      initialCell: getInitialCell(data),
    })

    change(game.cells, data)
    setInterval(() => change(game.add(getRandomArrow(data)), data), 15000)
    setInterval(() => change(game.next(), data), 100)
    return clearInterval
  }, [props, change])

  return <canvas ref={ref} width={props.width} height={props.height} />
}
