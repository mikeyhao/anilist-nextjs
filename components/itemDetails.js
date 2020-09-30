import Head from 'next/head'

/**
 * Seperate component specifically for animanga details such as
 * popularity, score, type etc...
 * 
 * It is seperate because initially another concept was in my mind, but
 * decided against it but kept the component
 */
export default function Details(data) {
    const info = data.data
    return data.data == null? 
      <></>:
        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap"
            rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600&display=swap"
            rel="stylesheet"></link>
        </Head>
        <div>
            <span className="score">
                <span className="score-2">Score: </span>
                {info.averageScore}
            </span>
            <br></br>
            <span>{info.type}| Popularity: {info.popularity}</span>
        </div>

    <style jsx>{`
    div {
        background-color: #e0e0e0;
        font-family: 'Epilogue', sans-serif;
        font-size: 10px;
        height: 30px;
    }
    .score {
        font-family: 'Epilogue', sans-serif;
        font-size: 18px;
    }
    .score-2 {
        font-family: 'Epilogue', sans-serif;
        font-size: 10px;
    }
    `}
    </style>
    </>
}