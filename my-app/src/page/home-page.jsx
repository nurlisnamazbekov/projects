import './block-item.jsx'
import { items } from '../datas.jsx'
import Show from '../components/block-item.jsx'


export default function HomePage() {
    return (
        <div>
            {
            items.map(el=> <Show name={el. name} color={el.color}/>)
            }
        </div>
    )
}