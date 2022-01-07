import React from 'react';

const renderSocials = () => {
    return (
        <h2 className="ui icon">
            <a href="https://www.facebook.com/hassingar"><i className='facebook icon'></i></a>
            <a href="https://www.linkedin.com/in/ahassing/"><i className='linkedin icon'></i></a>
            <a href="https://github.com/ahassing"><i className='github icon'></i></a>
            <a href="mailto:andrewhassing@gmail.com"><i className='envelope icon'></i></a>
        </h2>
    )
}

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <p>Feel free to reach out to me for any reason. I'm friendly!</p>
            <div className="ui divider"></div>
            {renderSocials()}
        </div>
    );
}

export default Contact;