import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../Components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container >
      <NavBar />
    </Container>
  )
}
