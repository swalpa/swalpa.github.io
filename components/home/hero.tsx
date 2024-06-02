import Image from 'next/image'
import { SiGooglescholar, SiDblp, SiResearchgate, SiLoop, SiClarivate, SiScopus } from 'react-icons/si'
import { FaGraduationCap } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='mb-12 w-[90%] xl:w-4/5 bg-white flex flex-col lg:flex-row text-black'>
        <div className='w-full lg:w-1/3 flex flex-col items-center mt-16'>
            <Image
            src={'https://swalpa.github.io/old-portfolio/img/SKR.jpeg'}
            width={150}
            height={150}
            alt="Picture of the author"
            className='w-72 h-72 object-cover rounded-full mb-6'
            />
            <h2 className='text-2xl lg:text-3xl font-semibold'>Dr. Swalpa Kumar Roy</h2>
            <i className='opacity-80'>Assistant Professor, W.B.G.S</i>
            <a href="https://agemc.ac.in/" target='_blank' className='text-blue-400 underline lg:text-black lg:no-underline hover:text-blue-400 hover:underline text-center'>Alipurduar Government Engineering and Management College</a>
            {/* <div className='flex gap-x-2 items-center'>
              <p className="flex gap-1 my-1"><LucidePhone className="text-sm px-1" />(+91)-9749322213</p>
              <p className="flex gap-1"><LucideMail className="text-sm px-1" />swalpa@ieee.org</p>
            </div> */}
            <div className='flex gap-x-4 items-center justify-center mt-4'>
                <a href="https://scholar.google.com/citations?user=1WVrFGwAAAAJ&hl=en" title='Google Scholar' target='_blank' className='text-4xl hover:text-blue-400 transition'>
                  <img src="https://i.ibb.co/FK8Xwbx/512px-Google-Scholar-logo-svg.png" alt="Google Scholar" title='Google Scholar' className='w-9 h-9' />
                </a>
                <a href="https://dblp.org/pid/166/4544.html" title='DBLP' target='_blank' className='text-4xl hover:text-blue-400 transition'>
                  <img src='https://i.ibb.co/fnFcchK/dblp-icon-192x192.png' alt='DBLP' title='DBLP' className='w-9 h-9'/>
                </a>
                <a href="https://www.researchgate.net/profile/Swalpa-Roy" title='Research Gate' target='_blank' className='text-4xl hover:text-blue-400 transition'>
                  <img src='https://i.ibb.co/p4hbxD4/RG.png' alt='Research Gate' title='Research Gate' className='w-9 h-9'/>
                </a>
                <a href="https://loop.frontiersin.org/people/2122815/overview" title='Loop' target='_blank' className='text-4xl hover:text-blue-400 transition'>
                  <img src='https://i.ibb.co/3SMKJFq/looplogo-thumb.png' alt='Loop' className='w-11 h-9 object-cover' title='Loop'/>
                </a>
                <a href="https://www.webofscience.com/wos/author/record/2068252" title='Web of Science' target='_blank' className='text-4xl hover:text-blue-400 transition'>
                  <img src='https://i.ibb.co/5vhpcNR/l-Oi-Mq-L4-UN4910-Sl-Rv1s-SYUKCAhc6j4j-JIhk-Vd-RX-k-Ceoi-OSYpi35m-Ya-Xch-XLNNGb-RBAq-Iah-D-s900-c-k.jpg' alt='Web of Science' title='Web of Science' className='w-9 h-9'/>
                </a>
                <a href="https://www.scopus.com/authid/detail.uri?authorId=56784776500" title='Scopus' target='_blank' className='text-4xl hover:text-blue-400 transition'>
                  <img src='https://i.ibb.co/zHwhLHm/elsevier-scopus.png' alt='Scopus' title='Scopus' className='w-9 h-9'/>
                </a>
            </div>
        </div>
        <div className='w-full lg:w-2/3 h-full'>
          <div className='mt-20 w-full'>
            <h2 className='h2-heading ml-2 w-full'>Biography</h2>
            <section className='pl-3 lg:pl-7 text-justify'>
              Swalpa Kumar Roy, (Bangla: স্বল্প কুমার রায়।) has been with the Alipurduar Government Engineering and Management College, Alipurduar. Previously, he was associated with the Jalpaiguri Government Engineering College, Jalpaiguri, the 5th oldest technical institution and one of the 
              most prestigious academic institution in West Bengal where he is associated with the Department of Computer Science and Engineering and holds the position of assistant professor from 
              March 2018 onward. Swalpa Kumar Roy is also working with Prof. Bhabatosh Chanda, Fellow, IAPR and Prof. Bidyut Baran Chaudhuri, Fellow, IEEE, Computer Vision and Pattern Recognition (CVPR) Unit at Indian 
              Statistical Institute, Kolkata during his Ph.D. research. He is also working under Prof. Soumitro Banerjee, Fellow, IEEE, at Indian Institute of Science Education and Research, Kolkata.Before joining CVPR 
              Unit, ISI Kolkata, he received his B. Tech (Computer Science & Engineering) degree from West Bengal University of Technology, Kolkata, and M. E (Computer Science & Engineering) degree from the Indian Institute of 
              Engineering Science and Technology, Shibpur. He also worked as a Project-Linked-Person (PLP) at the OCR Lab, CVPR Unit, Indian Statistical Institute, Kolkata.
            </section>
          </div>
          <div className='w-full mt-7 flex flex-col lg:flex-row gap-y-8 lg:gap-x-32'>
            <div className='w-full lg:w-fit'>
              <h2 className='h2-heading ml-2 w-full'>Interest</h2>
              <section>
                <ul className='list-disc pl-10 text-lg'>
                  <li>Computer Vision</li>
                  <li>Computational Biology</li>
                  <li>Deep Learning</li>
                  <li>Hyperspectral Imaging</li>
                  <li>Image Processing</li>
                  <li>Texture Feature Description</li>
                </ul>
              </section>
            </div>
            <div className='w-full lg:w-fit'>
              <h2 className='h2-heading ml-2'>Education</h2>
              <div className='ml-5'>
                <div className='mb-2'>
                  <div className='flex lg:items-center gap-x-2'>
                    <FaGraduationCap className="text-2xl lg:text-3xl"/>
                    <p className='lg:text-xl font-medium'>Ph.D in Computer Science and Engineering</p>
                  </div>
                  <div className='pl-7 lg:pl-10 '>
                    <i className='opacity-60 text-sm text-center w-full'>University of Calcutta (Work done at ISI Kolkata)</i>
                  </div>
                </div>
                <div className='mb-2'>
                  <div className='flex lg:items-center gap-x-2'>
                    <FaGraduationCap className="text-2xl lg:text-3xl"/>
                    <p className='lg:text-xl font-medium'>M.E in Computer Science and Engineering</p>
                  </div>
                  <div className='pl-7 lg:pl-10 '>
                    <i className='opacity-60 text-sm text-center w-full'>Indian Institute of Engineering Science and Technology, Shibpur</i>
                  </div>
                </div>
                <div>
                  <div className='flex lg:items-center gap-x-2'>
                    <FaGraduationCap className="text-2xl lg:text-3xl"/>
                    <p className='lg:text-xl font-medium'>B.Tech in Computer Science and Engineering</p>
                  </div>
                  <div className='pl-7 lg:pl-10 '>
                    <i className='opacity-60 text-sm text-center w-full'>West Bengal University of Technology, Kolkata</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero