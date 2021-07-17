import fetch from 'node-fetch';

module.exports = new Promise(function(resolve, reject){
    async.function(function(response) {
        let url = "http://php-crud-api/api.php/records/departments/";

		const json = fetch(url).then(res => res.json());
		console.log(json);
		
		resolve(json);

		/* https.get(url,(res) => {
			let body = "";

			res.on("data", (chunk) => {
				body += chunk;
			});

			res.on("end", () => {
				try {
					let json = JSON.parse(body);
					// do something with JSON
					return generateKeyValuePair(json);
				} catch (error) {
					console.error(error.message);
				};
			});

		}).on("error", (error) => {
			console.error(error.message);
		}); */
    });
});