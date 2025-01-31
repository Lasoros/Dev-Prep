import { useState } from 'react'
import './App.css'
import { Stack } from '@chakra-ui/react'
import For from './For'
import Edit from './Edit'
import LinkTable from './Table'


function App() {

  return (
    <>
      <Stack>

        <LinkTable></LinkTable>
      

          <Edit/>

      </Stack>
    </>
  )
}

export default App
