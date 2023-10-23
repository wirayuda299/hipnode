import type { ReactNode } from 'react';

import { ThemeProvider } from '@/components/shared/topbar/ThemeProvider';
import BottomBar from '@/components/shared/BottomBar';
import TopBar from '@/components/shared/topbar/topbar';
import NavProfileMenu from '@/components/shared/topbar/NavProfileMenu';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <TopBar>
          <NavProfileMenu />
        </TopBar>

        <main className='h-full w-full'>{children}</main>

        <BottomBar />
      </ThemeProvider>
    </main>
  );
}
