import React from "react";
import Dashboard1 from "./Examples/Dashboard1";
import {css, StyleSheet} from "aphrodite";

class Examples extends React.Component {
    state = {
        dashboard: 0
    }

    styles = StyleSheet.create({
        container: {
            width: '100%'
        },

        bar: {
            width: '100%',
            height: '30px'
        },

        button: {
            height: '30px'
        }
    })

    returnDashboard = ()=> {
        let components = [];
        console.log(this.state.dashboard)
        switch(this.state.dashboard){
            case '1':
                components.push(<Dashboard1/>)
            case '2':
            case '3':
        }
        console.log(components)
        return components
    }

    changeDashboard = (e)=> {
        this.setState({
            dashboard: e.currentTarget.value
        }, ()=>{console.log(this.state.dashboard)})
    }

    render() {
        return(
            <div className={css(this.styles.container)}>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value={1}  checked={this.state.dashboard==='1'} onChange={this.changeDashboard}/>
                            Cluster state metrics
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value={2} checked={this.state.dashboard==='2'} onChange={this.changeDashboard}/>
                            Resource metrics from Kubernetes nodes and pods
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value={3} checked={this.state.dashboard==='3'} onChange={this.changeDashboard}/>
                            Work metrics from the Kubernetes Control Plane
                        </label>
                    </div>
                </form>
                <hr/>
                {this.returnDashboard()}
            </div>

        )
    }
}

export default Examples