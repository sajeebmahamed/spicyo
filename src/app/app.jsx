import { Helmet } from 'react-helmet';
import AppRouter from './router';

function App() {
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
                <title>Spicyo</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Helmet>
            <AppRouter />
        </>
    );
}

export default App;
