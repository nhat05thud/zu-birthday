import React, { Component } from 'react';
import SlideComponent from './SlideComponent';

class MainContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEndLoading: false,
            isShowLoadingComponent: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    isEndLoading: !prevState.isEndLoading
                }
            });
        }, 1000);
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    isShowLoadingComponent: !prevState.isShowLoadingComponent
                }
            });
        }, 2000);
    }
    render() {
        let endLoadingClass = (this.state.isEndLoading ? 'endLoad' : '');
        return (
            <div className="main__content--wrapper">
                {this.state.isShowLoadingComponent ?
                <div className={`loading-wrapper ${endLoadingClass}`}>
                    <div className="circle"></div>
                    <div className="loading">
                        <div className="planet">
                            <div className="ring"></div>
                            <div className="cover-ring"></div>
                            <div className="spots">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <p>loading</p>
                    </div>
                </div>
                : <SlideComponent />
                }
            </div>
        )
    }

}
export default MainContent;