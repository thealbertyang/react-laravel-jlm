import React from 'react'


export class Form extends React.Component {
	constructor(props){
		super(props);

		 this.submitForm = this.submitForm.bind(this)
	}

	submitForm(e) {
		this.props.onSubmit(this.state, this.props, this)
	}

	render(){
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}