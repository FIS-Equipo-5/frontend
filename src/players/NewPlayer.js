import React from 'react';

class NewPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {player_name: '', firstname: '', lastname: '', position: '', nationality: '', value: '', team_id: '', total: '', assists: '', yellow: '', red: ''};
        this.changePlayer = this.changePlayer.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changePlayer(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    clickAdd() {
        this.props.onAddPlayer(this.state);
        this.setState({
            player_name: '', firstname: '', lastname: '', position: '', nationality: '', value: '', team_id: '', total: '', assists: '', yellow: '', red: ''
        });
    }

    render() {
        return(
            <tr>
                <td><input className="form-control" name="player_name" value={this.state.player_name} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="firstname" value={this.state.firstname} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="lastname" value={this.state.lastname} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="position" value={this.state.position} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="nationality" value={this.state.nationality} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="value" value={this.state.value} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="team_id" value={this.state.team_id} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="total" value={this.state.total} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="assists" value={this.state.assists} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="yellow" value={this.state.yellow} onChange={this.changePlayer}/></td>
                <td><input className="form-control" name="red" value={this.state.red} onChange={this.changePlayer}/></td>
                <td><button className="btn btn-success" onClick={this.clickAdd}>Add</button></td>
            </tr>
        );
    }
}

export default NewPlayer;