import React from "react";
import Count from "../components/Count"
import DividerBar from "../components/DividerBar";
import Button from "../components/Button";
import ProgressExampleIndicating from "../components/ProgressExampleIndicating"
import CardExampleCardProps from "../components/CardExampleCardProps"

class ShotDetail extends React.Component {
    render() {
        return (
            <div class="ShotDetail">
                <Button page={this.props.page}/>
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