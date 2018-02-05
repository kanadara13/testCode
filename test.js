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

