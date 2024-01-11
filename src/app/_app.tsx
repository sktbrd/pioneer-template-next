import type { AppProps } from "next/app";
// @ts-ignore
import { PioneerProvider } from "@pioneer-sdk/pioneer-react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PioneerProvider>
            <Component {...pageProps} />
        </PioneerProvider>
    );
}

export default MyApp;
