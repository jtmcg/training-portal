import React from 'react';
import TrainingCard from './TrainingCard';
import './TrainingList.css';

export default function TrainingList(props) {
    const filter = props.filter;
    var trainingList = props.trainingList;

    trainingList = trainingList.filter(training => training.trainingName.includes(filter))

    const renderedTrainings = trainingList.map(training => {

        return <TrainingCard
                    key={ training.id }
                    training={ training }
                    editTraining={ props.editTraining }
                    onCancel={ props.onCancel }
                    deleteTraining={ props.deleteTraining }
                />
    });
    
    return (
        <div className="training-list-container">
            {renderedTrainings}
        </div>
    )
}
