import React from 'react';

export function useMediaQuery(query: string): boolean {
  const [value, setValue] = React.useState<boolean>(false);

  const onChange = React.useCallback((e: MediaQueryListEvent) => {
    setValue(e.matches);
  }, []);

  React.useEffect(() => {
    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
}

export function useResponsive() {
  return {
    sm: useMediaQuery('(max-width: 640px)'),
    md: useMediaQuery('(max-width: 768px)'),
    lg: useMediaQuery('(max-width: 1024px)'),
    xl: useMediaQuery('(max-width: 1280px)'),
  };
}

export function useScroll(threshold: number | string = 50): {
  isScrolled: boolean;
  isScrolling: boolean;
} {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  const scrollTimeoutRef = React.useRef<number | null>(null);

  React.useEffect((): (() => void) => {
    function handleScroll() {
      setIsScrolled(window.scrollY > Number(threshold));

      if (!isScrolling) setIsScrolling(true);

      if (scrollTimeoutRef.current !== null) clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = window.setTimeout(() => void setIsScrolling(false), 150);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [threshold, isScrolling]);

  return {
    isScrolled,
    isScrolling,
  };
}
