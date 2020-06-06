import React, { Component } from 'react'
import Graph from './Graph'
import {css, StyleSheet} from "aphrodite";

class Search extends Component {
    styles = StyleSheet.create({
        container: {
            width: '100%'
        },

        bar: {
            width: '100%'
        }
    })

    state = {
        previous_query: '',
        type: '',
        query : '',
        title : '',
        id : 0,
    };
    componentDidMount(){
        this.setState({
            id: this.props.id
        })
    };
    handleInputChange = () => {
        this.setState({
            previous_query: this.state.query,
            query: this.search.value,
            title : this.name.value
        })
    };

    render(){
        return(
            <div className={css(this.styles.container)}>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="prometheus" checked={true} />
                            Prometheus query
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="top" />
                            Kiali query
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="istio" />
                            Option 3
                        </label>
                    </div>
                    <div className="search-form">
                        <input
                            className={css(this.styles.bar)}
                            placeholder="Enter your title"
                            ref={input => this.name = input}
                        />
                    </div>
                    <div className="search-form">
                        <input
                            className={css(this.styles.bar)}
                            placeholder="Enter your query"
                            ref={input => this.search = input}
                        />
                    </div>
                    <div>
                        <button type="button" onClick={this.handleInputChange}>
                            Search
                        </button>
                    </div>
                </form>
                <h2>{this.state.title}</h2>
                <Graph query={this.state.query} previous_query={this.state.previous_query} id={this.state.id}/>
            </div>
        )
    }
}

export default Search