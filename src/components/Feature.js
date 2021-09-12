import React from 'react'
import FeaturesBox from './FeaturesBox'
import featureimage from '../img/feature_1.png'
import featureimage1 from '../img/feature_2.png'
import featureimage2 from '../img/feature_3.png'

const Feature = () => {
    return (
        <div id="features">
            <div className="a-container">
                <FeaturesBox image={featureimage}
                 title="Responsible"
                />
                <FeaturesBox image={featureimage1}
                 title="Optimize"
                /> <FeaturesBox image={featureimage2}
                title="Scalable"
               />
            </div>
        </div>
    )
}

export default Feature
