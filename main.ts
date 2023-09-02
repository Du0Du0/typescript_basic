//generic :타입의 적용을 정의할 때 하는 것이 아닌 호출할 때 적용
//genric은 들어오게 되는 타입이 다양할 때 활용
//<type>은 함수의 결과값의 타입을 지정
const getLength = <type>(arr: type[]) => {
	return arr.length;
};

const arr1 = [1, 2, 3];
const arr2 = ['red', 'green', 'blue'];
const arr3 = [1, '2', 3];

console.log(getLength<number>(arr1)); //숫자3
console.log(getLength<string>(arr2)); //숫자3
console.log(getLength<string | number>(arr2)); //문자3
export {};
