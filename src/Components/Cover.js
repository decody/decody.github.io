import React from 'react';
import styled from 'styled-components';

const Cover = () => {
    return (
        <StyledCover>
            <div className="profile-img"><img src="/images/roh.jpg" alt="profile" /></div>
            <div className="profile-info">
                <div>
                    <h1>Chris</h1>
                </div>
                <p>
                    올드보이 코더, 보테니컬 아트, 어반스케치, 넷플릭스 시청.
                </p>
                <div className="info-link">
                    <a href="mailto:gichulroh@gmail.com" className="icon-info">Email</a>
                    <a href="http://github.com/decody" target="_black" className="icon-info">Github</a>
                    <a href="/" className="icon-info">Resume</a>
                </div>
            </div>
        </StyledCover>
    );
};

export default Cover;

const StyledCover = styled.div`
    position: relative;
    min-height: 150px;
    padding: 20px 10px 30px 160px;
    border-bottom: 1px solid rgb(233, 236, 239);

    & .profile-img {
        position: absolute;
        top: 10px;
        left: 10px;
        display: block;
        width: 128px;
        height: 128px;
        border-radius: 50%;
        overflow: hidden;
        
        > img {
            width: 100%;
            vertical-align: top;
        }
    }    

    .profile-info {
        
        h1 {
            font-size: 2rem;
            color: #333;
            font-weight: var(--font-bold);
        }

        p {
            color: #666;
        }

        .info-link {
            padding: 10px 0 0;

            .icon-info {
                display: inline-block;
                width: 76px;
                text-align: center;
                font-size: 0.875rem;
                padding: 1px 10px;
                color: #fff;
                font-weight: 700;
                background-color: var(--light-color);
                border-radius: 10px;
                
                &:hover {
                    background-color: var(--dark-color);
                }

                & + .icon-info {
                    margin-left: 20px;
                }
            }
        }
    }
`