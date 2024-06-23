import { makeAutoObservable } from "mobx";
import { IPlayerStore, TrackTime } from "../types";

class PlayerStore implements IPlayerStore {
  isPlaying;
  isPaused;
  currentTime;
  trackDuration;
  currentTrack;

  constructor() {
    this.isPaused = false;
    this.currentTrack = { title: "Трек", artist: "Исполнитель" };
    this.currentTime = { min: 0, sec: 0 };
    this.trackDuration = "0:00";
    this.isPlaying = false;
    makeAutoObservable(this);
  }

  changePlayStatus() {
    this.isPlaying = !this.isPlaying;
  }

  setCurrentTime({ min, sec }: TrackTime) {
    this.currentTime = { min, sec };
  }

  setTrackDuration(duration: string) {
    this.trackDuration = duration;
  }

  setIsPaused() {
    this.isPaused = true;
  }

  setIsUnpaused() {
    this.isPaused = false;
  }
}

export const playerStore = new PlayerStore();
