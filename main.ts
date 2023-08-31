//함수의 return값에 타입을 지정하면 비효율적인 이유
//1. 이미 리턴된 값이기 때문에 타입 오류가 뜨더라도 할 수 있는 작업이 없음
//2.에러자체가 호출단에서 발생하는게 아닌 함수 정의단에서 리턴되는 시점에 발생하기 때문에 호출시 오류파악이 힘듦
//공통된 함수의 구조는 동일한 인터페이스 적용 가능

interface Calc {
	(n1: number, n2: number): any;
}

const plus: Calc = (n1, n2) => {
	return n1 + n2;
};
const minus: Calc = (n1, n2) => {
	return n1 - n2;
};
const multiply: Calc = (n1, n2) => {
	return n1 * n2;
};
const divider: Calc = (n1, n2) => {
	return n1 / n2;
};
