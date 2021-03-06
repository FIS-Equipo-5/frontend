class TransfersApi{
    
    static API_BASE_URL = (process.env.NODE_ENV==="production")? "https://mercadofichajes.herokuapp.com/api/v1" : "/api/v1"

    static requestHeader(){
        return{ }
    }

    static getAllTransfers(token){
        const request = new Request(TransfersApi.API_BASE_URL+ "/transfers", {
            method: 'GET',
            headers: {
                'x-access-token': token,
            }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static postTransfer(newTransfer, token){
        const request = new Request(TransfersApi.API_BASE_URL+ "/transfer", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
            body: JSON.stringify({
                origin_team_id: newTransfer.origin_team_id,
                destiny_team_id: newTransfer.destiny_team_id,
                transfer_date: newTransfer.transfer_date,
                contract_years: newTransfer.contract_years,
                cost: newTransfer.cost,
                player_id: newTransfer.player_id
              })
        });

        return fetch(request).then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }

    static putTransfer(updateTransfer, token){
        const request = new Request(TransfersApi.API_BASE_URL+ "/transfer/"+updateTransfer._id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
            body: JSON.stringify({
                origin_team_id: updateTransfer.origin_team_id,
                destiny_team_id: updateTransfer.destiny_team_id,
                transfer_date: updateTransfer.transfer_date, 
                contract_years: updateTransfer.contract_years, 
                cost: updateTransfer.cost, 
                player_id: updateTransfer.player_id,
              })
        });

        return fetch(request).then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }

    static deleteTransfer(id, token){
        const request = new Request(TransfersApi.API_BASE_URL+ "/transfer/"+id, {
            method: 'DELETE',
            headers: {
                'x-access-token': token,
            }
        });

        return fetch(request).then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }

}

export default TransfersApi;