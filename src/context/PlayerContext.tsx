import React, { createContext, useContext, useMemo, useRef, useState } from 'react';
import { Video, allVideos } from '../data/videos';

export type PlayerMode = 'full' | 'mini' | 'closed';

export type PlayerState = {
  activeVideo: Video | null;
  playerMode: PlayerMode;
  currentTime: number;
  isDragging: boolean;
  iframeRef: React.RefObject<HTMLIFrameElement> | null;
};

type PlayerContextValue = PlayerState & {
  setActiveVideo: (video: Video) => void;
  closePlayer: () => void;
  setPlayerMode: (mode: PlayerMode) => void;
  setCurrentTime: (time: number) => void;
  setIsDragging: (isDragging: boolean) => void;
  setIframeRef: (ref: React.RefObject<HTMLIFrameElement>) => void;
  findVideoById: (id: string) => Video | undefined;
  switchVideo: (video: Video) => void;
};

const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeVideo, setActiveVideoState] = useState<Video | null>(null);
  const [playerMode, setPlayerMode] = useState<PlayerMode>('closed');
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const setActiveVideo = (video: Video) => {
    setActiveVideoState(video);
    setPlayerMode('full');
    setCurrentTime(0);
  };

  const switchVideo = (video: Video) => {
    setActiveVideoState(video);
    setCurrentTime(0);
    // Do NOT change playerMode - keep it in same state (full or mini)
  };

  const closePlayer = () => {
    setActiveVideoState(null);
    setPlayerMode('closed');
    setCurrentTime(0);
  };

  const setIframeRef = (ref: React.RefObject<HTMLIFrameElement>) => {
    iframeRef.current = ref.current;
  };

  const findVideoById = (id: string) => allVideos.find((video) => video.id === id);

  const value = useMemo(
    () => ({
      activeVideo,
      playerMode,
      currentTime,
      isDragging,
      iframeRef,
      setActiveVideo,
      closePlayer,
      setPlayerMode,
      setCurrentTime,
      setIsDragging,
      setIframeRef,
      findVideoById,
      switchVideo,
    }),
    [activeVideo, playerMode, currentTime, isDragging],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
};
