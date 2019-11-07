import React from 'react';
import TrainingCard from './TrainingCard';
import './TrainingList.css';

export default function TrainingList(props) {
    var trainingList = props.trainingList;
    const filter = props.filter;

    trainingList = trainingList.filter(training => training.trainingName.includes(filter))

    // const renderedTrainings = trainingList.map(training => {

    //     return <TrainingCard
    //                 key={ training.id }
    //                 training={ training }
    //                 filter={ props.filter }
    //                 editTraining={ props.editTraining }
    //                 onCancel={ props.onCancel }
    //                 deleteTraining={ props.deleteTraining }
    //             />
    // });

    const renderedTrainings = [];
    for (var i=0; i<trainingList.length; i++) {
        renderedTrainings.push(<TrainingCard
                                    key={ trainingList[i].id }
                                    training={ trainingList[i] }
                                    filter={ filter }
                                    editTraining={ props.editTraining }
                                    onCancel={ props.onCancel }
                                    deleteTraining={ props.deleteTraining }
                                />)
    }
    
    return (
        <div className="training-list-container">
            {renderedTrainings}
        </div>
    )
}
