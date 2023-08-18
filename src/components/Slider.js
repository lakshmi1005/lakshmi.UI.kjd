import React, { useEffect, useState } from 'react'
const apiUrl = "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

const rowData = [
    {
        "imageUrl": "https://d2vcaowhp5v7jq.cloudfront.net/olympian.jpeg",
        "description": "The only athlete in the world to do her Olympic routine in 2020",
        "title": "The Olympian"
    },
    {
        "imageUrl": "https://d2vcaowhp5v7jq.cloudfront.net/dragon.jpeg",
        "description": "Grow your savings treasure and grow your dragon.",
        "title": "The Savings Jar"
    },
    {
        "imageUrl": "https://d2vcaowhp5v7jq.cloudfront.net/skhokho.jpeg",
        "description": "Helping South Africans become #CashCleva with Skhokho and TymeBank",
        "title": "Skhokho seMali"
    }
]
export default function Slider() {
    const [dataList, setDataList] = useState(rowData);

    useEffect(() => {
        console.log("Useeffect", dataList)
        // fetch(apiUrl).then(response => response.json()).then(data => {
        //     console.log("Data", data)
        //     setDataList(data)
        // }).catch(error => {
        //     console.error("Error", error)
        // })
    }, [])

    return (
        <div className="card-container"> 
            {console.log("dataList", dataList)}
            {dataList && dataList.map((value, index) => 
                <div className="card" style={{background:`url(${value.imageUrl})`}} >
                    <div className="card-body">
                        <div className="line"></div>
                        <p className="cardtext">{value.title}</p>
                        <p className="ccontent">{value.description}</p>
                    </div>
                </div>)}
        </div>

    )
}
