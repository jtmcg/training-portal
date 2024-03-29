import React, { Component } from 'react';
import uuid from 'uuid';
import './TrainingPortal.css';
import Header from './Header';
import TrainingList from './TrainingList';
import UpcomingEvents from './UpcomingEvents';
import EditTraining from './EditTraining';

var trainingList = [
    {
        "id": "fd6ed836-10b4-4fc6-b07d-a28cee76558b",
        "trainingName": "Test Training 1",
        "department": "Testing Department",
        "roomNum": 101,
        "dateTime": new Date("2019-11-07T10:30:00"),
        "duration": "1hr",
        "creator": "Admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit commodo, lobortis tortor nec, suscipit mi. Donec pharetra imperdiet neque, sit amet sodales sapien pellentesque nec. Pellentesque fermentum eu ligula aliquam vulputate. Donec eu felis in libero fringilla blandit. Aliquam volutpat tellus nec dui aliquam, et hendrerit urna vehicula. Proin dignissim erat vel neque consectetur mollis. Nulla aliquet varius molestie. Etiam vitae convallis nulla. Duis vel dui velit. Curabitur mollis id risus ac molestie."
    },
    {
        "id": "fd6ed836-10b4-4fc6-b07d-a28cee76558c",
        "trainingName": "Test Training 2",
        "department": "Testing Department",
        "roomNum": 102,
        "dateTime": new Date("2019-11-09T10:30:00"),
        "duration": "2hrs",
        "creator": "Admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit commodo, lobortis tortor nec, suscipit mi. Donec pharetra imperdiet neque, sit amet sodales sapien pellentesque nec. Pellentesque fermentum eu ligula aliquam vulputate. Donec eu felis in libero fringilla blandit. Aliquam volutpat tellus nec dui aliquam, et hendrerit urna vehicula. Proin dignissim erat vel neque consectetur mollis. Nulla aliquet varius molestie. Etiam vitae convallis nulla. Duis vel dui velit. Curabitur mollis id risus ac molestie."
    },
    {
        "id": "fd6ed836-10b4-4fc6-b07d-a28cee76558d",
        "trainingName": "Test Training 3",
        "department": "Testing Department",
        "roomNum": 103,
        "dateTime": new Date("2019-11-08T10:30:00"),
        "duration": "All day",
        "creator": "Admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit commodo, lobortis tortor nec, suscipit mi. Donec pharetra imperdiet neque, sit amet sodales sapien pellentesque nec. Pellentesque fermentum eu ligula aliquam vulputate. Donec eu felis in libero fringilla blandit. Aliquam volutpat tellus nec dui aliquam, et hendrerit urna vehicula. Proin dignissim erat vel neque consectetur mollis. Nulla aliquet varius molestie. Etiam vitae convallis nulla. Duis vel dui velit. Curabitur mollis id risus ac molestie."
    },
]

export default class TrainingPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            isLoaded: false,
            error: null,
            createOrEditTrainingId: false, //change to false when done making the editing window
            newTraining: false,
            user: "Admin",
        }
    }

    _updateSearch = (event) => {
        const searchField = event.target.value;
        this.setState({
            searchText: searchField,
        });
    }

    _handleSubmit = (event) => {
        alert(this.state.searchText)        
        return null
    }

    _updateTraining = (training) => {
        const index = trainingList.map(training => training.id).indexOf(training.id);
        trainingList[index] = training;

        this.setState({
            createOrEditTrainingId: false,
            newTraining: false,
        })
    }

    _createNewTraining = () => {
        const newId = uuid();
        trainingList.push({
            "id": newId,
            "trainingName": "",
            "department": "",
            "roomNum": 101,
            "dateTime": new Date(),
            "duration": "",
            "creator": this.state.user,
            "description": "",
        });
        
        this._editTraining(newId, true);
    }

    _editTraining = (id, newTraining) => {
        this.setState({
            createOrEditTrainingId: id,
            newTraining: newTraining,
        });
    }

    _onCancel = (id) => {
        if (this.state.newTraining) {
            const index = trainingList.map(training => training.id).indexOf(id);
            trainingList.splice(index, 1);
        }

        this.setState({
            createOrEditTrainingId: false,
            newTraining: false,
        })
    }

    _deleteTraining = (id) => {
        const index = trainingList.map(training => training.id).indexOf(id);
        const trainingName = trainingList[index].trainingName;

        if (window.confirm("Are you sure you want to delete "+trainingName+"?")){
            trainingList.splice(index, 1);
            this.forceUpdate()
        }
    }

    render() {
        const { searchText, createOrEditTrainingId, newTraining } = this.state;
        if (!createOrEditTrainingId) {

            return (
                <div className="app-container">
                    <Header
                        searchText={ searchText }
                        updateSearch={ this._updateSearch }
                        handleSubmit={ this._handleSubmit }
                        createNewTraining={ this._createNewTraining }
                    />

                    <div className="body-container">
                        <div className="training-list">
                            <TrainingList
                                filter={ searchText }
                                trainingList={ trainingList }
                                editTraining={ this._editTraining }
                                deleteTraining={ this._deleteTraining }
                            />
                        </div>
                        <div className="upcoming-events">
                            <UpcomingEvents/>
                        </div>
                    </div>
                </div>
            )
        } else {
            const trainingToEdit = trainingList.filter(training => training.id === createOrEditTrainingId)
            return(
                <EditTraining
                    training={ trainingToEdit[0] }
                    newTraining={ newTraining }
                    updateTraining={ this._updateTraining }
                    onCancel= { this._onCancel }
                />
            )
        }
    }
}
