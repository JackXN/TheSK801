// Components
import {Box} from '@chakra-ui/react';
import Navbar from '../Nav/Navbar';
import Image from 'next/image';
// Styles
import styles from '../../../../styles/Homepage/Hero';


// Images


function index() {
    return (
        <>
        <Navbar/>
  <Box height='100vh' sx={styles.container}>
      <Box sx={styles.imageContainer}>
          <Image src='/SK801Logo.png' alt="SK801 Logo" width='100%' height='100%'/>
      </Box>
  </Box>
  </>
    )
}

export default index
