## 🍸 기존의 BarInHome

사용자가 보유하고 있는 재료를 냉장고에 등록,  
보유 중인 재료로 만들 수 있는 칵테일의 목록과 재료 하나만 더 존재하면 만들 수 있는 칵테일의 목록을 부족한 재료와 함께 사용자에게 제공합니다
<br/>
<br/>
<br/>

## 프로젝트 최종 목표

관심사의 분리로 인한 유지보수가 용이한 프로젝트 구현  
DDD로 Layered Architecture 구현  

- 인터페이스 (Interface) : 서비스 외부로부터 입/출력 처리
- 애플리케이션 (Application) : 사용자 시나리오
- 도메인 (Domain) : 비즈니스 규칙
- 인프라스트럭처 (Infrastructure) : 기술적 세부 구현  

1회 nestjs meetup 김수현님의 NestJS와 함께한 3년간 고군분투기 세션을 이해하고 체화하여 DDD 구현 
<br/>
<br/>
<br/>

## 진행 현황

**- [MAIN]**
1. 보일러 플레이트 코드, DDD의 이해
    - Domain
        - Aggregate, Entity, ValueObject 의 개념 숙지
        - Aggregate 설정 범위 정의
    - Infra : 기존의 Layered Architecture의 최하단에 존재한 infra를 의존성 역전시키는 과정 이해
    - Domain & Application : 구현할 코드가 Domain의 영역인지 Application의 영역인지 구분선 정의

2. Generic 하게 짜인 TypeOrmRepository 보일러 플레이트 코드 리팩토링
    - MetaData를 설정하는 방식과 TypeOrm의 Repository 클래스를 상속받는 방식 중 후자 선택 

3. 회원가입 구현 
<br/>


**- [SUB]**
1. yarn berry 로 package manger 설정  

2. joi로 env validation  

3. typeorm, typeorm migration cli  

4. swagger 적용  
