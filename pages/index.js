import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1>
        Dette er en testbranch med små problemer og løsninger.
      </h1>
      <Link
        href="/toggleproblem"
      >
        <button>
          toggle spesifikk child ut ifra class name
        </button>
      </Link>
    </>
  )
}
