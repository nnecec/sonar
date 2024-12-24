"use client"

import { preview, Track, mergeTracks } from "./sonar"
import { useRef, useState } from "react"
import { useInterval } from "@reactuses/core"
import { trackConfig } from "./utils/data"

function App() {
  const [interval, setInterval] = useState<number | null>(null)
  const [count, setCount] = useState(0)
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)

  useInterval(() => {
    setCount(count + 1)
  }, interval)

  return (
    <div className="container py-10 mx-auto ">
      <div className="flex gap-3">
        <button
          type="button"
          className="btn"
          disabled={!!interval}
          onClick={() => {
            const audioContext = new AudioContext()

            mergeTracks(trackConfig).then((audioBuffer) => {
              const source = preview({ audioContext, audioBuffer })
              sourceRef.current = source
              source.start()
              setInterval(1000)

              source.onended = () => {
                setInterval(null)
                setCount(0)
              }
            })
          }}
        >
          {interval ? "Playing" : "Play"}
        </button>
        <button
          type="button"
          disabled={!interval}
          className="btn"
          onClick={() => {
            sourceRef.current?.stop()
            setInterval(null)
            setCount(0)
          }}
        >
          Stop
        </button>
      </div>
      <div>计时: {count} 秒</div>
    </div>
  )
}

export default App
