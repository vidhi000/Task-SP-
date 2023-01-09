//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//Promise.then() takes two arguments, a callback for success and another for failure.

//Both are optional, so you can add a callback for success or failure only.

new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      })
    );
  });
  