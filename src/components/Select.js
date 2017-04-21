import React, { Component } from 'react';

class Select extends Component {
    
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
	fetch(`http://api.aws.toprater.io/marketplaces`)
	    .then(response => response.json())
	    .then(json => {
		this.setState({
		    data: json.data,
		});

	    });
    }
    
    render() {	
	var option = this.state.data.map(function(data, index) {
	    return (
		    <option key={index} value={data.id}>{data.label}</option>
		);
	    });

	return (
	    <select onChange={this.props.onChange}>{option}</select>
	);
    }
}

export default Select;
