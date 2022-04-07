//T의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 Readonly<T>를 이를 사용하지 않고 구현하세요.

type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

//For example
interface Todo {
  title: string
  description: string
}

const todo2: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
}

todo2.title = 'Hello' // Error: cannot reassign a readonly property
todo2.description = 'barFoo' // Error: cannot reassign a readonly property

/* ---------etc-------- */
interface Iperson {
  name: string
  age: number
}

const person: Iperson = {
  name: 'Mark',
  age: 39,
}

type Kesy = keyof Iperson
const keys: Kesy = 'name' // "name" | "age" 나옴
// 어떤개체에 keyof를 붙이면 결과물이 type으로 나오는데 그 type은 key의 이름으로 된 문자열이다.

// IPerson[keyof IPerson]
// —> IPerson["name" | "age"]
// —> IPerson["name"] | IPerson["age"]
// => string | number

// 읽기전용으로 만들 때 readonly 사용
// keyof로 T에 들어온 객체의 key를 다 받아와서 in 문법으로 순회시킨다음에 읽기전용으로 만든다
