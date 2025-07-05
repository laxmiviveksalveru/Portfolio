import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const checkMatch = () => {
      setIsMatch(window.innerWidth >= breakpoints[breakpoint]);
    };

    // Initial check
    checkMatch();

    // Add event listener
    window.addEventListener('resize', checkMatch);

    // Cleanup
    return () => window.removeEventListener('resize', checkMatch);
  }, [breakpoint]);

  return isMatch;
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

export function useIsMobile(): boolean {
  return !useBreakpoint('md');
}

export function useIsTablet(): boolean {
  const isMd = useBreakpoint('md');
  const isLg = useBreakpoint('lg');
  return isMd && !isLg;
}

export function useIsDesktop(): boolean {
  return useBreakpoint('lg');
}
