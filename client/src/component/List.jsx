import {useEffect, useState} from "react";
import axios from "axios";


const List = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        (async ()=>{
            const res=await axios.get("http://localhost:8090/api/v1/read")
            setData(res.data['data'])
        })()
    },[])
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        {
                            data.map((item,i)=>{
                                return(
                                <div className="card mb-3 mt-5" key={i}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item['img']}  className="img-fluid rounded-start w-100 h-100" alt="..."/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item['title']}</h5>
                                                <p className="card-text">{item['Description']}</p>
                                                <p className="card-text"><small className="text-body-secondary">Creator By </small><small className="text-body-secondary">{item['CreatorName']}</small></p>
                                                <p className="card-text"><small className="text-body-secondary">Create Date </small><small className="text-body-secondary">{item['CreatedDate']}</small></p>
                                                <button className="btn btn-success me-2">Edit</button>
                                                <button className="btn btn-danger ">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;