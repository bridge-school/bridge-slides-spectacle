const promise = new Promise((resolve, reject) => {
  // do async thing here
  if (everythingIsFine) { 
    resolve(data)
  } else {
    reject(new Error(‘reason'))
  }
})

promise.then(data => doSomething(data), error => logIt(error));