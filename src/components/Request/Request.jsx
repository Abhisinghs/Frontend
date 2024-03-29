import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [course,setCourse]=useState("")
  return (
    <Container h='85vh'>
        
      <VStack h='full' justifyContent={'center'} spacing="12">
        <Heading children="Request New Course"/>

        <form style={{width:'100%'}}>
          <Box>
            <FormLabel htmlFor='name' children={"Name"}/>
            <Input 
                required 
                id='name' 
                value={name} 
                onChange={ e=> setName(e.target.value)}
                placeholder='abc'
                type={'text'}
                focusBorderColor='blue.500'
            />
          </Box>

          <Box>
            <FormLabel htmlFor='email' children={"Email Address"}/>
            <Input 
                required 
                id='email' 
                value={email} 
                onChange={ e=> setEmail(e.target.value)}
                placeholder='abc@gmail.com'
                type={'email'}
                focusBorderColor='blue.500'
            />
          </Box>

          
          <Box>
            <FormLabel htmlFor='course' children={"Course"}/>
              <Textarea
                required 
                id='course' 
                value={course} 
                onChange={ e=> setCourse(e.target.value)}
                placeholder='Explain the course....'
                type='text'
                
                focusBorderColor='blue.500'
              />
          </Box>

          <Button my='4' colorScheme={'blue'} type='submit'>
              Send Mail
          </Button>

          <Box>
                See available courses!{' '}
                <Link to={'/courses'}>
                    <Button colorScheme={'blue'} variant="link">
                    Click 
                    </Button>{" "}
                    here
                </Link>
           </Box>

        </form>
      </VStack>
    </Container>
  )
}

export default Request