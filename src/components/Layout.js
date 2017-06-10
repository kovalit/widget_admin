import React, { Component } from 'react';

class Layout extends Component {
    
    
    render() {	

	return (
	    <html lang="en">
		<head>
		    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		    <meta charset="utf-8" />
		    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		    <meta name="viewport" content="width=device-width, initial-scale=1" />
		</head>
		<body class="nav-md">
		    {this.props.children}
		</body>
	    </html>
	);
    }
}

export default Layout;
