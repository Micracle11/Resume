import * as React from 'react';
import CareerObj from '../../components/CareerObj';
import EducationalAttainment from '../../components/EducationalAttainment';
import TechSkills from '../../components/TechSkills';
import Certification from '../../components/Certification';
import WorkExperience from '../../components/WorkExp';
import Header from '../../components/Heading';

export default function Home() {
  return (
    <div>
      <Header />
      <CareerObj />
      <EducationalAttainment />
      <TechSkills />
      <Certification />
      <WorkExperience />
    </div>
  )
}