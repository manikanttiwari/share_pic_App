export const getImages = async () => {

    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MDAyNTUxOTIsImp0aSI6IkNmc0lJRmYxWm43TUNJdUJrS2pKVVEiLCJpc3MiOiJodHRwczpcL1wvcmVzb3VyY2VzLnZlZ2E2LmluZm9cLyIsIm5iZiI6MTYwMDI1NTIwMiwiZGF0YSI6eyJ1c2VyX2lkIjoiMSIsImFwcF91cmwiOiJOVWxsIn19.Y4UpB0--8kQWHFHrONhyJy_jGl3VmDZ93Y-qn7yD6tLZRmzktXeIf4YTdraNIMrYTucuVYLB6VrWVhN4TrZpaA"

    let didTimeOut = false;

    return new Promise(function (resolve, reject) {
        const timeout = setTimeout(function () {
            didTimeOut = true;
            reject(new Error('Request Time Out'));
        }, 60000);

        fetch(
            "https://resources.vega6.info/get-photo/search",
            {
                method: `GET`,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        )
            .then(response => {
                clearTimeout(timeout);
                if (!didTimeOut) {
                    if (response) {
                        return response.json();
                    } else {
                        reject(new Error('No data found'));
                    }
                }
            })
            .then(formattedResponse => {
                let responseData = formattedResponse|| formattedResponse;
                resolve(responseData);
            })
            .catch(error => {
                reject(new Error('Something went wrong'));
            })
    })
        .then(responseData => {
            return responseData;
        })
        .catch(err => {
            return { status: { err_cd: err.message } }
        });
};