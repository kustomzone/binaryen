function asmFunc(global, env, buffer) {
 "use asm";
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var print = env.print;
 var i64toi32_i32$HIGH_BITS = 0;
 function $0(i) {
  i = i | 0;
  var wasm2asm_i32$0 = 0;
  print(HEAPU8[i >> 0] | 0 | 0);
  print(HEAPU8[(i + 1 | 0) >> 0] | 0 | 0);
  print(HEAPU8[(i + 2 | 0) >> 0] | 0 | 0);
  print(HEAPU8[(i + 25 | 0) >> 0] | 0 | 0);
  print(HEAPU16[i >> 1] | 0 | 0);
  print((wasm2asm_i32$0 = i, HEAPU8[wasm2asm_i32$0 >> 0] | 0 | 0 | (HEAPU8[(wasm2asm_i32$0 + 1 | 0) >> 0] | 0 | 0) << 8) | 0);
  print((wasm2asm_i32$0 = i, HEAPU8[(wasm2asm_i32$0 + 1 | 0) >> 0] | 0 | 0 | (HEAPU8[(wasm2asm_i32$0 + 2 | 0) >> 0] | 0 | 0) << 8) | 0);
  print(HEAPU16[(i + 2 | 0) >> 1] | 0 | 0);
  print((wasm2asm_i32$0 = i, HEAPU8[(wasm2asm_i32$0 + 25 | 0) >> 0] | 0 | 0 | (HEAPU8[(wasm2asm_i32$0 + 26 | 0) >> 0] | 0 | 0) << 8) | 0);
  print(HEAPU32[i >> 2] | 0 | 0);
  print((wasm2asm_i32$0 = i, HEAPU8[(wasm2asm_i32$0 + 1 | 0) >> 0] | 0 | 0 | (HEAPU8[(wasm2asm_i32$0 + 2 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2asm_i32$0 + 3 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2asm_i32$0 + 4 | 0) >> 0] | 0 | 0) << 24) | 0);
  print((wasm2asm_i32$0 = i, HEAPU8[(wasm2asm_i32$0 + 2 | 0) >> 0] | 0 | 0 | (HEAPU8[(wasm2asm_i32$0 + 3 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2asm_i32$0 + 4 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2asm_i32$0 + 5 | 0) >> 0] | 0 | 0) << 24) | 0);
  print((wasm2asm_i32$0 = i, HEAPU8[(wasm2asm_i32$0 + 25 | 0) >> 0] | 0 | 0 | (HEAPU8[(wasm2asm_i32$0 + 26 | 0) >> 0] | 0 | 0) << 8 | (HEAPU8[(wasm2asm_i32$0 + 27 | 0) >> 0] | 0 | 0) << 16 | (HEAPU8[(wasm2asm_i32$0 + 28 | 0) >> 0] | 0 | 0) << 24) | 0);
 }
 
 function $1(i) {
  i = i | 0;
  HEAPU32[(i + 4294967295 | 0) >> 2] | 0;
 }
 
 function __wasm_ctz_i32(x) {
  x = x | 0;
  var $1 = 0;
  if ((x | 0) == (0 | 0)) $1 = 32; else $1 = 31 - Math_clz32(x ^ (x - 1 | 0) | 0) | 0;
  return $1 | 0;
 }
 
 function __wasm_popcnt_i32(x) {
  x = x | 0;
  var count = 0, $2 = 0;
  count = 0;
  b : {
   l : do {
    $2 = count;
    if ((x | 0) == (0 | 0)) break b;
    x = x & (x - 1 | 0) | 0;
    count = count + 1 | 0;
    continue l;
    break l;
   } while (1);
  };
  return $2 | 0;
 }
 
 function __wasm_rotl_i32(x, k) {
  x = x | 0;
  k = k | 0;
  return ((4294967295 >>> (k & 31 | 0) | 0) & x | 0) << (k & 31 | 0) | 0 | (((4294967295 << (32 - (k & 31 | 0) | 0) | 0) & x | 0) >>> (32 - (k & 31 | 0) | 0) | 0) | 0 | 0;
 }
 
 function __wasm_rotr_i32(x, k) {
  x = x | 0;
  k = k | 0;
  return ((4294967295 << (k & 31 | 0) | 0) & x | 0) >>> (k & 31 | 0) | 0 | (((4294967295 >>> (32 - (k & 31 | 0) | 0) | 0) & x | 0) << (32 - (k & 31 | 0) | 0) | 0) | 0 | 0;
 }
 
 return {
  good: $0, 
  bad: $1
 };
}

