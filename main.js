//함수의 return값에 타입을 지정하면 비효율적인 이유
//1. 이미 리턴된 값이기 때문에 타입 오류가 뜨더라도 할 수 있는 작업이 없음
//2.에러자체가 호출단에서 발생하는게 아닌 함수 정의단에서 리턴되는 시점에 발생하기 때문에 호출시 오류파악이 힘듦
//공통된 함수의 구조는 동일한 인터페이스 적용 가능
const plus = (n1, n2) => {
    return n1 + n2;
};
const minus = (n1, n2) => {
    return n1 - n2;
};
const multiply = (n1, n2) => {
    return n1 * n2;
};
const divider = (n1, n2) => {
    return n1 / n2;
};
//union타입은 복수계의 타입을 허용
const info = (num) => {
    console.log(`${num}번째 방문자입니다.`);
};
info('3');
const test = (n1, n2, n3) => {
    // || falsy한 값이 들어오면 어떤것이든 대체값 적용
    // ?? null, undefined이 들어왔을떄에만 대체값 적용
    // 잘못된값이 들어오는게 아닌 아예 들어오는 값이 없을때 대체값을 넣을떄에는 ?? 연산자 활용
    const result = n1 + n2 + (n3 !== null && n3 !== void 0 ? n3 : 5);
    return result;
};
console.log(test(1, 2));
console.log(test(2, 3, 0)); // 결과: 5
console.log(test(2, 3, null)); // 결과: 5
console.log(test(2, 3)); // 결과: 10 (n3가 없으므로 대체값 5가 적용됨)
console.log(test(2, 3, undefined)); // 결과: 5
export {};
