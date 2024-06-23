export type TrackTime = {
  min: number;
  sec: number;
};

type TrackInfo = {
  title: string;
  artist: string;
};

export interface IPlayerStore {
  isPlaying: boolean;
  isPaused: boolean;
  currentTrack: TrackInfo;
  currentTime: TrackTime;
  trackDuration: string;
}

export interface ICoverStore {
  isHovered: boolean;
}
