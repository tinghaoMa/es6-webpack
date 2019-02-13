export default () => {
  let deferred = {
    resolved: false
  };
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = (...args) => {
      resolve(...args);
      deferred.resolved = true;
    };
    deferred.reject = (...args) => {
      reject(...args);
      deferred.resolved = false;
    };
  });
  return deferred;
}