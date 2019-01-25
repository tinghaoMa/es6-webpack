/**
 * [description]
 * @returns {[type]} [description]
 */

export default function () {
	console.log("hello world");
	let p1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("1111111111");
		}, 1000);
	});
	let p2 = new Promise((resolve, reject) => {
		setTimeout(resolve, 3000, "222222222");
	});

	Promise.race([p1, p2]).then(data => {
		console.log(data);
	});

	let value = getData().then(data => {
		return data;
	});
	console.log(value)

}

function doSomething() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("执行完毕");
			resolve("dosomething");
		}, 3000);
	})
}

async function getData() {
	let value = await doSomething();
	return value;
}

const delayPromise = ms => new Promise(resolve => {
	setTimeout(resolve, ms);
});

export const request = () => {

	const requestPromise = new Promise((resolve, reject) => {

		setTimeout(resolve, 3000, "延迟三秒获取到数据");
	});

	return requestPromise;
};
