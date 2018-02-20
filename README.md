### TakeMeTour Internship Program 2018

Hi all applicants! Welcome to TakeMeTour Internship Program 2018. Being and intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be writted in Javascript language. The code will be tested with Node8, so you can use all Javascript features that equivalent to Node8.

1. Write a function that shift the elements of array to left or right by n elements in infinity loop. the function recevice 3 parameters, 1st is an array, 2nd the is direction ('left' or 'right'), 3rd is the number of elements will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```
function shift(arr,mode,position) {
    let result = []
    const arraySize = arr.length
    if(mode === 'left'){
        position= arraySize + position
    }
    else if(mode === 'right'){
        position= arraySize - position
    }
    else{
        return result
    }
    for (let i = 0; i < arraySize; i++) {
        result.push(arr[(position+i)%arraySize])
    }
    return result;
}

```
2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2018/blob/master/hero.json) and write a code to caculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```

let data = require( "./hero.json" )
let sumNetworth = 0
let sumLevel = 0
let countNet = 0
let countLevel = 0
let maxAss = -1
let minKD = 1/0
let mostAssist
let worthKD

data.forEach((hero) => {
    countNet++
    sumNetworth = sumNetworth + hero.networth
    if(hero.primary_attribute==='intelligent'){
        sumLevel = sumLevel + hero.level
        countLevel++;
    }
    if(hero.assist > maxAss){
        mostAssist = hero.name
        maxAss = hero.assist
    }
    if( (hero.kill/hero.death) < minKD){
        worthKD = hero.name
        minKD = hero.kill/hero.death
    }
})

console.log("Avarage Networth = " + sumNetworth/countNet)
console.log("Avarage Level = " + sumLevel/countLevel)
console.log("Most Assist Hero = " + mostAssist)
console.log("Worth Kill/Death = " + worthKD)
```

## Simple Web Application: A joke from Chuck Norris.

This part of quest will be a challenging one. You are going to make a simple web application which allow users to get some joke from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- UI Design as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: GraphQL คือ query language หรือคือ ภาษาสำหรับการเข้าถึงข้อมุล เพื่อการใช้งาน API ของระบบ และประมวลผลคำสั่งที่ฝั่ง server โดยใช้โครงสร้างข้อมูลที่เรากำหนดไว้ ซึ่ง GraphQL จะมี end point อันเดียว เวลาจะดึงข้อมูลก็จะใช้การส่ง request แค่รอบเดียว จะได้ข้อมูลทุกอย่างที่เราต้องการ (กำหนดไว้) เท่านั้น โดยต่างจาก REST API คือ ในเวลาใช้งานจริง เมื่อใช้ REST API อาจจะต้องมี หลาย end point ทำให้เราต้อง request หลายรอบ

Q2: Please explain how javascript benefits from cross-platform development

A2: เพราะเป็นภาษาที่เขียนครั้งเดียว และสามารถทำงานได้บนหลายๆ platform ทำให้ไม่ต้องเขียนหลายๆครั้ง โอกาสในการเกิด bug ก็น้อยลง แก้ไข ปรับปรุงได้ง่าย

Q3: What do you expect to get from during an internship at TakeMeTour?

A3: อยากได้ประสบการณ์ในการทำงานจริง ได้เรียนรู้การใช้ react redux และได้ลองใช้ framework ต่างๆในการทำงานจริง

## Submitting

Please fork this repo and submit your repository at jet@takemetour.com along with your contact information.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
