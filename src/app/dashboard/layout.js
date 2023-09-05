import React from 'react';

export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'Next Hero',
  }

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>
                Sidebar
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;