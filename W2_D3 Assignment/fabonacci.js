function fab(n) {
     if (n <= 1) {
          return n;
     }
     return fab(n - 1) + fab(n - 2);
}
console.log(fab(7))