export type Track = {
  src: string
  startPosition?: number
  fadeInEnd?: number
  fadeOutStart?: number
}

export type MixedTrack = Track[]

export type Playlist = MixedTrack[]
