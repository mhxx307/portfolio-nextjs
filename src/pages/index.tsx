import { ClientOnly, Head } from '@/components/shared';
import { Header } from '@/features/home';
import About from './about';
import ProjectPage from './project';

export default function Home() {
    return (
        <ClientOnly>
            <Head title="La Võ Minh Quân - Web developer" />
            <Header />
            <About />
            <ProjectPage />
        </ClientOnly>
    );
}
