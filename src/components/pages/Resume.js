import React from "react";
import { work } from "../../data/work";

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

const renderResume = (data) => {
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

const Resume = () => {
    return (
        <div>
            {renderResume(work)}
        </div>
    )
};

export default Resume;