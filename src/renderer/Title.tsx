import * as React from 'react';

export interface TitleProps {
    isDaily?: boolean,
    month: string,
    date?: number,
    year?: number,
    message?: string,
}

export interface TitleState {
    isDaily?: boolean,
    month: string,
    date?: number,
    year?: number,
    message?: string,
}

export default class TitleBar extends React.Component<TitleProps, TitleState> { 
    constructor(props: TitleProps){
        super(props);
        this.state = {
            month: this.props.month,
            year: this.props.year
        };
    }

    render() {
        if(this.props.isDaily) {
            return (
                <h1 className="subHeader"> {this.state.month + " " + this.props.date + ", " + this.props.year} </h1>
            )
        } else {
        return (
            <h1 className="subHeader"> {this.state.month + ", " + this.state.year} </h1>
        );
        }
    }
}