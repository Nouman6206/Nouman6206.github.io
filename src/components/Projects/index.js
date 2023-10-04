import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import React from 'react'


const Projects = ({openModal, setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From work projects to personal projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'personal projects' ?
            <ToggleButton active value="personal projects" onClick={() => setToggle('personal projects')}>Personal Projects</ToggleButton>
            :
            <ToggleButton value="personal projects" onClick={() => setToggle('personal projects')}>Personal Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'work projects' ?
            <ToggleButton active value="work projects" onClick={() => setToggle('work projects')}>Work Projects</ToggleButton>
            :
            <ToggleButton value="work projects" onClick={() => setToggle('work projects')}>Work Projects</ToggleButton>
          }
          <Divider />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects