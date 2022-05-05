
import { FaAccusoft, FaGamepad, Fa500Px, FaBook, FaBriefcase, FaAngellist } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'tv shows', icon: <FaAngellist />, url: '/products' },
      { label: 'movies', icon: <FaAngellist />, url: '/products' },
      { label: 'anime', icon: <FaAngellist />, url: '/products' },
    ],
  },
  {
    page: 'community',
    links: [
      { label: 'friends', icon: <Fa500Px />, url: '/products' },
      { label: 'discord', icon: <Fa500Px />, url: '/products' },
      { label: 'costumes', icon: <Fa500Px />, url: '/products' },
      { label: 'help', icon: <Fa500Px />, url: '/products' },
    ],
  },
  {
    page: 'meet-ups',
    links: [
      { label: 'your location', icon: <FaGamepad />, url: '/products' },
      { label: 'online', icon: <FaGamepad />, url: '/products' },
    ],
  },
];

export default sublinks;