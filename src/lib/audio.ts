import { useRef } from "react";

let audioInstance: HTMLAudioElement | null = null;

export function getAudio(src: string): HTMLAudioElement {
  if (!audioInstance) {
    audioInstance = new Audio(src);
    audioInstance.loop = true;
    audioInstance.volume = 0.5;
  }
  return audioInstance;
}