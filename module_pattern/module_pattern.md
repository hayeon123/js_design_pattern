### 모듈 패턴

- 일반적으로 서버 개발, 라이브러리, API등을 개발 할 때 사용한다.
- 하나의 글로벌 변수 안에 여러 함수를 두는 것
- 파일 단위로 관리할 수 있도록 자바스크립트를 모듈화, 단위 테스트를 모듈 단위로 실행하기 편하다.
- 글로벌 변수나 함수들을 최소화하여 다른 자바스크립트 라이브러리나 소스를 쓸 때 충돌이 일어날 확률을 최소화한다.
- 모듈 단위로 소스를 개발하면 각 모듈 간의 의존성을 최소화하거나 의존성을 파악하기 쉽다.
- 자바스크립트 라이브러리에서 틀정 회사나 라이브러리의 용도를 명확하게 구분하고자 모듈 패턴을 확장하여 네임스페이스로 활용한다.
  `var latlng new goolge.maps.LatLng(-34.397, 150.644);`

### \_myLibrary

- 글로벌 영역에 선언하고자 하는 네임스페이스를 가져오려고 한다.
- 다른 모듈에서 myLibrary 네임스페이스를 정의 했다면 해당 모듈을 그대로 사용하여 새로운 네임스페이스를 확장하듯이 설정한다.
- muLibrary 안에 다시 uniky라는 네임스페이스를 확인하고 정의되어 있지 않은경우 새로 객체를 생성하여 할당한다.
