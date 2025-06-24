import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered within the layout.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names for the main container.
   */
  className?: string;
}

/**
 * A simple layout component that centers its content on the screen.
 * It provides a full-height, flex-centered container, perfect for pages like login or sign-up.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
