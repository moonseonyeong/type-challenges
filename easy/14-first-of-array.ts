// /배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.

// type First<T extends any[]> = T
type First<T extends any[]> = T[number] extends never ? never : T[0]

// For example

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// T[number]를 사용해서 배열의 각 값을 가져온다
// never extends 해와서 기본값은 never 다
// 조건부를 통해서 값이 있는지 없는지 확인 후 값이 있다면 0번째 있는 값을 extends해온다
// 값이 없을경우에는 never 가 리턴된다
// never타입은 가장 최하위 개념의 타입이다 never 타입에는 어떤 값도 할당할 수 없다

// T[number] extends never ? never : T[0]
// T[number] 가 never 라면 never고 아니라면 T[0]
