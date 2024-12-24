import type { Playlist, Track } from "./type"

type SonarOptions = {
  tracks: Track[]
  bgm: Track[]
}

export class Sonar {
  playlist: Playlist
  tracks: Track[]
  bgm: Track[]

  constructor({ tracks, bgm }: SonarOptions) {
    this.tracks = tracks
    this.bgm = bgm
    this.playlist = []
  }
}
