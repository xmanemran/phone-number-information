# phone-number-information

### Find and check phone/mobile number information like country, operator and is valid number;


#### Install

```
npm install phone-number-information --save
```

#### Example

```
var Phone = require('phone-number-information');

console.log(Phone("+8801739419745"));
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
