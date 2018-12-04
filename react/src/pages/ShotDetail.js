import React from "react";
import Count from "../components/Count"
import DividerBar from "../components/DividerBar";
import BackButton from "../components/BackButton";
import ProgressExampleIndicating from "../components/ProgressExampleIndicating"
import CardExampleCardProps from "../components/CardExampleCardProps"

class ShotDetail extends React.Component {


    render() {
        return (
            <div class="ShotDetail">
                <BackButton page={this.props.page} />
                <div class="ShotDetail2">
                    <h2 className="pagetitle">피격 현황</h2>
                    <DividerBar />
                    <Count />
                    <DividerBar />
                    <CardExampleCardProps name={this.props.name} />
                    <ProgressExampleIndicating />
                </div>
                <div><br></br></div>
            </div>
            
        );
    }
}

export default ShotDetail;