import React from 'react'
import {css, StyleSheet} from "aphrodite";

class AddPanel extends React.Component {

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

    state = {
        query : '',
        previous_query : '',
        title : '',
    };

    handleInputChange = () => {

        this.setState({
            query: this.search.value,
            previous_query: '',
            title : this.name.value
        }, () => {
            let array = JSON.parse(localStorage.getItem('Dashboard'));
            let element = this.state;
            if (array == null){
                array = JSON.parse('{"panels":[]}')
            }
            array['panels'].push(element)
            localStorage.setItem('Dashboard',JSON.stringify(array))
            console.log(JSON.parse(localStorage.getItem('Dashboard')));
        })






    };

    render() {
        return(
        <div className={css(this.styles.container)}>
            <form>
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
                    <button type="button" className={css(this.styles.button)} onClick={this.handleInputChange}>
                        Search
                    </button>
                </div>
            </form>
        </div>
        )}
}

export default AddPanel