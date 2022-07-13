const last = a => a[a.length - 1]
const reduce = a => a.slice(0, -1)

class Middleware {
  use (method) {
    this.go = ((stack) => (...args) => stack(...reduce(args), () => {
      const next = last(args)
      method.apply(this, [...reduce(args), next.bind.apply(next, [null, ...reduce(args)])])
    }))(this.go)
  }

  go (...args) {
    last(args).apply(this, reduce(args))
  }
}

module.exports.Middleware = Middleware;

/*
class Middleware {
  
  constructor() {
    
    // Array prototype last
    if (!Array.prototype.last) {
      Array.prototype.last = function() {
        return this[this.length - 1];
      }
    }
    
    // Array prototype reduceOneRight
    if (!Array.prototype.reduceOneRight) {
      Array.prototype.reduceOneRight = function() {
        return this.slice(0, -1);
      }
    }
    
  }
  
  use(fn) {
    this.go = ((stack) => (...args) => stack(...args.reduceOneRight(), () => {
      let _next = args.last();
      fn.apply(this, [...args.reduceOneRight(), _next.bind.apply(_next, [null, ...args.reduceOneRight()])]);
    }))(this.go);
  }
  
  go(...args) {
    let _next = args.last();
    _next.apply(this, args.reduceOneRight());
  }
  
}
*/