//배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.

type TupleToObject<T extends readonly any[]> = { [P in T[number]]: P }

//For example

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// T[number]를 사용하여 배열에서 각 값을 얻을 수 있다
// 그런 다음 매핑된 유형을 사용하여 다음과 같은 개체를 만들 수 있다
