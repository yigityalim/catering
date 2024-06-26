'use client';

import {
  Carousel as CarouselPrimitive,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Legend,
  Pie,
  PieChart,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];

const pages = ['Analitik', 'Kartlar'] as const;

type Page = (typeof pages)[number];

export function Carousel() {
  const [page, setPage] = React.useState<Page>(pages[0]);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 py-1">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-2 md:hidden">
        <div className="flex w-full flex-row items-center justify-center">
          {pages.map((item) => (
            <button key={item} className={cn('relative w-full')} onClick={() => setPage(item)}>
              {item === page && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 rounded bg-foreground mix-blend-difference"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item}
            </button>
          ))}
        </div>
        {page === pages[0] ? (
          <CarouselPrimitive className="w-full">
            <CarouselContent className="w-full">
              {mock.map((item) => (
                <CarouselItem key={item.id} className="w-full">
                  <Card className="w-full p-2">
                    <CardContent className="flex aspect-square items-center justify-center">
                      {item.element}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </CarouselPrimitive>
        ) : (
          <div className="flex w-full flex-col items-center justify-center gap-4">
            {mock.map((item) => (
              <Card key={item.id} className="w-full p-2">
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <div className="hidden h-full w-full md:block"></div>
    </div>
  );
}

const mock = [
  {
    id: crypto.randomUUID(),
    title: 'Title 1',
    description: 'Description 1',
    image: 'https://via.placeholder.com/150',
    element: (
      <AreaChart
        width={250}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    ),
  },
  {
    id: crypto.randomUUID(),
    title: 'Title 2',
    description: 'Description 2',
    image: 'https://via.placeholder.com/150',
    element: (
      <BarChart width={250} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    ),
  },
  {
    id: crypto.randomUUID(),
    title: 'Title 3',
    description: 'Description 3',
    image: 'https://via.placeholder.com/150',
    element: (
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    ),
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
