let userNum = +prompt("Istagan soningizni kiriting");
for (let i = 0; i <= userNum; i++) {
  let name = prompt("User name", "Muhammadyusuf");
  let age = +prompt("User age", "15");
  console.log(`${i+1}  
   Sizning ismingiz ${name}:
   Sizning yowingiz ${age}  `);
}