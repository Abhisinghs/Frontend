import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {

  const [oldPassword,setOldPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  return <Container py='16' minH={'90vh'}>
    <form>
      <Heading
        textTransform={'uppercase'}
        children="Change Password"
        my="10"
        textAlign={['center','left']}
      />

      <VStack>
        <Input 
          required 
          value={oldPassword} 
          onChange={ e=> setOldPassword(e.target.value)}
          placeholder='Old Password '
          type={'password'}
          focusBorderColor='blue.500'
          my={'5'}
        />
        
        <Input 
          required 
          value={newPassword} 
          onChange={ e=> setNewPassword(e.target.value)}
          placeholder='New Password '
          type={'password'}
          focusBorderColor='blue.500'
           
          mb={'5'}
        />

        <Button w='full' colorScheme={'blue'} type='submit'>Change</Button>
      </VStack>
    </form>
  </Container>
}

export default ChangePassword