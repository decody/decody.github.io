import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostList = () => {
    return (
        <StyledPostList>
            <ul>
                <li>
                   <Link to="/post/20200310">
                        <strong>JS 지연처리: 디바운스와 스로틀</strong>
                        <time dateTime="2020-03-10">2020년 3월 10일</time>
                        <p>어떤 내용을 입력하다가 일정 시간 동안 대기하고 있으면 마지막에 입력된 내용을 서버에 요청을 보내는 방법. 구글 검색창에 입력을 멈추면 연관검색어 목록이 나타남.디바운스와 비슷한 개념이지만 입력되는 동안에도 바로 이전에 요청한 작업을...</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20200309">
                        <strong>forEach, map, reduce로 파싱하기</strong>
                        <time dateTime="2020-03-09">2020년 3월 9일</time>
                        <p>for문으로 파싱하기...</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20200123">
                        <strong>영어 말하기 6개월 만에 빠르게 향상시키기</strong>
                        <time dateTime="2020-01-23">2020년 1월 23일</time>
                        <p>1. 영어문법책 한권 떼기 문법을 공부할 때 너무 깊이 보지 않고 한달 안에 빠르게 마친다. 2. 하루에 10문장씩 쓰기 관심있는 분야를 선정하여 토픽을 정한 후, 한달 내지 두달동안 하루 10문장씩 쓴다</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20200106">
                        <strong>자바 String은 객체</strong>
                        <time dateTime="2020-01-06">2020년 1월 6일</time>
                        <p>자바에서 String(문자열)은 " "로 감싸면 된다. String은 바로 여러 메서드를 사용할 수 있어 객체로 취급된다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20191210">
                        <strong>이클립스에 jar 파일 프로젝트에 넣기</strong>
                        <time dateTime="2019-12-10">2019년 12월 10일</time>
                        <p>프로젝트 안에 lib 라는 새 폴더를 생성하여 jar 파일 넣기이클립스에서 refresh 하면 폴더가 보임 jar 파일을 모두 선택 후, 오른쪽 마우스 클릭 > Build Path > Add to Build Path 클릭</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20191007">
                        <strong>Python NumPy</strong>
                        <time dateTime="2019-10-07">2019년 10월 7일</time>
                        <p>Numpy는 numerical + python의 약자로 과학계산을 위한 파이썬 라이브러리이며, 다차원 배열을 처리하는데 필요한 계산을 위한 라이브러리로서 그에 필요한 기능들을 제공하고 있다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20191006">
                        <strong>프로덕트 매니저의 역할</strong>
                        <time dateTime="2019-10-06">2019년 10월 6일</time>
                        <p>프로덕트 매니저는 한국에서는 없는 직업군이었으며, 최근 startup이나 IT 서비스 플랫폼을 만드는 기업을 중심으로 생겨나고 있다. 한국 내에선 가장 비슷한 직업은 서비스 기획자이며, 흔히 얘기하는 주로 고객과 커뮤니케이션하고 일정을 관리하는 PM(Project Manager)와는 다르다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20191001">
                        <strong>Node.js, express 서버 띄우기</strong>
                        <time dateTime="2019-10-01">2019년 10월 1일</time>
                        <p>node.js를 설치하기 https://nodejs.org/ko/에서 LTS 버전을 다운로드하여 설치한다. node.js와 npm 설치확인 NPM이란 node.js의 패키지 매니저이며, nodejs에서 사용하는 모듈이나 패키지를 설치, 관리한다. 프로젝트 폴더 생성과 구조 project package.json 생성 package.json에는 패키지에....</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20190925">
                        <strong>Webpack 설정하기</strong>
                        <time dateTime="2019-09-25">2019년 9월 25일</time>
                        <p>webpack.config.js 파일을 생성하여 config 객체를 이용해서 module.exports를 통해 외부로 노출시킬 수 있다. config 파일은 mode, entry, output, module, plugins를 제공한다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20190924">
                        <strong>jQuery-slimScroll 사용하기</strong>
                        <time dateTime="2019-09-24">2019년 9월 24일</time>
                        <p>jQuery-slimScroll은 div 내에서 iframe처럼 내부 스크롤을 제공하는 jQuery 라이브러리이다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20190923">
                        <strong>Webpack 시작하기</strong>
                        <time dateTime="2019-09-23">2019년 9월 23일</time>
                        <p>webpack은 여러 개의 assets (js, css, png, jpg)을 웹 브라우저가 이해할 수 있는 번들로 묶고 패킹할 수 있는 자바스크립트 모듈 번들러이다. Node.js 환경에서 실행되며, npm으로 설치할 수 있다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20190922">
                        <strong>데이터 엔지니어링의 정의</strong>
                        <time dateTime="2019-09-22">2019년 9월 22일</time>
                        <p>빅데이터에 막연히 관심을 갖던 시절, 데이터 과학자, 데이터 엔지니어, 데이터 분석가의 차이점을 잘 몰랐다. 이런저런 아티클들을 읽은 후 데이터 관련 직종의 차이점을 어느 정도 알게 되었다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20190921">
                        <strong>sessionStorage 테스트</strong>
                        <time dateTime="2019-09-21">2019년 9월 21일</time>
                        <p>sessionStorage란 localStorage와 같이 key/value 쌍으로 웹 브라우저에 저장되는 객체이다. sessionStorage객체는 웹 브라우저를 닫으면 생성된 하나의 세션도 사라진다.</p>
                    </Link>
                </li>
                <li>
                   <Link to="/post/20190919">
                        <strong>큰 폰트사이즈의 글자 짤림 오류 해결</strong>
                        <time dateTime="2019-09-19">2019년 9월 19일</time>
                        <p>css에서 font-family로 동일한 font-size를 적용했을 때, 서로 다른 높이값을 가지게 된다. 각 폰트 자체가 갖고 있는 다른 매트릭스로 인해 높이값이 다르게 된다.</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190820">
                        <strong>Windows에서 Chololatey로 패키지 매니징 관리</strong>
                        <time dateTime="2019-08-20">2019년 8월 20일</time>
                        <p>Chololatey는 NPM, PIP과 같은 windows 환경에서의 매키징 매니저이다. 자세한 설명이나 매키지 목록은 chololatey 페이지에서 확인할 수 있다. cmd 환경에서 Chololatey 인스톨하기 설치환경: 윈도우즈 7이상, .NET Framework 4이상 아래 코드를 복사하여 cmd에서 실행하면 설치된다. cmd 환경에서 Chol...</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190819">
                        <strong>서블릿(servlet) 이해하기</strong>
                        <time dateTime="2019-08-19">2019년 8월 19일</time>
                        <p>서블릿(servlet)은 tomcat과 같은 컨테이너에서 실행되면서 클라이언트의 요청에 따라 동적 서비스를 제공하는 자바 클래스이다. 서버에서 실행되다가 웹 브라우저의 요청을 받아 해당 기능을 수행한 후 웹 브라우저에 결과를 전달한다.</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190816">
                        <strong>모바일 Safari에서 레이어의 부분적 렌더링 오류 해결</strong>
                        <time dateTime="2019-08-16">2019년 8월 16일</time>
                        <p>모바일 Safari에서 sticky 내비게이션을 구현할 때나 position: fixed를 선언하여 레이어를 만들 때, 해당 레이어가 부분적으로 렌더링이 되지 않아 뚫려보이는 오류가 발생한다. 오류를 해결하기 위해서는 아래 css를 추가하고, 탭 이벤트시 이벤트 방지를 선언해 주어야 한다.</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190815">
                        <strong>간단 무한스크롤 예시</strong>
                        <time dateTime="2019-08-15">2019년 8월 15일</time>
                        <p>아래로 스크롤시 컨텐츠 목록에 생성되는 간단 무한스크롤 예시이다. 스크롤시 스크롤을 한번을 내려도 두번 발생하기 때문에 스크롤 체크 변수 didScroll를 먼저 선언해 주어야 한다.</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190814">
                        <strong>Scroll Stop 이벤트 확장 함수</strong>
                        <time dateTime="2019-08-14">2019년 8월 14일</time>
                        <p>window 네이티브 이벤트에는 scroll stop 이벤트가 없다. 아래와 같은 코드를 추가하면 scrollStopped 확장이벤트를 사용할 수 있다.</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190813">
                        <strong>sticky 내비게이션 만들기</strong>
                        <time dateTime="2019-08-13">2019년 8월 13일</time>
                        <p>sticky 내비게이션은 스크롤시 페이지 상단에 고정되는 내비게이션이다. css의 postition:sticky 속성을 이용해 간단히 해당 내비게이션을 만들 수 있다.</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190812">
                        <strong>Eclipse에서 servlet-api.jar 추가하기</strong>
                        <time dateTime="2019-08-12">2019년 8월 12일</time>
                        <p>Maven이나 gradle에 추가를 해도 안 될때, Eclipse Java 프로젝트 오른쪽 마우스 메뉴에서 Build Path > Configure Build Path 메뉴나 Properties > Java Build Path 메뉴에서 Libraries 탭에서 Add External JARs 버튼을 클릭하여 [$톰캣홈] > lib 에서 servlet-api...</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190806">
                        <strong>Oracle 계정 생성시 오류 (12c이상)</strong>
                        <time dateTime="2019-08-06">2019년 8월 6일</time>
                        <p>sqlplus로 접속후 create user 계정이름 identified by 비밀번호; 하면 계정이 생성되었으나, Oracle 12c로 넘어가면서 오류가 생긴다. 해결 방법은 계정이름 앞에 c##를 붙여야 공통 사용자를 생성 가능하다.</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190712">
                        <strong>Atom에서 파이썬 한글 인코딩 선언</strong>
                        <time dateTime="2019-07-12">2019년 7월 12일</time>
                        <p>Atom에서 파이썬 코딩할 때 한글 인코딩</p>
                    </Link>
                </li>
                <li>
                    <Link to="/post/20190709">
                        <strong>모바일에서 하위 iframe에서 부모창 가로값 가져오기</strong>
                        <time dateTime="2019-07-09">2019년 7월 9일</time>
                        <p>모바일에서 하위 iframe에서 부모페이지의 width 값을 가져올 때, 실제 width값을 가져오지 못하는 오류가 있다. Chrome에서 개발자 모드로 iframeScreenWidth와 parentScreenWidth를 체크하면 값이 같게 나온다. 하지만, 실제 아이폰에서 alert를 띄어 두 값을 체크하면 다르게 나온다. 그래서 실제 부모 페이지의 width값을 가져오려면 window.innerWidth를 보다는</p>
                    </Link>
                </li>
            </ul>
        </StyledPostList>
    );
};

export default PostList;

const StyledPostList = styled.div`
    padding: 30px 0;

    h3 {
        font-weight: var(--font-bold);
        font-size: 1.5rem;
    }

    ul {

        li {
            padding: 20px 0 30px;
            cursor: pointer;

            time {
                display: block;
                padding: 0 0 8px;
                color: #777;
            }

            strong {
                display: block;
                font-weight: var(--font-bold);
                font-size: 2rem;
                color: var(--link-color);
            }

            p {
                color: #666;
            }
        }
    }
`