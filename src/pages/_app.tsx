import '@/styles/globals.scss';
import '@/styles/contact.scss';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/prism.css';

import nextI18nextConfig from '../../next-i18next.config';
import { appWithTranslation } from 'next-i18next';
import { Fragment, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AppPropsWithLayout } from '@/types/layout.type';
import { ToastContainer } from 'react-toastify';
import { AppErrorFallback } from '@/components/shared';
import { BaseLayout } from '@/components/layouts';
import { AppProvider } from '@/contexts/app.context';

function App({ Component, pageProps }: AppPropsWithLayout) {
    const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

    const Layout =
        Component.Layout || ((page) => <BaseLayout>{page}</BaseLayout>);

    return (
        <Fragment>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ErrorBoundary
                onError={(error, info) => {
                    setErrorInfo(info);
                }}
                fallbackRender={(fallbackProps) => {
                    return (
                        <AppErrorFallback
                            {...fallbackProps}
                            errorInfo={errorInfo}
                        />
                    );
                }}
            >
                <AppProvider>
                    {Layout(<Component {...pageProps} />)}
                </AppProvider>
            </ErrorBoundary>
        </Fragment>
    );
}

export default appWithTranslation(App, nextI18nextConfig);
