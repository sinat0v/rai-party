import React from 'react';

export interface Leader {
  id: number;
  name: string;
  title: string;
  role: string;
  image: string;
  telegram: string;
  link: string;
}

export interface TiltProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
}