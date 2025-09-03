import Hero from "../../components/blog/Hero";
import Blog from "../../components/home/Blog";
const BlogPage = () => {
  return (
    <div className="bg-[#110817] overflow-x-clip">
      <Hero />
      <section className="relative z-10 mt-16">
        <Blog />
      </section>
    </div>
  );
};

export default BlogPage;
