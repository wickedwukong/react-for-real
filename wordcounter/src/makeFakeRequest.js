function makeFakeRequest() {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (Math.random() > 0.5) {
         resolve('success');
       } else {
        reject("failure");
       }
     }, 100)
  });
}


export default makeFakeRequest;