import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import { Hero } from "@/components/Hero";
import Books from "@/components/Books";
import Posts from "@/components/Posts";
import Newsletter from "@/components/Newsletter"
import About from "@/components/About"
import Footer from "@/components/Footer"

export default function Home() {
  return <div>
    <Hero/>
    <Featured/>
    <Categories/>
    <Books/>
    <Posts/>
    <Newsletter/>
    <About/>
    <Footer/>
  </div>;
}
