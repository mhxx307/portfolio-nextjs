import { useRouter } from 'next/router';
import NextHead from 'next/head';

interface HeadProps {
    title?: string;
    description?: string;
    image?: string;
}

export default function Head(props: HeadProps) {
    const {
        title = 'La Võ Minh Quân',
        description = 'La Võ Minh Quân',
        image,
    } = props;

    const { asPath } = useRouter();

    const WEBSITE_URL = 'http://localhost:3000';

    return (
        <NextHead>
            <title>{title}</title>
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />

            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={WEBSITE_URL + asPath} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={WEBSITE_URL + asPath} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="LaVoMinhQuan" />
            <meta name="apple-mobile-web-app-title" content="LaVoMinhQuan" />
            <meta name="theme-color" content="#797878" />
            <meta name="msapplication-navbutton-color" content="#797878" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
            <meta name="msapplication-starturl" content="/" />
        </NextHead>
    );
}
