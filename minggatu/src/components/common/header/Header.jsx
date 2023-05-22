import React, { useEffect, useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import axios from "axios"

const Header = () => {
  const [navList, setNavList] = useState(false)
      const [data, setData] = useState([]);

      useEffect(() => {
            axios.get('http://143.198.217.110/api/v1/categories')
            .then((response) => setData(response.data.data))
            .catch((e) => console.log(e));
      }, [])

      console.log(data)


  return (
    <>
      <header>
        <div className='container flex'>
        <img src='./images/logo-ming.png' alt='' />
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
            <Link to={'/'}><i className='fa fa-home'></i></Link>
              {data.map((list, index) => (
                <div key={index} >
                <li key={index}>
                  
                  <Link to={`/category/${list.id}`}>{list.name}</Link>
                </li>
                </div>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>Сонирхолтой мэдээлэл өдөр бүр</span> 
            </h4>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
