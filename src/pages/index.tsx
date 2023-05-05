/* eslint-disable no-undef */
import { Head } from '@/components/shared';
import { Header } from '@/features/home';
import '../features/home/hovertree';

export default function Home() {
    return (
        <>
            <Head title="La Võ Minh Quân - Web developer" />
            <div className="relative h-screen w-full">
                <canvas id="canvas"></canvas>
                <Header />
            </div>
        </>
    );
}
