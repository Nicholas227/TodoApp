import * as React from 'react';
import { Button } from 'semantic-ui-react'
import App from './App';

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

    const ButtonExampleLabeledIconShorthand = (
  <div>
    <Button className = "rightButton" content='Next' icon='right arrow' labelPosition='right' />
  </div>
);

        if(this.props.isDaily) {
            return (
                <div className = "subHeader">
                <h1 className="subHeader1"> {this.state.month + " " + this.props.date + ", " + this.props.year} </h1>
                {ButtonExampleLabeledIconShorthand}
                </div>
            )
        } else {
        return (
            <div className = "subHeader">
            <h1 className="subHeader1"> {this.state.month + ", " + this.state.year} </h1>
            {ButtonExampleLabeledIconShorthand}
            </div>
        );
        }
    }
}