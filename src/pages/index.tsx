import { ClientOnly, Head } from '@/components/shared';
import { Header } from '@/features/home';

export default function Home() {
    return (
        <ClientOnly>
            <Head title="La Võ Minh Quân - Web developer" />
            <Header />
        </ClientOnly>
    );
}
