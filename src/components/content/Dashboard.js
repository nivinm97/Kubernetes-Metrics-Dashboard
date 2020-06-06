import React from 'react'
//import RGL, {WidthProvider} from 'react-grid-layout';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import ContainerDimensions from 'react-container-dimensions'
import './Panel.css'
import Graph from "./Graph";
import {css, StyleSheet} from "aphrodite";
import { WidthProvider, Responsive } from "react-grid-layout";


const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

class Dashboard extends React.Component {

    state = {
        panels : JSON.parse(localStorage.getItem('Dashboard')),
        layouts: JSON.parse(JSON.stringify(originalLayouts))
    };

    styles = StyleSheet.create({
        button: {
            height: '30px'
        }
    });


    static get defaultProps() {
        return {
            className: "layout",
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
            rowHeight: 30
        };
    }

    resetLayout() {
        this.setState({ layouts: {} });
    }






    deletePanel = (i) => {
        console.log(i);
        console.log(this.state.panels);
        this.state.panels.panels.splice(i,1);
        this.setState({
            panels: this.state.panels
        })
        console.log(this.state.panels);
        let array = JSON.parse(localStorage.getItem('Dashboard'));
        array['panels'].splice(i);
        localStorage.setItem('Dashboard',JSON.stringify(array))
    }

    onLayoutChange(layout, layouts) {
        console.log(layouts)
        saveToLS("layouts", layouts);
        this.setState({
            layouts: layouts
        });
    }



    drawPanel = () => {
        let components = [];
        console.log(this.state.panels)
        if(Array.isArray(this.state.panels.panels)){
            this.state.panels.panels.map((panel) => {
                console.log(panel)
                let i = this.state.panels.panels.indexOf(panel)

                components.push(<div key={i} ref={"panel"+i}>
                    <h1> {panel.title}</h1>
                    <button type="button" id={i} className={css(this.styles.button)}
                            onClick={() => this.deletePanel(i)}>
                        Delete Panel
                    </button>
                    <hr/>
                    <ContainerDimensions>
                        { ({ height }) =>
                            <Graph query={panel.query} height={height} previous_query={panel.previous_query} id={i}/>
                        }
                    </ContainerDimensions>
                </div>)
                return panel
            })
        }
        console.log(document.getElementById("panel1"))
        console.log(components);

        return components
    }

    render(){
        // layout is an array of objects, see the demo for more complete usage
        return (
            <div>
                <ResponsiveReactGridLayout className="layout" breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                           cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
                                           onLayoutChange={(layout, layouts) =>
                                               this.onLayoutChange(layout, layouts)
                                           }>
                    {this.drawPanel()}

                </ResponsiveReactGridLayout>
            </div>
        )
    }
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



export default Dashboard;