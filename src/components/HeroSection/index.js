import React from 'react'
import styled from "styled-components"
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import HeroImg from "../../data/images/me.jpg"

const Hero = () => {
  return (
    <div id = "about"> 
      <HeroContainer>
        <HeroBg>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
          <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">

        <Img src={HeroImg} alt="hero-image" />
</HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero