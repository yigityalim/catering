'use client';

import {
  Carousel as CarouselPrimitive,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { useResponsive } from '@/lib/hooks';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

export function Carousel() {
  const { sm } = useResponsive();

  if (sm) {
    return (
      <div className="flex w-full items-center justify-center px-2 py-1">
        <CarouselPrimitive className="w-full">
          <CarouselContent className="w-full">
            {mock.map((item) => (
              <CarouselItem key={item.id} className="w-full basis-1/2">
                <Card className="w-full p-2">
                  <CardContent className="flex aspect-square items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselPrimitive>
      </div>
    );
  }

  return <div>tablet ekranı. eklencek</div>;
}

const mock = [
  {
    id: crypto.randomUUID(),
    title: 'Title 1',
    description: 'Description 1',
    image: 'https://via.placeholder.com/150',
    element: <div>Element 1</div>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Title 2',
    description: 'Description 2',
    image: 'https://via.placeholder.com/150',
    element: <div>Element 2</div>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Title 3',
    description: 'Description 3',
    image: 'https://via.placeholder.com/150',
    element: <div>Element 3</div>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Title 4',
    description: 'Description 4',
    image: 'https://via.placeholder.com/150',
    element: <div>Element 4</div>,
  },
  {
    id: crypto.randomUUID(),
    title: 'Title 5',
    description: 'Description 5',
    image: 'https://via.placeholder.com/150',
    element: <div>Element 5</div>,
  },
];
