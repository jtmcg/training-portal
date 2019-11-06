import React from 'react';
import TrainingCard from './TrainingCard';

export default function TrainingList(props) {
    const filter = props.filter;
    var trainingList = props.trainingList;

    trainingList = trainingList.filter(training => training.trainingName.includes(filter))

    const renderedTrainings = trainingList.map(training => {

        return <TrainingCard
                    key={ training.id }
                    training={ training }
                    editTraining={ props.editTraining }
                />
    });
    
    return (
        <div className="training-list-container">
            <div className="training-list-header">
                <h2>Trainings</h2>
                <div className="rendered-training-list">
                    {renderedTrainings}
                </div>
            </div>
        </div>
    )
}
