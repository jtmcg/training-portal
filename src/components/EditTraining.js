import React, { Component } from 'react';
import './EditTraining.css';
import './button.css';

export default class EditTraining extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            id: this.props.training.id,
            trainingName: this.props.training.trainingName,
            department: this.props.training.department,
            roomNum: this.props.training.roomNum,
            date: this.formatDate(this.props.training.dateTime),
            time: this.formatTime(this.props.training.dateTime),
            duration: this.props.training.duration,
            creator: this.props.training.creator,
            description: this.props.training.description,
        })
    }

    formatDate = (dateTimeObject) => {
        var date = dateTimeObject.toISOString();
        date = date.replace(date.substring(10),"");
        return date
    }

    formatTime = (dateTimeObject) => {
        console.log(dateTimeObject)
        var time = dateTimeObject.toTimeString();
        time = time.substring(0, 8)
        return time
    }

    onSubmit = () => {
        const { id, trainingName, department, roomNum, date, time, duration, creator, description } = this.state;
        const trainingData = {
            "id": id,
            "trainingName": trainingName,
            "department": department,
            "roomNum": roomNum,
            "dateTime": new Date(date+"T"+time),
            "duration": duration,
            "creator": creator,
            "description": description,
        }

        this.props.updateTraining(trainingData)
    }
    
    render() {
        const { id, trainingName, department, roomNum, date, time, duration, creator, description } = this.state;
        var title = "Edit Training";
        if (this.props.newTraining) {
            title="Create New Training"
        }
        
        return (
            <div className="edit-training-container">
                <h1 className="edit-training-header">{title} </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="edit-forms">
                        <div className="form-component" id="training-name">
                            <label>Training Name<span style={{color: "#FF55A5"}}>*</span>: </label>
                            <input 
                                type="text"
                                id="training-name-text"
                                onChange={ e => this.setState({ trainingName: e.target.value }) }
                                placeholder="Training Name"
                                value={trainingName}
                                required
                            />
                        </div>
                        <div className="form-component" id="department">
                            <label>Department<span style={{color: "#FF55A5"}}>*</span>: </label>
                            <select 
                                name="department" 
                                id="department-text"
                                value={department}
                                onChange={ e => this.setState({ department: e.target.value }) }
                                required
                            >
                                <option value="">--Select Department--</option>
                                <option value="Testing Department">Testing Department</option>
                                <option value="department0">department0</option>
                                <option value="department1">department1</option>
                                <option value="department2">department2</option>
                                <option value="department3">department3</option>
                            </select>
                        </div>
                        <div className="form-component" id="room-number">
                            <label>Room<span style={{color: "#FF55A5"}}>*</span>: </label>
                            <select 
                                name="room-number" 
                                id="room-number-text"
                                value={roomNum}
                                onChange={ e => this.setState({ roomNum: e.target.value }) }
                                required
                            >
                                <option value="">--#--</option>
                                <option value="101">101</option>
                                <option value="102">102</option>
                                <option value="103">103</option>
                                <option value="104">104</option>
                            </select>
                        </div>
                        <div className="form-component" id="date">
                            <label>Date<span style={{color: "#FF55A5"}}>*</span>: </label>
                            <input 
                                type="date"
                                id="date-text"
                                onChange={ e => this.setState({ date: e.target.value }) }
                                value={date}
                                required
                            />
                        </div>
                        <div className="form-component" id="time">
                            <label>Time<span style={{color: "#FF55A5"}}>*</span>: </label>
                            <input 
                                type="time"
                                id="time-text"
                                onChange={ e => this.setState({ time: e.target.value }) }
                                value={time}
                                required
                            />
                        </div>
                        <div className="form-component" id="duration">
                            <label>Duration<span style={{color: "#FF55A5"}}>*</span>: </label>
                            <select 
                                name="duration" 
                                id="duration-text"
                                value={duration}
                                onChange={ e => this.setState({ duration: e.target.value }) }
                                required
                            >
                                <option value="">--duration--</option>
                                <option value="15min">15min</option>
                                <option value="30min">30min</option>
                                <option value="45min">45min</option>
                                <option value="1hr">1hr</option>
                                <option value="1hr 15min">15min</option>
                                <option value="1hr 30min">1hr 30min</option>
                                <option value="1hr 45min">1hr 45min</option>
                                <option value="2hrs">2hrs</option>
                                <option value="2hrs 30min">2hrs 30min</option>
                                <option value="3hrs">3hr</option>
                                <option value="3hrs 30min">3hr 30min</option>
                                <option value="4hrs">4hrs</option>
                                <option value="All day">All day</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-component" id="description">
                        <label>Description: <br/></label>
                        <textarea 
                            rows="10"
                            type="description"
                            id="description-text"
                            onChange={ e => this.setState({ description: e.target.value }) }
                            placeholder="What is this training about?"
                            value={description}
                        />
                        <p className="required-label"><span style={{color: "#FF55A5"}}>*</span><i>required</i></p>
                    </div>
                    <div className="submit-buttons-container">
                        <button className="button" id="cancel" onClick={ () => this.props.onCancel(id) }><span>Cancel</span></button>
                        <button type="submit" className="button" id="submit"><span>Submit</span></button>
                    </div>
                </form>
                <p className="scheduled-by">Scheduled by: {creator}</p>
            </div>
        )
    }
}
