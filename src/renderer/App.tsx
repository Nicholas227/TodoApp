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
/** React state of the App component */
//test
//test
/** A component the renders the whole application UI */
export default class App extends React.Component<{}> {
    /** Creates an App instance */
    constructor(props?: any, context?: any) {
        super(props, context);
    }

    // tslint:disable-next-line: typedef
    public render() {
        return ( 
            <div className = "mainApp">
        <h1 className = "mainHeader"> Main Screen </h1>
            <div className = "mainContent">
            <StyledWrapper>
                Row 1
                </StyledWrapper>
            <StyledWrapper>
                Row 2
                </StyledWrapper>
            <StyledWrapper>
                <Day date = {1} month = {"January"}/>
                 </StyledWrapper>
                </div> </div>);
    }
}

export interface IMonthProps{
    month: string;
    numberOfDays: number;
    holidays?: number[];
}
export interface IMonthState{
    month: string;
    numberOfDays: number;
    holidays?: number[];
}
export class Month extends React.Component<IMonthProps, IMonthState>{
    constructor(props: IMonthProps) {
        super(props);
        this.state = {
            month: props.month,
            numberOfDays: props.numberOfDays,
        };
    }
}

export interface DayProps {
    todoList?: string[];
    isHoliday?: boolean;
    date: number;
    month: string;
}

export interface DayState {
    todoList?: string[];
    isHoliday?: boolean;
    date: number;
    month: string;
}
export class Day extends React.Component<DayProps, DayState> {
    constructor(props: DayProps) {
        super(props);
        this.state = {
            date: 1,
            month: "January",
        }
    }
    render() {
        return (
            <div className = {this.state.date + this.state.month} id = "day">
                <text fontSize = {1} className = "test">1</text>
            </div>
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
