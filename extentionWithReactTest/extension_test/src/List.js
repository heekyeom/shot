import React from 'react';
import axios from 'axios';

export default function List(props) {
    axios.post('https://three-sum-circles.herokuapp.com/recognition',{
        name:"hihihi"
    })
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error.message);
    })
    // 데이터 받으면 여기다 뿌려줌
    // const user = props.counts.map(count => {
    //     return (

    //     )
    //   })

    // 일단 그냥 뿌려줌

    //style={{  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"
    //style={{background: ("../public/images/main_background.jpg")}}>
    return (
        <div class="ui middle aligned divided list">
        {/* // style={{  backgroundImage: "url(" + "/images/main_background2.jpg" + ")"}} */}
            <h2>총있으면 쐈다 리스트페이지 공사중..</h2>
            {/* <h2 class="ui icon header">
                <i class="settings icon"></i>
                <div class="content">
                    Settings
                </div>
            </h2> */}
            <div class="ui right aligned category search">
            <div class="ui icon input">
                <input class="prompt" type="text" placeholder="Search animals..."/>
                <i class="search icon"></i>
            </div>
            <div class="results"></div>
            </div>

            <br></br>

            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    1. 함용재
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    2. 김희겸
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    3. 송빈산
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    4. 함용재
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    5. 함용재
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    6. 함용재
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    7. 함용재
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    8. 함용재
                </div>
            </div>
            <div class="item">
                <div class="right floated content">
                    <div class="ui button">상세정보</div>
                </div>

                <div class="content">
                    9. 함용재
                </div>
            </div>
            
            <br></br>

            <div class="ui toggle checkbox">
                <input type="checkbox" name="public"></input>
                <label>Test</label>
            </div>

        </div>
        
    )
}
