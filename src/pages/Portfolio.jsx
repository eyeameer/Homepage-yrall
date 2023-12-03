import Layout from "../components/Layout";
import SpotlightCard from "../components/SpotlightCard";
import portfolioHomeImg from '../assets/portfolioPage-images/portfolioHomeImg.svg'
import CustomerForm from "../components/CustomerForm";
import HeadingCard from "../components/HeadingCard";
import ClientIcon from '../assets/portfolioPage-images/clientIcon.svg'
import ProjectsCard from "../components/ProjectsCard";
export default function Portfolio(){
    return(
        <Layout>
              <section className="flex overflow-hidden flex-col gap-20">
              <SpotlightCard
            title='portfolio'
            margins='mx-2 md:mx-[27%]'
            description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
            image={<img className="w-auto md:w-96 xl:w-auto" src={portfolioHomeImg} />}
            />
             <section className=" overflow-hidden gap-4 lg:mx-auto lg:mt-auto flex flex-col lg:inline-flex lg:flex-col lg:items-center lg:gap-[40px] lg:relative">
                    <HeadingCard
                    title='recent projects'
                    
                    description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                    />
                    <ProjectsCard
                    position='left'
                    title='Website'
                    image={<img src={ClientIcon} />}
                    description='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                    />
                    <ProjectsCard
                    position='right'
                    title='Website'
                    image={<img src={ClientIcon} />}
                    description='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                    />
                    <ProjectsCard
                    position='left'
                    title='Website'
                    image={<img src={ClientIcon} />}
                    description='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                    />
            </section>
            <CustomerForm/>
           
              </section>
            
        </Layout>
    )
}