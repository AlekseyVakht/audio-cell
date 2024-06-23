import { makeAutoObservable } from "mobx";

interface ICoverStore {
  isHovered: boolean;
}

class CoverStore implements ICoverStore {
  isHovered: boolean;

  constructor() {
    this.isHovered = false;
    makeAutoObservable(this);
  }

  setIsHovered() {
    this.isHovered = true;
  }

  setIsUnhovered() {
    this.isHovered = false;
  }
}

export const coverStore = new CoverStore();
