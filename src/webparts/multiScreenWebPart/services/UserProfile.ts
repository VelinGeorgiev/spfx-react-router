import {Config} from '../../config';

export class UserProfile {

    getCurrentUser() {
        return new Promise<any>((resolve, reject) => {
            fetch(`${Config.siteUrl}/_api/contextinfo`, {
                headers: {
                    "Accept": "application/json;odata=nometadata",
                    "Content-type": "application/json;odata=verbose"
                },
                method: "POST"
            }).then((response) => {
                if (!response.ok) {
                    reject(response);
                }
                return response.json();
            }).then((response) => {
                console.log(response);
    
                fetch(`${Config.siteUrl}/_api/SP.UserProfiles.PeopleManager/GetMyProperties`, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "Content-type": "application/json;odata=verbose",
                        "X-RequestDigest": response.FormDigestValue
                    },
                    method: "GET"
                }).then((response) => {
                    if (!response.ok) {
                        reject(response);
                    }
                    return response.json();
                }).then((user) => {
                    console.log(user);
                    resolve(user);
                })
            })
        });
    }
}