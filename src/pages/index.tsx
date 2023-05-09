/* eslint-disable no-undef */
import { Head } from '@/components/shared';
import { Header } from '@/features/home';
import '../features/home/hovertree';

export default function Home() {
    return (
        <>
            <Head
                title="La Võ Minh Quân - Front-end developer"
                description="La Võ Minh Quân  là một Front End Developer tại thành phố Hồ Chí Minh. Anh ấy là một 👨‍💻 developer, ✒️ blogger và 👨‍🎓 mentor dạy lập trình website"
            />
            <div className="relative h-screen w-full">
                <canvas id="canvas"></canvas>
                <Header />
            </div>
        </>
    );
}
