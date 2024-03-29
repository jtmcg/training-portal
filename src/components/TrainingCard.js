import React, { Component } from 'react';
import './TrainingCard.css';
import './button.css';

export default class TrainingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.training.id,
            trainingName: this.props.training.trainingName,
            department: this.props.training.department,
            roomNum: this.props.training.roomNum,
            date: this.props.training.dateTime.toLocaleDateString('en-US'),
            time: this.formatTime(this.props.training.dateTime),
            duration: this.props.training.duration,
            creator: this.props.training.creator,
            description: this.props.training.description,
            filter: this.props.filter,
        }
    }

    formatTime = (dateTimeObject) => {
        var time = dateTimeObject.toLocaleTimeString('en-US');
        time = time.replace(time.substring(4,7), "")
        return time
    }

    highlightSearchText = () => {
        var trainingTitle = this.state.trainingName; 
        const indexOfSearchString = trainingTitle.indexOf(this.props.filter);
        if (indexOfSearchString >= 0) {
            trainingTitle = <React.Fragment>{trainingTitle.substring(0,indexOfSearchString)}<span className='highlight'>{trainingTitle.substring(indexOfSearchString, indexOfSearchString+this.props.filter.length)}</span>{trainingTitle.substring(indexOfSearchString+this.props.filter.length)}</React.Fragment>;
        } 
        return trainingTitle
    }

    render() {
        const { id, department, roomNum, date, time, duration, creator, description } = this.state;

        return (
            <div className="training-card-container">
                <div className="training-card-header">
                    <div className="name-department-room">
                        <h3 className="training-card-name" id="training-card-name">{this.highlightSearchText()}</h3>
                        <p className="department-room"><i>{department}</i> - Room: {roomNum}</p>
                    </div>
                    <div className="date-time-duration">
                        <p className="date-time">{date} at {time}</p>
                        <p className="duration">Duration: {duration}</p>
                    </div>
                </div>
                <hr/>
                <div className="description-container">
                    <h4 className="description">Description:</h4>
                    <p className="description-text">{description}</p>
                </div>
                <div className="training-card-footer">
                    <p className="creator">Scheduled By: {creator}</p>
                    <div className="delete-training" onClick={ () => this.props.deleteTraining(id)}>Delete Training</div>
                    <form>
                        <button className="button" type="button" id="edit" onClick={ () => this.props.editTraining(id) }>
                            <span>Edit</span>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
