---
question: '대체 왜 Node.js를 사용해야 하는가? (1)'
slug: '23-02-22-01'
---

### 문제

대체 왜 Node.js를 써야 하는가?

### 응답

"A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm." - [Node.js document](https://nodejs.dev/en/learn/introduction-to-nodejs/)

1. V8은 자바스크립트 엔진이다. 따라서 이벤트 루프를 갖지 않는다.
2. 그렇다면 이벤트 루프는 어디에 존재하는가? Node.js나 브라우저와 같은 런타임에 존재한다.
3. 이벤트 루프는 콜 스택과 별도로 존재하는 것이 아니라, 런타임의 이벤트 루프가 JS 엔진으로 콜 스택을 실행시키는 것이다. [Paul Shan님의 원글](https://www.voidcanvas.com/nodejs-event-loop/) & [문동욱 님의 번역](https://evan-moon.github.io/2019/08/01/nodejs-event-loop-workflow/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%94%EC%A7%84-%EB%82%B4%EB%B6%80%EC%97%90-%EC%9E%88%EB%8B%A4)

"This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js." - [Node.js document](https://nodejs.org/en/about/)

4. I/O는 OS를 포함하기 때문에, Node.js도 마음만 먹으면 멀티 쓰레드를 도입할 수 있었을 것이다.
5. 그러나 싱글 쓰레드를 선택했다. 멀티 쓰레드를 채용한 네트워크 작업이 어렵고 비효율적이라고 판단했기 때문이다.
6. 쉬운 사용성과 확장성(scalability)을 위해서이다.

### 의문

웹서비스가 성숙하여 안정기에 이르면, Java와 같은 안정적인 언어로 마이그레이션하는 것이 나은가? 아니면 그냥 처음부터 Java로 작업하는 것이 나은가? 자바 공화국이라고 불리는 한국에서, 향후 마이그레이션 작업을 고려할 때 차라리 처음부터 자바로 작업하는 것이 나을 것이라는 판단을 하지 않을까? 향후에 Java로 마이그레이션이 필요 없는 서비스일 때 Node를 쓰는게 낫지 않을까 하는 생각이 든다. 확장성은 덤으로 얹어지는 것이 아닐까?

### 참고

좋은 글 진심으로 감사드립니다.  
[Introduction to Node.js (Node.js)](https://nodejs.dev/en/learn/introduction-to-nodejs/)  
[About Node.js (Node.js)](https://nodejs.org/en/about/)  
[The event loop (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)  
[Node.js event loop workflow & lifecycle in low level (Paul Shan)](https://www.voidcanvas.com/nodejs-event-loop/) & [문동욱 님의 번역](https://evan-moon.github.io/2019/08/01/nodejs-event-loop-workflow/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%94%EC%A7%84-%EB%82%B4%EB%B6%80%EC%97%90-%EC%9E%88%EB%8B%A4)  
[JavaScript, 인터프리터 언어일까? (박종우 님)](https://www.oowgnoj.dev/review/advanced-js-1)  
[Node.js로 백엔드를 구성한다는 것은 (jjunyjjuny님)](https://velog.io/@jjunyjjuny/%EB%B0%B1%EC%97%94%EB%93%9C%EB%8A%94-%EC%B2%98%EC%9D%8C%EC%9D%B4%EB%9D%BC..-2.-Node.js%EB%A1%9C-%EB%B0%B1%EC%97%94%EB%93%9C%EB%A5%BC-%EA%B5%AC%EC%84%B1%ED%95%9C%EB%8B%A4%EB%8A%94-%EA%B2%83%EC%9D%80)  
[자바스크립트와 이벤트 루프 (김동우 님)](https://meetup.nhncloud.com/posts/89)
