import { FaUsers } from 'react-icons/fa'
import { IoIosJournal } from 'react-icons/io'
import { MdCardMembership } from 'react-icons/md'
const ProfessionalServices = () => {

    return (
        <div className=" w-[90%] xl:w-4/5 bg-white text-black mb-10">
            <h2 className="h2-heading">Professional Services</h2>
            <div className="flex flex-col lg:flex-row px-2 gap-x-10">
                <div className="w-full lg:w-1/3">
                    <div className='flex gap-x-2 h2-heading items-center'>
                        <FaUsers className="text-2xl text-gray-700" />
                        <h3 className="text-xl lg:text-2xl">Conferences</h3>
                    </div>
                    <ul className='list-disc mb-5 pl-7 lg:pl-10 lg:text-lg grid grid-cols-1 lg:grid-cols-2'>
                        <li>CBMVC 2021</li>
                        <li>CVIP 2019, 2020</li>
                        <li>Premi 2019</li>
                        <li>IEEE Tencon 2018</li>
                        <li>CVMI 2023</li>
                        <li>IGRASS 2023</li>
                    </ul>
                </div>
                <div className='w-full lg:w-2/3'>
                    <div className='flex gap-x-2 h2-heading items-center'>
                        <IoIosJournal className="text-2xl text-gray-700" />
                        <h3 className="text-xl lg:text-2xl">Journals</h3>
                    </div>
                    <ul className='list-disc pl-7 lg:pl-10 lg:text-lg grid grid-cols-1 lg:grid-cols-2'>
                        <li>IEEE Geoscience and Remote Sensing Letters</li>
                        <li>IEEE Trans. on Image Processing</li>
                        <li>IEEE Trans. on Industrial Electronics</li>
                        <li>IEEE Trans. on Geoscience and Remote Sensing</li>
                        <li>IEEE Access</li>
                        <li>IET Computer Vision</li>
                        <li>Signal Processing, Elsevier</li>
                        <li>Pattern Recognition Letters, Elsevie</li>
                        <li>IEEE Trans. on Cybernetics</li>
                        <li>IEEE Trans. on NNLS</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-2 gap-x-10'>
                <div className='mt-7 w-full lg:w-1/3'>
                    <div className='flex gap-x-2 h2-heading items-center'>
                        <MdCardMembership className="text-2xl text-gray-700" />
                        <h3 className="text-xl lg:text-2xl">Professional Memberships</h3>
                    </div>
                    <ul className='list-disc pl-7 lg:pl-10 lg:text-lg'>
                        <li>CSI, Life Member.</li>
                        <li>The IAPR, Life Member (L-273).</li>
                        <li>The IE India, Associate Member (AM3058193).</li>
                        <li>IEEE, Member (98624682).</li>
                        <li>ACM Member (0349556)</li>
                    </ul>
                </div>
                <div className='mt-7 w-full lg:w-2/3'>
                    <div className='flex gap-x-2 h2-heading items-center'>
                        <MdCardMembership className="text-2xl text-gray-700" />
                        <h3 className="text-xl lg:text-2xl">Editorial Board Member</h3>
                    </div>
                    <ul className='list-disc pl-7 lg:pl-10 lg:text-lg'>
                        <li> <b>Guest Editor</b> of special issued journal of Deep Learning for Predictive Modeling in Large-Scale Systems in MDPI.</li>
                        <li><b>Topic Editor</b> of the journal of Advanced Machine Learning Techniques for Remote Sensing Intelligent Interpretation in Frontiers in Remote Sensing.</li>
                        <li><b>Associate Editor</b> of journal of <a target='_blank' className='text-blue-500 hover:underline' href="https://link.springer.com/journal/42979/editors">Springer Nature Computer Science</a> (SNCS).</li>
                        <li><b>Advisory Member</b> in <a target='_blank' className='text-blue-500 hover:underline' href="https://www.amygdalaai.org/">Amygdala AI</a> an open non-profit platform for cutting edge AI research to solve real-life computer vision challenges.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalServices