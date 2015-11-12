function f() {
  {
    let x;
    {
      x = "foo";
    }
    // okay, declared with `let`
    x = "bar";
    // error, already declared in block
    //let x = "inner";
  }
}