import React from 'react'

interface LayoutProps {children: React.ReactNode;}
//RECIBIRA 'children' COMO PROP Y RENDERIZARA CUALQUIER CONTENIDO PASADO DENTRO

    const Layout: React.FC<LayoutProps> = ( {children} ) => {
  return (
    <div className='min-h-screen'>

        <header className='shadow'>
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold'>X MACROS</h1>
            </div>
        </header>
        
        <main className='items-center'>{children}</main>

        <footer className=''>
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <p className='text-sm'>&copy; 2024 X Macros</p>
            </div>
        </footer>

    </div>
  );
};

export default Layout;