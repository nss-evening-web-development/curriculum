import React from 'react';
import CourseOne from "../elements/course/courseOne";

const CourseList = () => {
    return (
        <div className="rn-section-gap line-separator">
            {/* Start Curriculum Area  */}
            <div className="rn-service-area">
                <div className="container">
                    <div className="row row--35">
                        <CourseOne column="col-lg-6 col-md-6 col-12" serviceStyle="service-style-1 mt--30" />
                    </div>
                </div>
            </div>
            {/* End Curriculum Area  */}
        </div>
    )
}

export default CourseList;
