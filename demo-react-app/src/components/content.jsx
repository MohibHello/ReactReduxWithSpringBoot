import React, {useState} from 'react'
import {Link} from 'react-router-dom';



const Content = (props) => {
    
    const [selectedItem, setSelectedItem] = useState('Display')

    const onItemSelect =(item)=> {
      console.log(selectedItem)
        setSelectedItem(item)
    }

    const items = ['Display', 'Register']

    return (
        <ul className='list-group'>
        {items.map((item) => (
          <Link to={item === 'Display'?'/':'register'} onClick={() => onItemSelect(item,this)} key={item+"abc"} className='list-group-item'>
            {item}
          </Link>
        ))}
      </ul>
    )
}



export default Content
