import React, { Component } from 'react';

import Select from '../../components/Select';

class App extends Component {
    
    constructor(props) {
        (props);
        this.state = {};
	this.marketing = {};
	this.onChange = this.onChange.bind(this);
	this.onClick = this.onClick.bind(this);
    }
    
    componentDidMount() {
	this.state = {};
    }

    
    onChange(event){
//	console.log(event.target.value);
//        this.setState({value: event.target.value});
	fetch(`http://api.aws.toprater.io/marketplaces/${event.target.value}?fields=marketing`)
	    .then(response => response.json())
	    .then(json => {
		this.setState({
		    marketing: json.data.marketing,
		});

	    });
    }
    
    onClick(event){
	console.log(this.state);
    }
    
    renderParams(setting) {
	//console.log(JSON.stringify(setting))
	return (
	    <div>
		<div className="row">
		    <label>campaign</label>
		    <input type="text" 
			defaultValue={setting.campaign} 
			name="enabled" 
			onChange={function (event) {setting.campaign = event.target.value;}} />

		</div>
		
		<div className="row">
		    <label>scenario</label>
		    <input type="text" 
			defaultValue={setting.scenario} 
			name="enabled" 
			onChange={function (event) {setting.scenario = event.target.value;}} />
		</div>
		
		<div className="row">
		    <label>Enabled</label>
		    <input type="checkbox" 
			defaultChecked={setting.enabled} 
			name="enabled"   
			onChange={function (event) {setting.enabled = event.target.checked;}} />
		</div>
		
		<div className="row">
		    <label>Demo</label>
		    <input type="checkbox" 
			defaultChecked={setting.demo} 
			name="demo"  
			onChange={function (event) {setting.demo = event.target.checked;}} />
		   
		</div>
		<div className="row">
		    <label>SplitTest</label>
		    <input type="checkbox"  
			defaultChecked={setting.splitTest}  
			name="splitTest" 
			onChange={function (event) {setting.enabled = event.target.checked;}} />
		</div>
	    </div>
	);
    }
    
    render() {	
	var settings;
	if (this.state.marketing) {
	    settings = <div>
		<div className="column">
		    <div>partner_page</div>
		    {this.renderParams(this.state.marketing.spheres["@hpda"].web["partner_page"])}
		</div>
		<div className="column">
		    <div>dev_page</div>
		    {this.renderParams(this.state.marketing.spheres["@hpda"].web["dev_page"])}
		</div>
		<button onClick={this.onClick}>Text</button>
	    </div>
		    
	
	}
//	var settings = this.state.marketing.spheres.map(function(data, index) {
//	    return (
//		    <option key={index} value={data.id}>{data.label}</option>
//		);
//	    });

    

	return (
	    <div>
		<Select onChange={this.onChange} />
		
		<div>{settings}</div>
	
	    </div>
	);
    }
}

export default App;
