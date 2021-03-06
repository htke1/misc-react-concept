import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
    this.state={
        hasError: false}
    
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    render() {
        if(this.state.hasError){
        return (
            <div>
        <i>Wrong naming</i>
            </div>
        )}
        else{
            return(
                <div>
                    {this.props.children}
                </div>
            )
        }
    }
}


export default ErrorBoundary;