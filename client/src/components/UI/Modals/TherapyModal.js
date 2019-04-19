import React, { Component } from 'react';

class TherapyModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			stuff: ""
		}
	}

	render() {
		return (
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
		        	<DialogTitle><h4>Initial Therapy</h4></DialogTitle>
					<DialogContent>
						<Grid container spacing={40} justify='space-evenly' direction='row' alignItems='center'>
							<Grid item xs={12}>
								<FormControl variant="outlined">
									<DialogContentText>Medication</DialogContentText>
									<Select
										value={this.props.evalData.medication}
										native
										onChange={this.handleChange}
										input={<OutlinedInput name="medication"/>}
									>
										<option value="" />
										<option value={"citralopram"}>Citralopram</option>
										<option value={"sertraline"}>Sertraline</option>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl variant="outlined" className={classes.FormControl}>
									<TextField
										value={this.props.evalData.therapyNotes}
										name="therapyNotes"
										id="initial-therapy-notes"
										label="Notes on Side Effects"
										multiline
										rows="4"
										onChange={this.handleChange}
									/>
								</FormControl>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.props.nextEvalHandler.bind(this.props.type)}>Log Response</Button>
		        		<Button onClick={this.updateEvals}>
		        			Save
		        		</Button>
			            <Button onClick={this.props.modalClosed} color="primary">
			            	Close
			            </Button>
	  				</DialogActions>
	        	</Dialog>
			</Aux>
		);
	}
}