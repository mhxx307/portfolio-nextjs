import { BaseLayoutProps } from '@/types/layout.type';
import { Sidebar } from '@/components/partials';
import { ThemeTemplate } from '../shared';
import MobileNav from '../shared/MobileNav';

const BaseLayout = ({ children, showSidebar = true }: BaseLayoutProps) => {
    return (
        <main>
            <MobileNav />
            {showSidebar && <Sidebar isOpen={true} />}
            <ThemeTemplate />
            <div className="app">{children}</div>
        </main>
    );
};

export default BaseLayout;
