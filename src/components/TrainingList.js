import React from 'react';
import TrainingCard from './TrainingCard';
import './TrainingList.css';

export default function TrainingList(props) {
    var trainingList = props.trainingList;
    const filter = props.filter;

    trainingList = trainingList.filter(training => training.trainingName.includes(filter))

    var trainingListDepartments = trainingList.map((training, idx) => [training.department, idx]).sort();

    const sortedTrainingList = trainingListDepartments.map(training => trainingList[training[1]])

    const renderedTrainings = sortedTrainingList.map(training => {
        return (<TrainingCard
                key={ training.id }
                training={ training }
                filter={ filter }
                editTraining={ props.editTraining }
                onCancel={ props.onCancel }
                deleteTraining={ props.deleteTraining }
            />)
    })
    
    return (
        <div className="training-list-container">
            {renderedTrainings}
        </div>
    )
}
