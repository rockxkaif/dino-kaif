import { useEffect, useRef, useCallback } from 'react';

// YouTube IFrame API types
interface YTWindow extends Window {
  YT?: {
    Player: new (...args: any[]) => YTPlayer;
    PlayerState: {
      UNSTARTED: number;
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
  };
  onYouTubeIframeAPIReady?: () => void;
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
}

// Load YouTube IFrame API script
const loadYouTubeAPI = (): Promise<void> => {
  return new Promise((resolve) => {
    const w = window as YTWindow;
    
    if (w.YT?.Player) {
      resolve();
      return;
    }

    w.onYouTubeIframeAPIReady = () => {
      resolve();
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  });
};

// Hook to initialize YouTube API
export const useYouTubeAPI = (iframeRef: React.RefObject<HTMLIFrameElement> | null) => {
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    loadYouTubeAPI();
  }, []);

  const initPlayer = useCallback(async () => {
    if (!iframeRef?.current) return;

    const w = window as YTWindow;
    if (!w.YT?.Player) return;

    try {
      playerRef.current = new w.YT.Player(iframeRef.current, {
        events: {
          onReady: () => {
            console.log('YouTube player ready');
          },
          onStateChange: () => {
            // YouTube state changed
          },
          onError: (event: any) => {
            console.error('YouTube Player Error:', event.data);
          },
        },
      });
    } catch (error) {
      console.error('Failed to initialize YouTube player:', error);
    }
  }, [iframeRef]);

  return {
    initPlayer,
  };
};
