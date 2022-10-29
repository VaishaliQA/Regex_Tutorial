const pattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let password = "V3ry5tR0ngP@ssw0rd";

let result = password.match(pattern);
if (result) {
  console.log(`The given password: ${password} is strong`);
} else {
  console.log(`The given password: ${password} is not strong`);
}

password = "password";
result = password.match(pattern);
if (result) {
  console.log(`The given password: ${password} is strong`);
} else {
  console.log(`The given password: ${password} is not strong`);
}
