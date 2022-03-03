import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Results from '../components/Results'
import requests from '../utils/requests'


const Home: NextPage = (props: any) => {
  const { results } = props;
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      {/* Header */}
      <Header />
      {/* Nav */}
      <NavBar />
      {/* Results */}
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context: { query: { genre: string } }) {
  const genre = context.query.genre;
  const req: any = requests
  const request = await
    fetch(`https://api.themoviedb.org/3${req[genre]?.url || req.fetchTrending.url}`)
      .then(res => res.json())
  return {
    props: {
      results: request
    }
  }
}

export default Home;

