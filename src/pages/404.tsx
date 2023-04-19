import { BaseLayout } from '@/components/layouts';
// import { Button, Head, Section } from '@/components/shared';
// import Link from 'next/link';

function ErrorPage() {
    return (
        // <div className="relative flex min-h-screen w-full items-center">
        //     <Head title={`Page not found - LaVoMinhQuan`} />

        //     <div className="fixed z-0 flex h-full w-full items-center justify-center">
        //         <h1 className="text-[30vw] font-bold text-gray-500">404</h1>

        //         <div className="absolute inset-0 h-full w-full bg-black/90"></div>
        //     </div>

        //     <Section className="relative z-10 flex h-full w-full flex-col items-center text-center">
        //         <div className="mb-4 text-gray-300">
        //             <span className="text-lg">
        //                 Chào mừng đến với{' '}
        //                 <span className="text-red-300">
        //                     chiều không gian 404
        //                 </span>
        //             </span>
        //         </div>

        //         <p className="text-4xl font-semibold">Error heading</p>

        //         <p className="mt-4 text-2xl text-gray-200">Error description</p>

        //         <Link href="/">
        //             <Button primary outline className="mt-8">
        //                 <p className="text-lg">Trở lại</p>
        //             </Button>
        //         </Link>
        //     </Section>
        // </div>
        <div>Error: page not found</div>
    );
}

// eslint-disable-next-line react/display-name
ErrorPage.Layout = (page: any) => (
    <BaseLayout showSidebar={false}>{page}</BaseLayout>
);

export default ErrorPage;
