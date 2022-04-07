// T에서 K 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 Pick<T, K>을 이를 사용하지 않고 구현하세요.
// type MyPick<T, K> = any

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

// For example
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

/* ---------- */
// keyof T
// T의 키값으로 이루어진 Union타입을 의미
// extends ketof T  -->  ketof T 타입밖에 올수 없다
// 다른 문법으로 기본값을 정해주는 방법도 있는데 extends 문법과는 다르게 사용된다 <T, A = keyof T>
// { [ ~ in ~] : ?[?] }
// 유니온을 순회한다
//type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

// 예시로 "a" | "b" 넣었을때
// a만 나올수도없고 b만 나올수가 없는게 in 키로 다 돌기때문이다
