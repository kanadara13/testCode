/*
var age = 1000;

function Person(){
    this.age = 0;
   /!* setInterval(() => {
        this.age++; // |this| 는 정확히 person 객체를 참조
        console.log(this.age)
    }, 1000);*!/
    console.log(age);
    setInterval(function growUp() {
        // 비엄격 모드에서, growUp() 함수는 `this`를
        // 전역 객체로 정의하고, 이는 Person() 생성자에
        // 정의된 `this`와 다름.
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p = new Person();*/
/*

var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log( this.i, this)
    }
}
obj.b(); // prints undefined, Window
obj.c(); // prints 10, Object {...}*/
/*var a = JSON.parse('{"code":"0004","msg":"\uc0c1\ud488\ucf54\ub4dc \uc5d0\ub7ec({\\"DATA\\":{\\"buy_name\\":\\"\uc784\uc815\uc6b4\\",\\"deal_code\\":\\"29387\\",\\"ticket\\":\\"O21A21AA6435\\",\\"buy_hp\\":\\"010-4224-1155\\",\\"ocode\\":\\"688707\\",\\"product_option\\":\\"\uc131\uc778 1\uc778 \uc8fc\uc911\\\\\\/\uc8fc\ub9d0,\uacf5\ud734\uc77c 2\uc2dc\uac04 \uc785\uc7a5\uad8c\\"},\\"HEADER\\":{\\"mode\\":\\"si\\"}}\uc8fc\ubb38\ubc88\ud638:688707, \ub51c\ubc88\ud638:29387, \ud2f0\ucf13\ubc88\ud638:O21A21AA6435, \uad6c\ub9e4\uc790:\uc784\uc815\uc6b4, \uc804\ud654\ubc88\ud638:01042241155, \uc635\uc158\uba85:\uc131\uc778 1\uc778 \uc8fc\uc911\\/\uc8fc\ub9d0,\uacf5\ud734\uc77c 2\uc2dc\uac04 \uc785\uc7a5\uad8c)"}');

console.log(a);*/

/* 샘플 array 생성기 */
function buildArray(maxLength) {
    let list = []
    for (let i=0; i <maxLength; i++){
        let a = {"name":"sjh"+i,"age": 30+i};
        list.push(a)
    }
    return list;
}

/* array 생성 */
let data = buildArray(10);



/* array 데이터 select 함수 호출 */
let selected = select({}, fieldSelector("name"), fieldSelector("age"));

/* select 함수 확인 출력용 */
for (let item of selected){
    console.log(item);
}

/* */
function fieldSelector(key) {
    return (row)=>{
        return {key: key , value : row[key]};
    }
}

function select(data, ...field) {
    if (!Array.isArray(data)) { throw new Error("first parameter is must array");}
    let array =[];
    for (let item of data){
        let extractedFiled = extractedField(item);
        array.push(extractedFiled);
    }
    function extractedField(item) {
        let temp = {};
        for (let aField of field) {
            let value = aField(item);
            temp[value.key] = value.value;
        }
        return temp;
    }
    return array;
}

