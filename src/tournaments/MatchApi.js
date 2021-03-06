class MatchsApi {

    static API_BASE_URL = (process.env.NODE_ENV === "production") ? "https://fis-g5-tournaments.herokuapp.com/api/v1" : "/api/v1"

    static requestHeader() {
        return {}
    }

    static getAllMatches(token, currentPage) {
        const request = new Request(MatchsApi.API_BASE_URL + `/matches?page=${currentPage}`, {
            method: 'GET',
            headers: {
                'x-access-token': token,
            },
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }


    static getMatchById(token, match_id) {
        const request = new Request(MatchsApi.API_BASE_URL + "/match/" + match_id, {
            method: 'GET',
            headers: {
                'x-access-token': token,
            }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getMatchesByTournament(token, tournament_id, currentPage) {
        const request = new Request(MatchsApi.API_BASE_URL + `/matches/${tournament_id}?page=${currentPage}`, {
            method: 'GET',
            headers: {
                'x-access-token': token,
            }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static putMatchById(updateMatch, token) {
        const request = new Request(MatchsApi.API_BASE_URL + "/match/" + updateMatch._id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token,
            },

            body: JSON.stringify({
                venue_city: updateMatch.venue_city,
                tournamentUuid: updateMatch.tournamentUuid,
                visitorTeamName: updateMatch.visitorTeamName,
                localTeamName: updateMatch.localTeamName,
                matchDate: updateMatch.matchDate,
                stats: updateMatch.stats
            })
        });

        return fetch(request).then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }

    static deleteMatch(id, token) {
        const request = new Request(MatchsApi.API_BASE_URL + "/match/" + id, {
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

export default MatchsApi;