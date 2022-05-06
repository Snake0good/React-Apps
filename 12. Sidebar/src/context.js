import React, { useState, useContext } from 'react';
import loadingImg from './images/loading.gif'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSrc, setImageSrc] = useState('');

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setImageSrc(loadingImg)
    setIsModalOpen(true);
    // call an api from here 
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setImageSrc(data[0].url)
      })
      .catch(err => console.log(err))
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
        imgSrc
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
