import React from "react";
import { work } from "../../data/work";
import {education} from '../../data/education'

const renderPositions = (position, poindex) => {
    return (
        <div className="item" key={`position${poindex}`}>
            <div className="ui tiny header">
                {position.title}
            </div>
            <div>
                <em>
                    {position.startDate} - {position.endDate}
                </em>
            </div>
        </div>
    )
}

const renderExperience = (data) => {
    return (
        <div className="ui list">
            {data.map((company, coindex) => {
                return (
                    <div className="item" key={`company${coindex}`} >
                        <div className="ui header">
                            {company.name}
                        </div>
                        <div>
                            {company.location}
                        </div>
                        <div className="ui list">
                            {company.positions.map((position, poindex) => renderPositions(position, poindex))}
                        </div>
                        <div className="ui bulleted list">
                            {company.duties.map( (duty, duindex) =>{
                                return (
                                    <div className="item" key={`duty${duindex}`}>
                                        {duty}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

const renderEducation = (data) => {
    return (
        <div className="ui list">
            {data.map((school, sindex) => {
                return (
                    <div className="item" key={`school${sindex}`} >
                        <div className="ui header">
                            {school.name}
                        </div>
                        <div>
                            {school.location}
                        </div>
                        <div className="ui list">
                            {school.degrees.map( (degree, dindex) =>{
                                return (
                                    <div className="item" key={`degree${dindex}`}>
                                        <div>
                                            {degree.degree}, {degree.graduationDate}
                                        </div>
                                        <div>
                                            Major(s): {degree.major}
                                        </div>
                                        <div>
                                            GPA: {degree.gpa} / 4.0
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

const Resume = () => {
    return (
        <div>
            <h2>Experience</h2>
            {renderExperience(work)}
            <div className="ui divider"></div>
            <h2>Education</h2>
            {renderEducation(education)}
        </div>
    )
};

export default Resume;