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