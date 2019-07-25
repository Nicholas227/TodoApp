import * as React from 'react';

export interface TaskListProps {
    day?: number;
    month?: number;
    year?: number;
    tasks?: any[];
}

export interface TaskListState {
    day?: number;
    month?: number;
    year?: number;
    tasks?: any[];
}

export default class TaskList extends React.Component<TaskListProps, TaskListState> { 
    constructor(props: TaskListProps){
        super(props);
        this.state = {
            month: this.props.month,
            year: this.props.year
        };
    }

    createNewTask() {
    }

    render() {
        return (<div></div>);
    }
};

export interface TaskProps {
    duration?: number;
    start?: number;
    end?: number;
    day?: number;
    month?: number;
    year?: number;
    message?: string;
    attachmentFilePath?: string;
    remindersInHours?: number;
    reminderStartTimeBefore?: number;
}

export interface TaskState {
    duration?: number;
    start?: number;
    end?: number;
    day?: number;
    month?: number;
    year?: number;
    message?: string;
    attachmentFilePath?: string;
    remindersInHours?: number;
    reminderStartTimeBefore?: number;
}
export class Task extends React.Component<TaskProps, TaskState> { 
    constructor(props: TaskProps) {
        super(props);
        this.setState
    }

    private _onClick = async () => {
        
    };

    render() {
        return (<a onClick = {this._onClick}><div className = "Task">
           {this.state.message ? this.state.message : this.props.message}
        </div></a>);
    }
}