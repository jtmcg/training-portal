import React, { Component } from 'react';
import './TrainingCard.css';

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
        }
    }

    formatTime = (dateTimeObject) => {
        var time = dateTimeObject.toLocaleTimeString('en-US');
        time = time.replace(time.substring(4,7), "")
        return time
    }

    render() {
        const { id, trainingName, department, roomNum, date, time, duration, creator, description } = this.state;
        return (
            <div className="training-card-container">
                <div className="training-card-header">
                    <div className="name-department-room">
                        <h3>{trainingName}</h3>
                        <p className="department-room"><i>{department}</i> - Room: {roomNum}</p>
                    </div>
                    <div className="date-time-duration">
                        <p className="date-time">{date} at {time}</p>
                        <p className="duration">Duration: {duration}</p>
                    </div>
                </div>
                <div className="details-container">
                    <h3 className="details">Details:</h3>
                    <p className="details-text">{description}</p>
                </div>
                <div className="training-card-footer">
                    <p className="creator">Scheduled By: {creator}</p>
                    <form>
                        <button type="button" onClick={ () => this.props.editTraining(id) }>
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
