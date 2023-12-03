import CustomerForm from "../components/CustomerForm";
import CustomersComponent from "../components/CustomersComponent";
import Layout from "../components/Layout";
import blogsHomeImg from '../assets/blogPage-images/blogsHomeImg.svg'
import SpotlightCard from "../components/SpotlightCard";
import HeadingCard from "../components/HeadingCard";
import BlogCard from "../components/BlogCard";
import blogThumbnail from '../assets/blogPage-images/blogThumbnail.svg'
export default function Blogs(){
    return(
        <Layout>
                     <section className="flex overflow-hidden flex-col gap-20">
                     <SpotlightCard
                        title="Blogs"
                        margins='mx-[20%] md:mx-[35%]'
                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                        image={<img className="w-auto md:w-96 xl:w-auto" src={blogsHomeImg} alt="" />}
                    />
                    <section className=" overflow-hidden lg:mx-auto lg:mt-auto flex flex-col lg:inline-flex lg:flex-col lg:items-center lg:gap-[40px] lg:relative">
                    <HeadingCard
                    title='Blogs & Articles'
                    description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                    />

                    </section>
                    <section className="grid grid-cols-12 gap-4">
                        <BlogCard
                        image={<img src={blogThumbnail} />}
                        category='category 1'
                        description='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                        title='article name-headline for an article'
                        />
                        <BlogCard
                        image={<img src={blogThumbnail} />}
                        category='category 1'
                        description='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                        title='article name-headline for an article'
                        />
                        <BlogCard
                        image={<img src={blogThumbnail} />}
                        category='category 1'
                        description='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                        title='article name-headline for an article'
                        />
                        <BlogCard
                        image={<img src={blogThumbnail} />}
                        category='category 1'
                        description='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
                        title='article name-headline for an article'
                        />
                        
                    </section>
                        <CustomersComponent/>
                        <CustomerForm/>
                   
                     </section>
        </Layout>
    )
}