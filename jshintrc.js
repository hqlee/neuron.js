module.exports = {
  boss: true,
  curly: true,
  eqeqeq: true,
  eqnull: true,
  expr: true,
  immed: true,
  noarg: true,

  // Never force string to quoting with single or double quotemarks
  quotmark: false,
  smarttabs: true,
  undef: true,

  // `unused` option of jshint is buggy
  // There're cases that only ocurs when overloading
  unused: true,

  sub: true,

  browser: true,

  // Defining each variables with a `var` statement is more convenient for coding
  onevar: false,

  asi: false,
  lastsemic: false,
  es3: true,
  // es5: true,

  // Report JSHint errors but not fail the task,
  // JShint is a only creature of obsessive compulsive disorder, IMO.
  // force: true,

  // do not check line breaking
  laxbreak: true,

  // allow global "use strict"
  globalstrict: true,
  validthis: true,

  // allow to invoke a constructor without `()`
  supernew: true,

  globals: {}
};