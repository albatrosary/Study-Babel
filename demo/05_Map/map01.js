var s = new Set();
s.add("hello").add("goodbye").add("hello");

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;