# phone-number-information

### Find any information about phone number. Like country code, operators, phone number example, valid phone number.


#### Install

```
npm install phone-number-information --save
```

### Version 2.0.0

#### Example

```
var phone = require('phone-number-information');

console.log(phone.numberToInformation("+8801739419745"));
```

### Methods

| Name  | Parameters | Output | 
| ------------- | ------------- | ------------- |
| numberToInformation  | Phone number with country code (string)  | Object |
| countryToInformation  |  Country Name | Object


#### # numberToInformation Method output sample

```javascript
{ 
    name: 'Bangladesh',
    iso: 'bd',
    code: '880',
    example: [ '+8801739419745', '+88019XXXXXXXX' ],
    operator: { 
        name: 'Grameenphone', 
        code: '17', 
        isValid: true 
    } 
}
```

#### # countryToInformation Method output sample
```javascript
{ 
    name: 'Bangladesh',
    iso: 'bd',
    code: '880',
    operators: [ 
        { name: 'Grameenphone', code: '17', isValid: 10 },
        { name: 'Banglalink', code: '19', isValid: 10 },
        { name: 'Robi', code: '18', isValid: 10 },
        { name: 'Airtel', code: '16', isValid: 10 },
        { name: 'Teletalk', code: '15', isValid: 10 },
        { name: 'Rankstel', code: '44', isValid: 10 } 
    ],
    example: [ '+8801739419745', '+88019XXXXXXXX' ]
}
```


### Version 1.0.0

#### Example

```
var Phone = require('phone-number-information');

console.log(Phone("+8801739419745"));
```

#### output

```javascript
{ 
    name: 'Bangladesh',
    iso: 'bd',
    code: '880',
    operator: {
        name: 'Banglalink', 
        code: '19',
        isValid: false 
    } 
}
```

NB: Now operator only show for Bangladesh
