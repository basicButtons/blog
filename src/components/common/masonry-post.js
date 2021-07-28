import React from 'react'
import {categoryColors} from "./style"

export default function MasonryPost({post,tagsOnTap,show}) {
    const reqSvgs = require.context ( '../../assets/imgs', true, /\.(jpeg|jpg)$/)
    const image = reqSvgs("./"+post.img)
    const imageStyle = { background: `url('${image.default}') center center /cover` }
    const windowWidth = window.innerWidth
    const style =windowWidth >900 ? {...post.style,...imageStyle} : {...imageStyle}
    return (
            <a className="masonry-post overlay" href={post.link} style={style}>
                <div className="image-text">
                    <div className="tags-container">
                        {
                            post.categories.map((tag,index)=>
                                <span key = {index} className="tags" style={{backgroundColor:categoryColors[tag]}}>
                                    {tag.toUpperCase()}
                                </span>
                            )
                        }
                    </div>
                    <div>
                        <h1 className="image-title">{post.title}</h1>
                        <span className="image-date">{post.date}</span>
                    </div>
                </div>
            </a>
    )
}
