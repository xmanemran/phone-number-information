# phone-number-checker

### Check phone/mobile number information like country, operator and is valid number;


#### Install

```
npm install phone-number-checker --save
```

#### Example

```
var Phone = require('phone-number-check');

console.log(Phone("+88019394197"));
```

#### output

```
{ 
name: 'Bangladesh',
  iso: 'bd',
  code: '880',
  operator: {
   name: 'Banglalink', 
   code: '19', i
   sValid: false 
   } 
}
```

NB: Now operator only show for Bangladesh
