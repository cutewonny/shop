import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import data from './data';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
    padding:20px;
`;

let 제목 = styled.h4`
    font-size:25px;
    color:${props => props.색상}
`;


function Detail(props) {
    let history = useHistory();
    let [meets, meetsChange] = useState(data);
    console.log("meets>>>> ", meets);

    let { id } = useParams();
    let idIndex = meets.find(function (ele, idx, array) {
        if (ele.id == id) {//조건에 맞는 첫번째 객체 리턴한다
            return true;
        }
    })
    console.log("idIndex>>", idIndex)
    return (
        <div className='container'>
            <박스>
                <제목 색상={'blue'}>상세 페이지</제목>
            </박스>
            <박스>
                <제목 className='red'>상세 페이지</제목>
            </박스>
            <div className='my-alert'>
                자리가 얼마 남지 않았습니다
            </div>
            <div className='my-alert2'>
                자리가 얼마 남지 않았습니다
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="https://cdn.pixabay.com/photo/2019/12/21/06/52/programmer-4709802_960_720.jpg" width="100%"></img>
                </div>
                <div className='col-md-6 mt-4'>
                    <h4>{meets[idIndex.id].title}</h4>
                    <p>{meets[idIndex.id].담당자}</p>
                    <p>{meets[idIndex.id].요일}</p>
                    <p>{meets[idIndex.id].content}</p>
                    <p>{meets[idIndex.id].price}</p>


                    <button className='btn btn-danger' onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                    <button className='btn btn-danger'>신청하기</button>
                </div>
            </div>
        </div >
    )

}
export default Detail;