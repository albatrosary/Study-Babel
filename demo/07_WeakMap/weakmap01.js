var s = new Set();
s.add("hello").add("goodbye").add("hello");

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined