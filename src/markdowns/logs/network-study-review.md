---
question: '우리는 왜 http를 써야 하는가?'
slug: '23-02-28-01'
---

[모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC)을 듣고 복기한 내용입니다.

### IP, TCP/UDP

네트워크 통신은 패킷을 주고 받는 것이다.
패킷을 주려면 줄 대상의 주소가 필요하다.

최초에는 IP가 있었다.
그런데 IP를 사용하다 불편한 점이 있었다.
통신을 하고 있는 상대방 컴퓨터가 켜져 있는지 알 수 없었고,
복수의 프로그램을 사용하고 있을 때 어떤 프로그램으로 연락해야 할지 알 수 없었다.
그리고 데이터가 전송 순서대로 도착하지 않았다.

이를 개선하기 위해 생겨난 것이 TCP다.
3 Way handshake 방식으로 상대방 컴퓨터가 통신 가능한 상태인지 확인한다.
port를 사용해서 복수의 프로그램 중 원하는 프로그램과 소통하게 되었다.
또한, 순서를 기록해서 원했던 순서대로 전달되지 않으면 순서가 잘못된 데이터부터 재전송을 요청하였다.

UDP라는 것도 있는데, TCP의 기능 중 port만을 도입하였다. http/2, http/3에서 3way handshaking의 소요 시간 때문에 새롭게 떠오르는 중이다.

TCP를 쓴다고 해서 IP를 쓰지 않는 것이 아니라, IP를 보조하는 수단이다.

### DNS

Domain Name Service.
우선 IP는 기억하기 어렵다. 또한 IP가 바뀌기도 했다. 이를 해결하기 위해 DNS가 탄생하였다.

### URI, URL, URN

Uniform Resource Identifier / Locator / Name
URL, URL은 URI의 한 종류이다.
자원을 식별한다. 어떤 방식으로? 통합된 방식으로.
나는 통합된, 이라고 말하기 보다는 '획일화된' 이라는 표현을 선호한다.

### HTTP

hyper text transfer protocol.
이건 왜 생겼더라?
다양한 형태의 데이터를 전달하고자 하는 욕구에서 생겨났던 것 같다.
HTTP는 header와 method를 활용해서 TCP를 wrapping한다.

http는 다음과 같은 특징을 가진다.
stateless, .... 잘 기억이 안난다. 다시 봐야할 듯...
