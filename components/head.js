import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Hack Club Design Awards";
    const description = "A design competition for Hack Clubbers by Hack Clubbers.";
    const keywords = "design";
    const author = "Hack Club";
    const twitter = "@hackclub";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:url" content="put it in this quotes" /> {/* This is where you put the domain */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {/* Add analytics here */}
            {children}
        </Head>
    )
}
