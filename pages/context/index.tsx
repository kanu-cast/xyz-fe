import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

interface ContextProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentUserLoggedIn: boolean;
  setIsCurrentUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentUserId: string;
  setCurrentUserId: React.Dispatch<React.SetStateAction<string>>;
  currentUserRole: string;
  setCurrentUserRole: React.Dispatch<React.SetStateAction<string>>;
  currentUserFullname: string;
  setCurrentUserFullname: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextProps | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [isCurrentUserLoggedIn, setIsCurrentUserLoggedIn] =
    useState<boolean>(false);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [currentUserRole, setCurrentUserRole] = useState<string>('');
  const [currentUserFullname, setCurrentUserFullname] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    const usernames = window.localStorage.getItem('full_name');
    const userId = window.localStorage.getItem('user_id');
    const userRole = window.localStorage.getItem('role');
    if (usernames && userId && userRole) {
      setIsCurrentUserLoggedIn(true);
      setCurrentUserRole(userRole);
      setCurrentUserId(userId);
      setCurrentUserFullname(usernames);
    }
  }, []);
  useEffect(() => {
    if (!isCurrentUserLoggedIn) {
      router.push('/');
    }
  }, [isCurrentUserLoggedIn]);

  const value = {
    isSideMenuOpen,
    setIsSideMenuOpen,
    currentUserFullname,
    setCurrentUserFullname,
    currentUserRole,
    setCurrentUserRole,
    currentUserId,
    setCurrentUserId,
    isCurrentUserLoggedIn,
    setIsCurrentUserLoggedIn,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
