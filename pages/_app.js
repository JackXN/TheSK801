import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const theme = extendTheme();
  
return (
  <ChakraProvider theme={theme}>
 <Component {...pageProps} />
 </ChakraProvider>
)
}

export default MyApp
