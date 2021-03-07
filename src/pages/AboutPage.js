import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const educations = [
  {
    years:'2010 - 2013',
    title: 'SMK Negeri 2 Bekasi',
    description: 'Jurusan Teknik Elektronika Industri'
  },
  {
    years:'2018 - 2022',
    title: 'Universitas Buana Perjuangan Karawang S1',
    description: 'Program Studi Sistem Informasi'
  },
  {
    years:'2023 - 2025',
    title: 'Universitas Gajah Mada S2',
    description: 'Program Studi Manajemen Sistem Informasi'
  },
];
const experiences = [
  {
    years:'2013 - 2015',
    title: 'PT Padma Soode Indonesia',
    position: 'Manufacturing Engineering',
    description: 'Monitoring & Troubleshooting Mesin Produksi'
  },
  {
    years:'2016 - Present',
    title: 'PT Etex Building Performance Indonesia',
    position: 'Maintenance Electric',
    description: 'Monitoring & Troubleshooting All Area Electric'
  },
];
const AboutPage = () => {
  return (
    <>
      <Navbar />
            <section className="about-section-header">
                <div className="about-section-left">
                <div className="bg-avatar-about">
                    <img className="img-avatar-about" src="/images/avatar-about.png" alt="Avatar about" />
                </div>
                </div>
                <div className="about-section-right">
                <div>
                    <h1 className="title-name">Hi I’M FaQiH</h1>
                    <div className="title-position">I am Web Designer</div>
                    <p>
                    Nama Saya Faqih Pratama Muhti, Dari Universitas Buana Perjuangan Karawang. 
                    </p>
                </div>
                </div>
            </section>
            <section className="about-section-second">
                <h2 className="sub-title-about">Education</h2>
                {
                educations.map((education, key) => (
                    <div key={key}>
                    <div className="text-years">{education.years}</div>
                    <div className="text-title">{education.title}</div>
                    <p className="title-description">{education.description}</p>
                    </div>
                ))
                }
            </section>
            <section className="about-section-third">
                <h2 className="sub-title-about">Experience</h2>
                {
                experiences.map((experience, key) => (
                    <div key={key}>
                    <div className="text-years">{experience.years}</div>
                    <div className="text-title">{experience.title}</div>
                    <div className="text-position">{experience.position}</div>
                    <p className="text-description">{experience.description}</p>
                    </div>
                ))
                }
            </section>   
      <Footer />
    </>
  )
}

export default AboutPage;