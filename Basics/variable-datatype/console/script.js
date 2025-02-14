
console.clear();
console.log("hello world");

const x = 100;
console.log(x);

console.table({
    name : 'khuliso',
    lastName :' thavhiwa',
    age : 33,
});

console.group('simple');
console.log(100);
console.error('alert');
console.warn('warning');
console.groupEnd();

const style = 'padding: 10px; color:red';

console.log('%cHello world', style);