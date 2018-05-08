import React, { Component } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
    render(){
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid black'
            }
        };
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img src={this.props.image} 
                        className="Media-image"
                        alt="" width={260} height={160} />
                </div>
                <h3 className="Media-title">{this.props.title}</h3>
                <p className="Media-author">{this.props.author}</p>
            </div>
        );
    }
}

Media.propTypes = {
    image: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
};

export default Media;