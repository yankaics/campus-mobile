const AppSettings = 		require('../AppSettings');


const EventService = {

	FetchEvents() {
		return fetch(AppSettings.EVENTS_API_URL, {
			method: 'get',
			dataType: 'json',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((responseData) => responseData);
	}

};

export default EventService;
