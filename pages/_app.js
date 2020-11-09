import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp;