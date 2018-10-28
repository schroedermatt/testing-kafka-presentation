import React from "react"
import styled from 'styled-components'
// import { TwitterIcon, LinkedinIcon, GithubIcon } from "react-icons/fa";

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Avatar = styled.img`
  display: block;
  height: 300px;
  border-radius: 500px;
  filter: grayscale(1);
  transition: 175ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`
const Logo = styled.img`
  height: ${props => props.height ? props.height : "30px"};
`
const Name = styled.h2`
  font-size: 40px !important;
`
const Title = styled.h3`
  font-size: 32px !important;
  color: #E12B2E !important;
  margin-bottom: 10px;
`
const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: League Gothic, Impact, sans-serif !important;
  font-size: 20px !important;
  font-weight: 200;
  color: #333 !important;

  &.icon {
    margin-right: 0.25rem;
  }
`

export default function Person({
  avatar,
  name,
  title,
  logo,
  logoHeight,
  twitter,
  linkedin,
  github
}) {
  return (
    <PersonWrapper>
      <Avatar src={avatar} />
      <div>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Logo src={logo} height={logoHeight} />
        {github && (
          <Social
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener"
          >
            {/* <GithubIcon className="icon" color="#1da1f2" /> */}
            @{github}
          </Social>
        )}
        {linkedin && (
          <Social
            href={`https://www.linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener"
          >
            {/* <LinkedinIcon className="icon" color="#1da1f2" / */}
            @{linkedin}
          </Social>
        )}
        {twitter && (
          <Social
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener"
          >
            {/* <TwitterIcon className="icon" color="#1da1f2" /> */}
            @{twitter}
          </Social>
        )}
      </div>
    </PersonWrapper>
  )
}
