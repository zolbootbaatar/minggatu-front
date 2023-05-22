import React, { useEffect, useState } from "react"
import { list } from "../../data/Data"
import axios from "axios";
import { Link } from "react-router-dom";

const RecentCard = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
            axios.get('http://143.198.217.110/api/v1/news')
            .then((response) => setData(response.data.data))
            .catch((e) => console.log(e));
      }, [])
  return (

    <>
      <div className='content grid3 mtop s'>
        {data.map((data, index) => {
          // const { cover, category, location, name, price, type } = val
          return (
            <Link to={`/news/${data.id}`}>
            <div className='box shadow sdaa' key={index}>
              <div className='img-2'>
                <img src={data.photo} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: "#25b5791a", color: "#25b579" }}>
                    {data.name} cat name</span>
                  {/* <i className='fa fa-heart'></i> */}
                </div>
                <h4>{data.name}</h4>
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

export default RecentCard
