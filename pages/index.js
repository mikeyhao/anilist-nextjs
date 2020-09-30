import Head from 'next/head'
import Main from '../components/catalog-layout'

export default function Home() {

  return (
    <>
    <Head>
      <title>The Animanga Catalog</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
    </Head>
    <main>
      <div className="headr">
        <div className="headrTitle">
        The Animanga Catalog</div>
      </div>
          <Main />
    </main>

    <style jsx>{`
      .headr {
        background-color: black;
        color: white;
        height: 50px;
        width: 100%;
      }
      .headrTitle {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        margin: auto;
        padding-top: 10px;
        width: 50%;
      }
    `}
    </style>
    </>
  )
}

