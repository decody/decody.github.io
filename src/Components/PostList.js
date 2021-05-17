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
                    <Link to="/post/20190813">
                        <strong>Eclipse에서 servlet-api.jar 추가하기</strong>
                        <time dateTime="2019-08-13">2019년 8월 13일</time>
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
                font-size: 1.45rem;
                color: var(--link-color);
            }

            p {
                color: #666;
            }
        }
    }
`