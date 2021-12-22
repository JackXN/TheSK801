// Components
import Head from 'next/head';
import Hero from '../components/containers/Homepage/Hero/index';
import BgImage from '../public/HeroBg.png'
import {Box} from '@chakra-ui/react'

// Styling

// Icons



export default function Home() {
  return (
   <>
   <Head>
     <title>The SK801</title>
   </Head>
<Hero/>


   </>
  )
}
