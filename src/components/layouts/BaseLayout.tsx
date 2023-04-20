import { BaseLayoutProps } from '@/types/layout.type';
import { Sidebar } from '@/components/partials';
import { ThemeTemplate } from '../shared';

const BaseLayout = ({ children, showSidebar = true }: BaseLayoutProps) => {
    return (
        <main>
            {showSidebar && <Sidebar isOpen={true} />}
            <ThemeTemplate />
            <div className="app">{children}</div>
        </main>
    );
};

export default BaseLayout;
