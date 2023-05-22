import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CategoryDetial = () => {
    const {id} = useParams();
      const [data, setData] = useState([]);

      useEffect(() => {
            axios.get(`http://143.198.217.110/api/v1/categories/${id}/news`)
            .then((response) => setData(response.data.data))
            .catch((e) => console.log(e));
      }, [id])
  return (

    <>
      <div className='content grid3 mtop s'>
        {data.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <Link to={'detial'}>
            <div className='box shadow sdaa' key={index}>
              <div className='img-2'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>
                    {val.name} cat name</span>
                  {/* <i className='fa fa-heart'></i> */}
                </div>
                <h4> Lebron's 10 fact</h4>
                {/* <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p> */}
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>Дэлгэрэнгүй</button> <label htmlFor=''></label>
                </div>
                {/* <span>{type}</span> */}
              </div>
            </div>
            </Link>
          )
        })}
      </div>
      
    </>
  )
}

export default CategoryDetial
