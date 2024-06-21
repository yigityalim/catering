import React from 'react';

export type PropsWithChildren<P = unknown> = Readonly<React.PropsWithChildren<P>>;

export type Params<T extends object> = Readonly<{
  params: {
    [K in keyof T]: string;
  };
}>;

export type SearchParams<T extends object> = Readonly<{
  searchParams: {
    [K in keyof T]: string;
  };
}>;

export type PropsWithParams<T extends object> = PropsWithChildren<Params<T>>;
export type PropsWithSearchParams<T extends object> = PropsWithChildren<SearchParams<T>>;
