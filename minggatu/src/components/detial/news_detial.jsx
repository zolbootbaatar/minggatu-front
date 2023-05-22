import React, { Component, useEffect, useState } from "react"
import { list } from "../data/Data"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./detial.css"


export default class DetialNews extends Component {
      // const {id} = useParams();
      // const [data, setData] = useState([]);

      // useEffect(() => {
      //       axios.get(`http://143.198.217.110/api/v1/news/${id}`)
      //       .then((response) => setData(response.data.data))
      //       .catch((e) => console.log(e));
      // }, [id]);
      state = {
        name: null,
        photo: null,
        description: null,
        teacher: null,
        error: null,
        success: null,
        delete: null,
        loading: false
      }
    
      goBack = () => {
        this.props.history.goBack();
      }
    
      componentDidMount = () => {
        this.setState({ loading: true });
        axios.get(
          'http://143.198.217.110/api/v1/news/' + this.props.match.params.id
          )
          .then((result) => this.setState({ 
            ...result.data.data, 
            error: null, 
            loading: false 
          }))
          .catch((err) => this.setState({ 
            error: err.response.data.error.message, 
            loading: false 
          }));
      }
    
      handleType = (e) => {
        const {name, value} = e.target;
    
        this.setState({ [name]: value, error: null, success: null });
    }
  render() { return (

    <>
      <div className='detial-category'>
        {/* {data.map((data, index) => {
          return (
            <div className='detial' key={index}>
              <div className="garchig"><h1>{data.name}</h1></div>

              <div className='img_detial'>
                <img src={data.photo} alt='' width="10rem"/>
              </div>
              <div><p>{data.description}</p></div>
            </div>
          )
        })} */}
        <div className='detial'>
              <div className="garchig"><h1>{this.state.name}</h1></div>

              <div className='img_detial'>
                <img src={this.state.photo} alt='' width="10rem" className="img-3"/>
              </div>
              <div><p className="p-content">{this.state.description}</p></div>
            </div>
      </div>
      
    </>
  )}
}


