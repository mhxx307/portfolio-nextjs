import { BaseLayoutProps } from '@/types/layout.type';
import { Sidebar } from '@/components/partials';

const BaseLayout = ({ children, showSidebar = true }: BaseLayoutProps) => {
    return (
        <main>
            {showSidebar && <Sidebar isOpen={true} />}
            <div className="app">{children}</div>
        </main>
    );
};

export default BaseLayout;
