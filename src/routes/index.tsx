import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: AudioPlayer,
})

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      void audio.play()
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <audio
        ref={audioRef}
        src="https://cdn.shipper.now/audio/users/cmjd6nr540001l104hue4y69r/1779450703190-qh1hozpqfti-sample-15s.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />
      <button
        onClick={toggle}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        className="group relative flex h-32 w-32 items-center justify-center rounded-full bg-white text-zinc-950 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] active:scale-95"
      >
        {isPlaying ? (
          <svg
            className="h-12 w-12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg
            className="h-12 w-12 translate-x-1"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.4-6.86a1 1 0 0 0 0-1.7L9.53 4.29A1 1 0 0 0 8 5.14Z" />
          </svg>
        )}
      </button>
    </div>
  )
}
