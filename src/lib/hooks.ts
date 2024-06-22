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
