import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';

const CourseOne = (props) => {
    const aboutQueryData = useStaticQuery(graphql`
        query coursesData {
            allCoursesJson {
                edges {
                    node {
                        id
                        title
                        description
                        readmoreButton
                        url
                    }
                }
            }
        }
    `);
    const courses = aboutQueryData.allCoursesJson.edges;
    return (
        <>
            {courses.map((data) => (
                <div className={props.column} key={data.node.id}>
                    <div className={`service ${props.serviceStyle}`}>
                        <div className="inner">
                            {/* <div className="number">
                                <span>{data.node.number}</span>
                            </div> */}
                            <div className="content">
                                <h3 className="title">{data.node.title}</h3>
                                <p className="description">{data.node.description}</p>
                                <Link className="readmore-btn" to={data.node.url}>{data.node.readmoreButton}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default CourseOne
