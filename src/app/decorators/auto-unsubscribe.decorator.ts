const isFunction = fn => typeof fn === 'function';

const doUnsubscribe = subscription => {
  if (subscription && isFunction(subscription.unsubscribe)) {
    console.log('Unsubscribing !!!!');
    subscription.unsubscribe();
  }
};

const executeOriginalFunction = (original, args) => {
  if (isFunction(original)) {
    original.apply(this, args);
  }
};

export function AutoUnsubscribe({arrayName = 'subscriptions', event = 'ngOnDestroy' } = {}) {
  console.log(arrayName, event);
  // tslint:disable-next-line:only-arrow-functions ban-types
  return function(constructor: Function) {
    const original = constructor.prototype[event];
    console.log(constructor.prototype);
    console.log(original);
    constructor.prototype[event] = function() {
      console.log('wow');
      if (Array.isArray(this[arrayName])) {
        console.log('The subscription array: ', this[arrayName]);
        this[arrayName].filter(subscription => !subscription.closed).forEach(doUnsubscribe);
        return executeOriginalFunction.call(this, original, arguments);
      } else {
        console.warn(`${constructor.name} is using @autoUnsubscribe but does not has an Array of subscriptions`);
      }

      executeOriginalFunction.call(this, original, arguments);
    };
  };
}
