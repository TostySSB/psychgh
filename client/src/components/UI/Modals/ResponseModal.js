import React, { Component } from 'react';

class ResponseModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stuff: ""
		}
	}

	render() {
		<Aux>
			<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
			<Dialog
				open={this.props.show}
				style={{
					transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: this.props.show ? '1' : '0'
				}}
	          	aria-labelledby="form-dialog-title"
	          	fullWidth
	          	maxWidth='sm'
        	>
    			<DialogTitle><h4>Response</h4></DialogTitle>
					<ResponseDialog />
					<DialogActions>
						<Button>Log Evaluation</Button>
		        		<Button onClick={this.updateEvals}>
		        			Save
		        		</Button>
			            <Button onClick={this.props.modalClosed} color="primary">
			            	Close
			            </Button>
		          </DialogActions>
        	</Dialog>
		</Aux>
	}
}