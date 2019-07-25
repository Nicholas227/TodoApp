/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/**
 * React renderer.
 */
import * as React from 'react';
import styled from "styled-components";
import "./App.css";
import TitleBar from "./Title";

/** React state of the App component */
//test
//test
/** A component the renders the whole application UI */
export interface AppState {
    isLoading?: Boolean;
    ui?: JSX.Element,
    secondaryUI?: JSX.Element,
    title?: JSX.Element,
    dailyPage?: boolean,
    year?: number,
}
export default class App extends React.Component<{}, AppState> {
    /** Creates an App instance */
    constructor(props?: any, context?: any) {
        super(props, context);
        this.state = {
            ui:  (  <StyledWrapper>
            <Month month = "January" numberOfDays = {31} changeUI = {this.changeUI}/>
            </StyledWrapper> ),
            title: (<TitleBar  month = "January" year = {2019}/>),
            dailyPage: false,
            year: 2019,
        }
    }

    public changeUI = (theDate: number) => {
        this.setState({ui: <BigDay date = {theDate} month = {"January"}  />, dailyPage: true,
        title: <TitleBar isDaily = {true} month = {"January"} date = {theDate} year = {2019}/>, });
    }

    public backButton = () => {
       this.setState({ ui:  (  <StyledWrapper>
            <Month month = "January" numberOfDays = {31} changeUI = {this.changeUI}/>
            </StyledWrapper> ),
            dailyPage: false,
            title: <TitleBar  month = "January" year = {2019}/>,
        });
    }

    // tslint:disable-next-line: typedef
    public render() {
        let secondaryUI : JSX.Element | undefined;
        if(this.state.dailyPage) {
            secondaryUI = (<div className = "backButton"><button className={"goBack"} onClick = {this.backButton}>Go Back</button></div>);
        }
        return (
            <div className="mainApp">
                <header className = "mainHeader">
                {this.state.title}
                {secondaryUI}
                </header>
                <div className="mainContent">
                {this.state.ui}
                </div> </div>);
    }
}

export class BigDay extends React.Component<DayProps, DayState> {
    constructor(props: DayProps) {
        super(props);
        this.state = {
            date: 1,
            month: "January",

        }
    }

    render() {
        return (
            <div className={"tester"} id="bigDay">
                <div className="bigText" >{this.props.date}</div>
            </div>
        );
    }
}

export interface IMonthProps {
    month: string;
    numberOfDays: number;
    holidays?: number[];
    changeUI: (date: number) => void;
}
export interface IMonthState {
    month: string;
    numberOfDays: number;
    holidays?: number[];
    days?: number[];
}
export class Month extends React.Component<IMonthProps, IMonthState>{
    constructor(props: IMonthProps) {
        super(props);
        this.state = {
            month: props.month,
            numberOfDays: props.numberOfDays,
            days: this.generateDaysList(0, 31),
        };
    }
    public generateDaysList(start: number, stop: number) {
        const days: number[] = [];
        for (let i = 0; i < this.props.numberOfDays; i++) {
            days.push(i + 1);
        }
        return days;
    }

    public generateRow(startNum: number, stopNum: number, initial: number) {
        const days = [];
        for (let i = startNum; i <= stopNum; i++) {
            const theDate = initial + 7 * (i - 1);
            if(theDate <= this.props.numberOfDays)
            days.push(theDate);
        }
        return days;
    }

    render() {
        return (<div className="Month">
            {/* <div id="col">
                {this.generateRow(1, 5, 1).map((theDate) => {
                    return <Day date = {theDate} month = {this.state.month}/>
                })}
            </div>
            <div id="col">
            {this.generateRow(1, 5, 2).map((theDate) => {
                    return <Day date = {theDate} month = {this.state.month}/>
                })}
            </div>
            <div id="col">
            {this.generateRow(1, 5, 3).map((theDate) => {
                    return <Day date = {theDate} month = {this.state.month}/>
                })}
            </div>
            <div id="col">
            {this.generateRow(1, 5, 4).map((theDate) => {
                    return <Day date = {theDate} month = {this.state.month}/>
                })}
            </div>
            <div id="col">
            {this.generateRow(1, 5, 5).map((theDate) => {
                    return <Day date = {theDate} month = {this.state.month}/>
                })}
            </div>
            <div id="col">
            {this.generateRow(1, 5, 6).map((theDate) => {
                    return <Day date = {theDate} month = {this.state.month}/>
                })}
            </div>
            <div id="col">
            {this.generateRow(1, 5, 7).map((theDate) => {
                    return <Day date = {theDate} month = {this.state.month}/>
                })}
            </div> */}
            {this.generateDaysList(0, 31).map((theDate) => {
                    return <SmallDay date = {theDate} month = {this.state.month} changeUI ={this.props.changeUI}/>
                })}
        </div>
        );
    }
}

export interface DayProps {
    todoList?: string[];
    isHoliday?: boolean;
    date: number;
    month: string;
}
export interface SmallDayProps {
    todoList?: string[];
    isHoliday?: boolean;
    date: number;
    month: string;
    isCurrentlySelected?: boolean;
    changeUI: (date: number) => void;
}

export interface DayState {
    todoList?: string[];
    isHoliday?: boolean;
    date: number;
    month: string;
    days?: [];
    isCurrentlySelected?: boolean;
}
export class SmallDay extends React.Component<SmallDayProps, DayState> {
    constructor(props: SmallDayProps) {
        super(props);
        this.state = {
            date: 1,
            month: "January",

        }
    }
    private _onClick(theDate: number) {
        this.props.changeUI(theDate);
    }
    render() {
        return (
            <a onClick = {() => this._onClick(this.props.date)}>
            <div className={"tester"} id="day">
                <text fontSize={1} className="text">{this.props.date}</text>
            </div>
            </a>
        );
    }
}

export const StyledWrapper = styled.div`
padding-top: 10px;
padding-bottom: 20px;
padding-left: 5px;
padding-left: 5px;
justifyContent: space-between;
font-weight: bold;
font-size: large;
display: flex;
flex-direction: row;
overflow: hidden;
flex-flow: row;
`;

export const StyledHeader = styled.h1`
position: relative;
width: 100%;
height: 50px;
align-self: center;
font-weight: bold;
display: inline-block;
`;
