import React from 'react'
import {css, StyleSheet} from "aphrodite";


const styles = StyleSheet.create({
    container: {
        maxWidth: '90%',
        height: '30%'
    },
})

const Graph = (props) => {
    const IP = "http://192.168.205.10:31187";
    let id = "queryGraph" + props.id;
    let selector = "#" + id;
    console.log(id);
    const link = document.createElement("link");
    const link2 = document.createElement("link");
    const link3 = document.createElement("link");
    const link4 = document.createElement("link");
    link.type = link2.type = link3.type = link4.type = "text/css"
    link.rel = link2.rel = link3.rel = link4.rel = "stylesheet"
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    const script4 = document.createElement("script");
    const script5 = document.createElement("script");
    const script6 = document.createElement("script");
    const script7 = document.createElement("script");
    const script8 = document.createElement("script");
    link.href = IP+'/static/vendor/rickshaw/rickshaw.min.css';
    link2.href = IP+'/static/vendor/bootstrap-4.3.1/css/bootstrap.min.css';
    link3.href = IP+'/static/css/prom_console.css';
    link4.href = IP+'/static/vendor/bootstrap4-glyphicons/css/bootstrap-glyphicons.min.css';
    script.src = IP+'/static/vendor/rickshaw/vendor/d3.v3.js';
    script2.src = IP+'/static/vendor/rickshaw/vendor/d3.layout.min.js';
    script3.src = IP+'/static/vendor/rickshaw/rickshaw.min.js';
    script4.src = IP+'/static/vendor/js/jquery-3.3.1.min.js';
    script5.src = IP+'/static/vendor/js/popper.min.js';
    script6.src = IP+'/static/vendor/bootstrap-4.3.1/js/bootstrap.min.js';
    script7.src = IP+'/static/js/prom_console.js';
    let element = document.querySelector(selector)
    if (element!=null){
        element.innerHTML="";
    }
    script7.onload = () => {
        console.log(props.previous_query)
        console.log(props.query)
        if (props.query !== '') {
            new window.PromConsole.Graph({
                node: document.querySelector(selector),
                expr: props.query,
                height: props.height - 220
            })
        }
    }
    script8.innerHTML = "var PATH_PREFIX = 'http://192.168.205.10:31187'";
    document.body.appendChild(link);
    document.body.appendChild(link2);
    document.body.appendChild(link3);
    document.body.appendChild(link4);
    document.body.appendChild(script);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    document.body.appendChild(script4);
    document.body.appendChild(script5);
    document.body.appendChild(script6);
    document.body.appendChild(script7);
    document.body.appendChild(script8);
    if (props.query !== '') {
        let a = <div className={css(styles.container)}  id={id}/>
        if (a instanceof HTMLElement) {
            console.log(a);

        }
        return a;
    }
    else return null
}

export default Graph