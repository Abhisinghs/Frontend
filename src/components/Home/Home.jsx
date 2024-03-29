import React from "react";
import {Box, Button, HStack, Heading, Image, Stack, Text, VStack} from '@chakra-ui/react'
import './Home.css'
import { Link } from "react-router-dom";
import vg from '../../assets/images/bg2.png'
import {CgGoogle,CgYoutube } from "react-icons/cg";
import {SiCoursera,SiUdemy} from 'react-icons/si'
import{DiAws} from 'react-icons/di'
import introVideo from '../../assets/videos/intro.mp4'

//define home function 
function Home(){
    return <section className="home">
      <div className="container">
            <Stack 
               direction={["column","row"]}
               height='100%'
               justifyContent={["center","space-between"]}
               alignItems="center"
               spacing={['16','56']}

            >
                <VStack width={"full"}  spacing="4" alignItems={["center","flex-end"]}>
                    <Heading 
                      fontSize="3xl" 
                      children="LEARN FROM THE EXPERTS" 
                     />
                    <Text
                      paddingBottom={"2px"}
                      fontFamily="cursive"
                      textAlign={['center',"left"]} 
                      children="Find Valuable Content at Reasonable Price"/>
                    <Link to='/courses'>
                        <Button size={'md'} colorScheme="blue">
                            Explore Now
                        </Button>
                    </Link>
                </VStack>
                 <Image
                  className="vector-graphics"
                   boxSize={"md"} 
                   src={vg} 
                   objectFit='contain' 
                 
                  />
            </Stack>
      </div>

         <Box padding={'4'} bg="blackAlpha.800">
            <Heading
               textAlign={'center'}
               fontFamily="body"
               color={'blue.400'}
               children="OUR BRANDS"
            />
            <HStack className="brandsBanner" justifyContent={"space-evenly"} marginTop="4">
               <CgGoogle/>
               <CgYoutube/>
               <SiCoursera/>
               <SiUdemy/>
               <DiAws/> 
            </HStack>
         </Box>

         <div className="container2">
            <video
            controls 
            controlsList="nodownload nofullscreen noremoteplayback" 
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            ></video>
         </div>
    </section>
}

//export 
export default Home;