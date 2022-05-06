import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/cats',
    text: 'cats',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/cat-projects',
    text: 'cat projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/cat-calendar',
    text: 'cat calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/cat-documents',
    text: 'cat documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
];
