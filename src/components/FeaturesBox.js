import React from 'react'

const FeaturesBox = (props) => {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image} alt="" />
            </div>
            <div className="s-b-text">
                <h2>{props.title}</h2>
                <p>We’re proud to support a diverse customer base,
                     often insuring people turned away elsewhere</p>
            </div>
        </div>
    )
}

export default FeaturesBox
