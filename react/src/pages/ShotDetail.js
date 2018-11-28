import React from "react";
import Count from "../components/Count"
import DividerBar from "../components/DividerBar";
import BreadcrumbExampleLargeSize from "../components/Breadcrumb";
import ProgressExampleIndicating from "../components/ProgressExampleIndicating"
import CardExampleCardProps from "../components/CardExampleCardProps"




class ShotDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    // list 
    render() {
        return (
            <div>
                <BreadcrumbExampleLargeSize />
                <h2 className="pagetitle">피격 현황</h2>
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