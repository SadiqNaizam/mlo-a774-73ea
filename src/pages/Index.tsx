import React from 'react';

import ActionLinks from '../components/Login/ActionLinks';
import LoginForm from '../components/Login/LoginForm';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * Renders the main login page for the application.
 * This page component assembles the primary layout, the login form,
 * and supplementary action links into a single, cohesive view.
 * It utilizes a centralized layout to present the login interface
 * in the middle of the screen, following the specified design.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        This container enforces the login box width and vertical stacking.
        'max-w-sm' creates a responsive container suitable for forms, aligning with
        the visual goal of the 'w-1/4' requirement on typical desktop screens.
        'space-y-4' provides the specified vertical spacing between the form and the links.
      */}
      <div className="w-full max-w-sm space-y-4 px-4 sm:px-0">
        <LoginForm />
        <ActionLinks />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
