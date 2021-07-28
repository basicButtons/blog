import React,{useMemo} from 'react'
import PostMasonry from "../components/common/post-masonry"
import MasonryPost from "../components/common/masonry-post"
import trend from "../assets/mock/trending"
import post from "../assets/mock/featured"
import Carousel from "../components/common/carousel"
import recent from  "../assets/mock/recent"
export default function Home() {
    console.log("调用home")
    const PostConfigure = {
        1:{
            gridArea:"1 / 2 / 3 / 3"
        }
    }
    const lastStyle={
        height:"100%",
        width:"100%"
    }
    const TrendConfigure = {
        0:{
            gridArea:"1/1/2/3",
            height:"300px",
            width:"100%"
        },
        1:{
            height:"300px"
        },
        3:{
            height:"630px",
            marginLeft:"30px"
        }
    }


    const mergeStyles = (posts,config)=>
        posts.forEach((post,index)=>{
            post.style = config[index]
        })
    
    mergeStyles(post,PostConfigure)
    mergeStyles(trend,TrendConfigure)
    const lastFeature = useMemo(()=>trend.pop(),[])

    recent.forEach(item=>
        item.style={
            height:"500px"
        }    
    )
    return (
        <section className="container home">
            <div className="row">
                <h1>Trending Post</h1>
                <section className="feature-posts-container" >
                    <PostMasonry posts={trend} columns={2} tagsOnTop={true} show={123}></PostMasonry>
                    <MasonryPost post={lastFeature} tagsOnTop={true} style={{lastStyle}}></MasonryPost>
                </section>
                <div className="recent-post">
                <h1>Recent Posts</h1>
                <section className="carousel-posts-container" >
                    <Carousel className="carousel" posts={recent} tagsOnTop={false}></Carousel>
                </section>
            </div>
                <h1>Feature Post</h1>
                <section className="feature-posts-container" >
                    <PostMasonry posts={post} columns={3} tagsOnTop={false}/>
                </section>
            </div>
            
        </section>
    )
}
