import React from 'react'
//import RGL, {WidthProvider} from 'react-grid-layout';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import '../Panel.css'
import Graph from "../Graph";
import {css, StyleSheet} from "aphrodite";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const styles = StyleSheet.create({
    button: {
        height: '30px'
    }
});

function onLayoutChange(layout, layouts) {
    console.log(layouts)
    saveToLS("layouts", layouts);
    this.setState({
        layouts: layouts
    });
}

function getFromLS(key) {
    let ls = {};
    if (localStorage) {
        try {
            ls = JSON.parse(localStorage.getItem("rgl-8")) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (localStorage) {
        localStorage.setItem(
            "rgl-8",
            JSON.stringify({
                [key]: value
            })
        );
    }
}

const Dashboard1 = () => (
    <div>
        <ResponsiveReactGridLayout className="layout" cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                                   onLayoutChange={(layout, layouts) =>
                                       onLayoutChange(layout, layouts)} >
            <div key={1} >
                <h3> Master node status </h3>
                <button type="button" id={1} className={css(styles.button)} onClick={() => this.deletePanel(1)}>
                    Delete Panel
                </button>
                <hr/>
                <Graph query={"sum(kube_node_status_condition{node=\"k8s-head\",condition!=\"Ready\",status=\"false\"})"} previous_query={""}  id={1}/>
            </div>
            <div key={2} >
                <h3> Worker node #1 status </h3>
                <button type="button" id={2} className={css(styles.button)} onClick={() => this.deletePanel(2)}>
                    Delete Panel
                </button>
                <hr/>
                <Graph query={"sum(kube_node_status_condition{node=\"k8s-node-1\",condition!=\"Ready\",status=\"false\"})"} previous_query={""}  id={2}/>
            </div>
            <div key={3} >
                <h3> Worker node #2 status </h3>
                <button type="button" id={3} className={css(styles.button)} onClick={() => this.deletePanel(3)}>
                    Delete Panel
                </button>
                <hr/>
                <Graph query={"sum(kube_node_status_condition{node=\"k8s-node-2\",condition!=\"Ready\",status=\"false\"})"} previous_query={""}  id={3}/>
            </div>
            <div key={4} >
                <h3> Worker node #2 status </h3>
                <button type="button" id={4} className={css(styles.button)} onClick={() => this.deletePanel(4)}>
                    Delete Panel
                </button>
                <hr/>
                <Graph query={"kube_deployment_spec_replicas"} previous_query={""}  id={4}/>
            </div>


        </ResponsiveReactGridLayout>
    </div>
)

export default Dashboard1