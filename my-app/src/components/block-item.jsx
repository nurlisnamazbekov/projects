import './block-item.css'



export default function Show({name, img, color}) {
    return (
        <div className="container" style={{background:color}}>
            <div className="block-con">
                <div><img src={img} alt="" /></div>
                <div>
                <h1>{name}</h1>
                <p></p>
                </div>
            </div>
        </div>
    )
}
Show()