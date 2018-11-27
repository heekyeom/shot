import React, { Component } from "react";

const Search = props => {
    return (
        <div class="ui right aligned category search">
            <div class="ui icon input">
                <input class="prompt" type="text" placeholder="Search animals..."/>
                <i class="search icon"></i>
            </div>
            <div class="results"></div>
            </div>
    )
}

export default Search;