import React from 'react';

const List = props => {

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
            
            {/* <h2 class="ui icon header">
                <i class="settings icon"></i>
                <div class="content">
                    Settings
                </div>
            </h2> */}

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

            

        </div>
        
    )
}

export default List;