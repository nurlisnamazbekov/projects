import axios from 'axios'
import './header.css'

export default function Header() {
return(
<div style={{
    width:'100%',
    height:'50px',
    display:'flex',
    boxShadow:'2px 2px 20px #ccc',
    justifyContent:'space-between',
    alignItems:'center'
}}>
    <div className='logo'>LOGO</div>
    <div className='nav' style={{
        display:'flex',
        gap:'40px',
        
    }}>
        <a href="">glavnai</a>
        <a href="">about</a>
        <a href="">services</a>
    </div>
    <button style={{
        width:'90px',
        height:'20px',
        background:'blue',
        border:'none',
        cursor:'pointer'
     }} >podkluchit</button>
</div>
)
}