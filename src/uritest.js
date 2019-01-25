export  default ()=>{
	let url ='mail@example.com';
	console.log(encodeURI(url));
	console.log(encodeURIComponent(url));

	let request = new Promise((resolve, reject) => {
		setTimeout(()=>{
			reject()
		},3000)
	}).then(data=>{
		return data;
	}).catch(error=>{
		console.log('error');
	})


	request.then(data=>{
		console.log(data)
	})
}

