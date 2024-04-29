import React, { useEffect} from 'react'
import Header from '../Header'
import { Card, Container } from 'react-bootstrap'
import './Admission.css'

import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Addmission = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Header />
      <div className='desktop1'>
        <div className='imh34' style={{ background: "url('./img/admission-session-2024.webp')" }}>
        </div>
      </div>
      <div className='mobile1'>
        <img src='./img/admission-mobile.webp' className='img87' alt='Admissions open at SAGE University Bhopal' />
      </div>
      <div className='desxk9'>
        <Container>
          <section class="row colo9">
            <div class="col-md-8 riuy">
            </div>
            <div class="col-md-4 riuy">
              <div>
                <div class="npf-form" style={{ zIndex: "10000" }}>
                  <div class="form">
                    <div className="npf_wgts" data-height="464px" data-w="45243c5c2fbab572b687e2120fbd7540">
                      <iframe
                        frameborder="0"
                        width="100%"
                        className="fresm" 
                        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads"
                        src="https://widgets.nopaperforms.com/register?&amp;r=&amp;q=&amp;w=45243c5c2fbab572b687e2120fbd7540&amp;m=&amp;cu=https://sageuniversity.edu.in/bhopal-admission/"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <div className='bg3'>
        <Container>
          <section class="columns">
            <div class="column bor1">
              <h3 className='text1'>18000 +</h3>
              <p className='text2'>Students are preparing their <br></br>future career</p>
            </div>
            <div class="column bor1">
              <h3 className='text1'>50000 +</h3>
              <p className='text2'>Alumni working in global <br></br> companies</p>
            </div>
            <div class="column  bor1">
              <h3 className='text1'>150 + </h3>
              <p className='text2'>MOU’s and Tie up’s for industrial <br></br>excellence</p>
            </div>
            <div class="column  bor1 ">
              <h3 className='text1'>200 +</h3>
              <p className='text2'>Recruiters for student placement<br></br> process</p>
            </div>
            <div class="column  bor1">
              <h3 className='text1'>27LAKH</h3>
              <p className='text2'>Highest package offered to <br></br>our students</p>
            </div>
          </section>
        </Container>
      </div>
      <div className='bg4'>
        <Container >
          <div class="grid-outer home-promo bg6" style={{ overflow: "hidden", padding: "20px" }}>
            <div class="row">
              <div class="col-md-5 bb56 pt20 pb20 text-center">
                <img src="./img/legacy.webp" alt='Legacy of SAGE Group of Institutions' className='img2' />
              </div>
              <div class="col-md-7 bb56">
                <h1 className='mb-4 ' style={{ fontSize: "20px" }}>SAGE UNIVERSITY, <span style={{ color: "#b00404", fontSize: "20px" }}><b>
                  The Most Awarded University In Central India</b></span> </h1>
                <p style={{ textAlign: "justify" }}>SAGE University aims to deliver an impeccable academic environment in Bhopal, a city of lakes where aspirants will achieve a mindset for individual growth and a more incredible heart for humanity. We offer practical scenario-based learning with new pedagogy and well-qualified faculties to adapt thought-provoking education that ignites change in individuals and the world. Constant infrastructure and knowledge upgradation aligned with the industry needs to improve and secure our students' future. Our students are industry-ready and can match the pace of fast-moving industries as we follow our legacy, "Transform Your Passion into a Profession," in our pedagogy.</p>
              </div>
              <div class="col-md-12 text-center " style={{ margin: "0px 0px 0px 0px" }}>
                <p style={{ textAlign: "justify" }} >International curriculum, well-defined pedagogy, and latest infrastructure help us carve leadership in students to serve society at every level. We nurture talents by converging on the overall development of students through innovative academia. Our prime focus is advancing the contemporary curriculum, meeting and striking various quality benchmarks, and creating a healthy and pleasant scholastic governance.</p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </Container>
      </div>
      <div className='bg8'>
        <Container>
          <h2 className='text-center my- mb-5 in13'>13 INSTITUTIONS OFFERING WORLD CLASS EDUCATION</h2>
          <section class="columns">
            <div class="column">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="7">
                  <Accordion.Header className='naccording' >SAGE School of Sciences  </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Science (B.Sc.) Biotechnology<br></br>
                    » Bachelor of Science (B.Sc.) Forensic Science<br></br>
                    » Bachelor of Science (B.Sc.) Microbiology<br></br>
                    » Bachelor of Science (B.Sc.) PCM<br></br>
                    » Master of Science (M.Sc.) Biotechnology<br></br>
                    » Master of Science (M.Sc.) Chemistry<br></br>
                    » Master of Science (M.Sc.) Forensic Science<br></br>
                    » Master of Sciences (M.Sc.) Microbiology<br></br>
                    » Master of Science (M.Sc.) Physics<br></br>
                    » Bachelor of Science (B.Sc.) ZBC<br></br>
                    » Master of (M. F. Sc.) Fisheries Sciences<br></br>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className='naccording'>SAGE School of Commerce</Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Commerce (B.Com. ( Hons / Research ))<br></br>
                    » Bachelor of Commerce (B.Com.) Computers<br></br>
                    » Bachelor of Commerce (B.Com.) International Business & Finance<br></br>
                    » Bachelor of Commerce (B.Com.) Financial Analysis<br></br>
                    » Bachelor of Commerce (B.Com.) Business Economics<br></br>
                    » Master of Commerce (M.Com.)<br></br>
                    » Bachelor of Commerce (B.Com.) Financial Market
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className='naccording'>SAGE School of Journalism and Mass Communication   </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Arts in Journalism and Mass Communication (BAJMC ( Hons / Research ))<br></br>
                    » Master of Arts in Journalism and Mass Communication (MAJMC)
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className='naccording'>SAGE School of Agriculture  </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Science (B.Sc. (Hons) Agriculture)<br></br>
                    » Masters of Fisheries Science (M. F. Sc. Aquaculture)
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className='naccording'>SAGE School of Engineering and Technology</Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Technology (B.Tech) Computer Science & Engineering<br></br>
                    » Bachelor of Technology (B.Tech) Computer Science & Engineering (Networks)<br></br>
                    » Bachelor of Technology (B.Tech) Civil Engineering<br></br>
                    » Bachelor of Technology (B.Tech) Electronics & Communication Engineering<br></br>
                    » Bachelor of Technology (B.Tech) Information Technology<br></br>
                    » Bachelor of Technology (B.Tech) Mechanical Engineering<br></br>
                    » Bachelor of Technology (B.Tech) Automation & Robotics<br></br>
                    » Bachelor of Technology (B.Tech) Mechatronics Engineering<br></br>
                    » Master of Technology (M.Tech) Robotics and Mechatronics<br></br>
                    » Master of Technology (M.Tech) VLSI and Embedded Systems<br></br>
                    » Master of Technology (M.Tech) Sound Engineering<br></br>
                    » Master of Technology (M.Tech) Artificial Intelligence and Robotics<br></br>
                    » Master of Technology (M.Tech) Production Technology<br></br>
                    » Master of Technology (M.Tech) Structural Engineering<br></br>
                    » Master of Technology (M.Tech) Digital Communication Engineering<br></br>
                    » Master of Technology (M.Tech) Remote Sensing & Wireless Sensor Network<br></br>
                    » Master of Technology (M.Tech) Construction Technology & Management<br></br>
                    » Master of Technology (M.Tech) Information & Communication Technology<br></br>
                    » Master of Technology (M.Tech) Information & Cyber Warfare<br></br>
                    » Master of Technology (M.Tech) Computer Science & Engineering<br></br>
                    » Master of Technology (M.Tech) Thermal Engineering<br></br>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className='naccording'>SAGE School of Computer Application  </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Computer Application (BCA ( Hons / Research ))<br></br>
                    » Master of Computer Application (MCA)<br></br>
                    » Bachelor of Computer Application (BCA) Cloud Computing<br></br>
                    » Master of Computer Application (MCA) Cloud Computing<br></br>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className='naccording'>School of Law and Legal Studies   </Accordion.Header>
                  <Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div class="column acorb">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="8">
                  <Accordion.Header className='naccording' >SAGE School of Arts, Humanities and Social Sciences   </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Arts (BA ( Hons / Research ))<br></br>
                    » Master of Arts (MA) Public Admin<br></br>
                    » Master of Arts (MA) Political Science<br></br>
                    » Master of Arts (MA) Sociology<br></br>
                    » Master of Arts (MA) History<br></br>
                    » Bachelor of Arts (BA (NEP)) History<br></br>
                    » Bachelor of Arts (BA (NEP)) Psychology<br></br>
                    » Master of Arts (MA) Psychology<br></br>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header className='naccording'>SAGE School of Management   </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Business Administration ( BBA (Hons.)) Event management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Banking & Finance<br></br>
                    » Master of Business Administration (MBA ) Marketing (SUNSTONE)<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Information Technology<br></br>
                    » Master of Business Administration (MBA) Human Resource Management<br></br>
                    » Master of Business Administration (MBA) Finance Management<br></br>
                    » Master of Business Administration (MBA) Marketing Management<br></br>
                    » Master of Business Administration (MBA) Event Management with Media & Entertainment<br></br>
                    » Master of Business Administration (MBA) Banking & Finance<br></br>
                    » Master of Business Administration (MBA) Information Technology Management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) International Business Management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Digital Marketing Management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) E-Commerce Management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Human Resource Management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Finance Management<br></br>
                    » Master of Business Administration (MBA) Human Resource Management + Finance Management<br></br>
                    » Master of Business Administration (MBA) Human Resource Management + Marketing Management<br></br>
                    » Master of Business Administration (MBA) Human Resource Management + Information Technology Management<br></br>
                    » Master of Business Administration (MBA) Human Resource Management + Banking & Finance Management<br></br>
                    » Master of Business Administration (MBA) Marketing Management + Finance Management<br></br>
                    » Master of Business Administration (MBA) Marketing Management + Information Technology Management<br></br>
                    » Master of Business Administration (MBA) Marketing Management + Event Management<br></br>
                    » Master of Business Administration (MBA) Finance Management + Event Management<br></br>
                    » Master of Business Administration (MBA) Information Technology Management + Banking & Finance Management<br></br>
                    » Master of Business Administration (MBA) Information Technology Management + Finance Management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Marketing Management<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Human Resource Management (SUNSTONE)<br></br>
                    » Master of Business Administration (MBA ) Finance (SUNSTONE)<br></br>
                    » Master of Business Administration (MBA ) Human Resource (SUNSTONE)<br></br>
                    » Master of Business Administration (MBA ) Data Analytics (SEEKHO)<br></br>
                    » Master of Business Administration (MBA) Banking and Finance<br></br>
                    » Master of Business Administration (MBA) Information Technology Management<br></br>
                    » Master of Business Administration (MBA ) Digital Marketing<br></br>
                    » Master of Business Administration (MBA ) Fintech<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Fintech<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Investment Banking (IMAGIN XP)<br></br>
                    » Bachelor of Business Administration (BBA (Hons).) Business Analytics (SEEKHO)<br></br>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header className='naccording'>SAGE School of Design     </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Design (B. Des.) Product Design<br></br>
                    » Bachelor of Design (B. Des.) Interior Design<br></br>
                    » Bachelor of Design (B. Des.) Apparel Design<br></br>
                    » Master of Design (M. Des.) Product Design<br></br>
                    » Master of Design (M. Des.) In Interior<br></br>
                    » Master of Design (M. Des.) In Fashion & Apparel Design
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header className='naccording'>SAGE School of Advanced Computing</Accordion.Header>
                  <Accordion.Body>
                    Study high-end computer applications like artificial intelligence, big data, and Cloud Computing, Cyber Security, Internet of Things (IoT), and Data Science at the best private university in Bhopal.
                    <br></br>
                    » Bachelor of Technology (B. Tech.) Artificial Intelligence<br></br>
                    » Bachelor of Technology (B. Tech.) Big Data & Cloud Computing<br></br>
                    » Bachelor of Technology (B. Tech.) Cyber Security & Forensic<br></br>
                    » Bachelor of Technology (B. Tech.) Internet of Things (IOT)<br></br>
                    » Bachelor of Technology (B. Tech.) Data Science<br></br>
                    » Master of Technology (M. Tech.) Artificial Intelligence<br></br>
                    » Master of Technology (M. Tech.) Cyber Security & Forensic<br></br>
                    » Master of Technology (M. Tech.) Internet of Things (IOT)<br></br>
                    » Master of Technology (M. Tech.) Data Science<br></br>
                    » Master of Technology (M. Tech.) Big Data & Cloud Computing<br></br>
                    » Bachelor of Technology (B.Tech CSE (Hons)) Big Data & Cloud Computing<br></br>
                    » Bachelor of Technology (B.Tech CSE (Hons)) Internet of Things<br></br>
                    » Bachelor of Technology (B.Tech CSE (Hons)) Artificial Intelligence<br></br>
                    » Bachelor of Technology (B.Tech CSE (Hons)) Cyber Security & Forensic<br></br>
                    » Bachelor of Technology (B.Tech CSE (Hons)) Big Data Analytics<br></br>
                    » Bachelor of Technology (B.Tech CSE (Hons)) Data Sciences<br></br>
                    » Bachelor of Technology (BTech CSE (Hons)) Full Stack Development<br></br>
                    » Bachelor of Technology (BTech CSE (Hons)) Data Analytics<br></br>
                    » Bachelor of Technology (BTech CSE (Hons)) Cloud Computing
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header className='naccording'>SAGE School of Performing Arts  </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Fine Arts (BFA) Film Making<br></br>
                    » Bachelor of Fine Arts (BFA) Computer Graphics<br></br>
                    » Bachelor of Performing Arts (BPA) Dance<br></br>
                    » Bachelor of Performing Arts (BPA) Music<br></br>
                    » Bachelor of Performing Arts (BPA) Audio Engineering & Sound Programming<br></br>
                    » Master of Fine Arts (MFA) Film Making<br></br>
                    » Master of Fine Arts (MFA) Computer Graphics<br></br>
                    » Master of Performing Arts (MPA) Dance<br></br>
                    » Master of Performing Arts (MPA) Music
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header className='naccording'>Sage School of Languages   </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Arts (BA (Hons)) English<br></br>
                    » Bachelor of Arts (BA (Hons)) Hindi<br></br>
                    » Master of Arts (MA) English<br></br>
                    » Master of Arts (MA) Hindi
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header className='naccording'>Sage College of Nursing    </Accordion.Header>
                  <Accordion.Body>
                    » Bachelor of Nursing (BSc (Nursing))
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </div>
          </section>
        </Container>
      </div>
      <div style={{ background: "url('./img/sage-university-bhopal.webp')" }} className='bg10'>
        <Container>
          <section class="columns">
            <div class="column">
              <Link to='./pdf/SUB-2024-25-Brochure.pdf' target='_blank'>
                <h3 className='download1'>DOWNLOAD <span className='Broch'>THE <br></br>BROCHURE</span></h3></Link>
            </div>
            <div class="column">
              <Link to='./pdf/SUB-2024-25-Brochure.pdf' target='_blank'><img src='./img/sage-university-bhopal--brochure.webp' alt='sage university bhopal brochure' className='img9' /></Link>
            </div>
          </section>
        </Container>
      </div>
      <div style={{ background: "url('./img/INTERNATIONAL.webp')" }} className='bg11'>
        <Container>
          <h3 className='text-center my- mb-5 '>INTERNATIONAL TIE-UPS</h3>
          <section class="columns">
            <div class="column col94">
              <Card className='card5'>
                <img src='./img/hrd.webp' className='imgcard' alt='Sage University Collaborated With Harvard Business School Online' />
                <h2 className='sagetext'>Sage University Collaborated With Harvard Business School Online</h2>
                <p className='p5'>Tied up with Harvard Business School Online to learn business strategies uniquely.</p>
              </Card>
            </div>
            <div class="column col94">
              <Card className='card5'>
                <img src='./img/micro.webp' className='imgcard' alt='Sage University Signed Mou With HP Microfocus' />
                <h2 className='sagetext'>Sage University Signed Mou With HP Microfocus</h2>
                <p className='p5'>Signed MOU to impart training on cybersecurity, artificial intelligence, machine learning.</p>
              </Card>
            </div>
            <div class="column col94">
              <Card className='card5'>
                <img src='./img/huawei.webp' className='imgcard' alt='Sage University Tied-UP With Quick Heal' />
                <h2 className='sagetext'>Sage University Tied-UP With Quick Heal</h2>
                <p className='p5'>Tied-up with Quick Heal to educate, empower and inspire students in the field of cybersecurity.</p>
              </Card>
            </div>
          </section>

        </Container>
      </div>
      <div className='bg12'>
        <Container>
          <h3 className='text-center my- mb-5 '>AWARDS AND LAURELS</h3>
          <section class="columns">
            <div class="column col94 ">
              <Card className='card6'>
                <img src='./img/sage-university-award.webp' className='imgcard' alt='Award-Top Private University of Central India 2019' />
                <p className='p6'>The Vice President of India Awarded Sage University, Indore "Top Private University of Central India 2019"</p>
              </Card>
            </div>
            <div class="column col94 ">
              <Card className='card6'>
                <img src='./img/sage-university-award2.webp' className='imgcard' alt='Award-The Young Entrepreneur' />
                <p className='p6'>ED, The Sage Group Ms. Shivani Agrawal received "The Young Entrepreneur" award from Aishwarya Rai Bachchan</p>
              </Card>
            </div>
            <div class="column col94 ">
              <Card className='card6'>
                <img src='./img/sage-university-award3.webp' className='imgcard' alt='Grand Inauguration of Sage University Bhopal' />
                <p className='p6'>Grand Inauguration of Sage University Bhopal by CM Shri Shivraj Singh Chouhan & Former CM Shri Digivijay Singh of MP</p>
              </Card>
            </div>
          </section>

        </Container>
      </div>
      <div className='bg13'>
        <Container>
          <p className='text-center' style={{ color: "#990000", fontWeight: "600", fontSize: "20px" }}>A Campus</p>
          <h2 className='text-center my-3 '>TO FALL IN LOVE WITH <img src='./img/thum.webp' width={30} style={{ marginTop: "-10px" }} /></h2>
          <p className='p90'>Students Share Their Learning Experiences  At Sage University</p>
          <iframe class="video-set" src="https://www.youtube.com/embed/0ehTC8eEols" className="video1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </Container>
      </div>
      <Footer />
    </div >
  )
}

export default Addmission
