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
        "trainingName": "Test Training",
        "department": "Testing Department",
        "roomNum": 101,
        "dateTime": new Date("2019-11-07T10:30:00"),
        "duration": "1hr",
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

    render() {
        const { searchText, createOrEditTrainingId, newTraining } = this.state;
        if (!createOrEditTrainingId) {

            return (
                <div className="app-container">
                    
                    <div className="header-container">
                        <Header
                            searchText={ searchText }
                            updateSearch={ this._updateSearch }
                            handleSubmit={ this._handleSubmit }
                            createNewTraining={ this._createNewTraining }
                        />
                    </div>

                    <div className="body-container">
                        <div className="training-list">
                            <TrainingList
                                filter={ searchText }
                                trainingList={trainingList}
                                editTraining={this._editTraining}
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
                />
            )
        }
    }
}
