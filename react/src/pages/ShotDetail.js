import React from "react";
import Count from "../components/Count"
import DividerBar from "../components/DividerBar";
import BreadcrumbExampleBigSize from "../components/BreadcrumbExampleBigSize";
import ProgressExampleIndicating from "../components/ProgressExampleIndicating"
import CardExampleCardProps from "../components/CardExampleCardProps"

class ShotDetail extends React.Component {
    constructor(props) {
        // React.Component 의 constructor() 를 사용하고, 이어서 우리가 override.
        super(props);

        this.state = {
            page2: ShotDetail, // 아모른직다, but 들어온다.
        };
    }
    render() {
        return (
            <div class="ShotDetail">
                <BreadcrumbExampleBigSize page={'ShotDetail'} />
                <h2 className="pagetitle">피격 현황</h2>
                {/* <h2>{this.state.}</h2> */}
                <DividerBar />
                <Count/>
                <DividerBar />
                <CardExampleCardProps/>
                <ProgressExampleIndicating/>
            </div>

        );
    }
}

export default ShotDetail;