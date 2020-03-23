import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			hasError:false
		}
	}

	componentDidCatch()
	{
		this.setState({hasError:true});
	}

	render()
	{
		if (this.state.hasError)
		{
			return <h1>Sorry</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;