import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import data from './data';

function Mogako() {
    let history = useHistory();
    let [meets, meetsChange] = useState(data);
    let { id } = useParams();
    return (
        <div className='container'>
            {
                meets.map((ele, idx) => {
                    return <MogakoCard meets={ele}></MogakoCard>
                })
            }
        </div>

    )

    function MogakoCard(props) {
        return (

            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://cdn.pixabay.com/photo/2019/12/21/06/52/programmer-4709802_960_720.jpg" width="100%"></img>
                </div>
                <div className='col-md-6 mt-4'>
                    <h4>{props.meets.title}</h4>
                    <p>{props.meets.담당자}</p>
                    <p>{props.meets.요일}</p>
                    <p>{props.meets.content}</p>
                    <p>{props.meets.price}</p>


                    <button className='btn btn-danger' onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                    <button className='btn btn-danger'>신청하기</button>
                </div>
            </div>

        )
    }

}
export default Mogako;