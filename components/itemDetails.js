export default function Details(data) {
    console.log(data.data)
    const info = data.data
    return data.data == null? 
      <></>:
        <>
        <p>
            {info.type}, {info.pop}, {info.avgScore}
        </p>

    <style jsx>{`
    div {
        display: inline-block;
    }
    `}
    </style>
    </>
}