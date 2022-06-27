import Head from 'next/head'

import Image from 'next/image'
import { NavbarBetter } from '../components/NavbarBetter';
import { Hero } from '../components/Hero';
import { IssueList} from '../components/IssueList';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <NavbarBetter home={true}/>
      <section className='p-20 bg-black h-screen'>
        <Hero />
      </section>
      <IssueList />

      <footer>
      <small>&copy; Copyright TheFuture, Another Corporation</small>
      </footer>
    </div>
  )
}
