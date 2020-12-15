// 洋葱模型

let middleware = []
middleware.push((next) => {
	console.log(0)
	next()
	console.log(3)
})
middleware.push((next) => {
	console.log(1)
	next()
	console.log(1.1)
})
middleware.push(() => {
    console.log(2)
})

let fn = compose(middleware)
fn()

// 
function compose(middleware){
	return function() {
		function dispatch(i) {
			let fn = middleware[i];
			if (!fn) {
				return null;
			}
			fn(function() {
				dispatch(i+1);
			})
		}
		dispatch(0);
	}
}


