import "./posts.scss"
import Post from "../post/Post";

const Posts = () => {



//TEMPORARY
const posts = [
    {
      id: 1,
      name: "Simrat Bains",
      userId: 1,
      profilePic:
        "https://cdn.mos.cms.futurecdn.net/q67fyfxLv6gDp3PxKq9FYg.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://static.ffx.io/images/$zoom_0.6390607407407407%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_130%2C$y_32/t_crop_custom/q_86%2Cf_auto/bff06c789fd1b59508867252c5e252e375e5dc6a",
    },
    {
      id: 2,
      name: "Simrat Bains",
      userId: 2,
      profilePic:
        "https://cdn.mos.cms.futurecdn.net/q67fyfxLv6gDp3PxKq9FYg.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];


return(
<div className="posts">
  {posts.map(post=>(
    <Post post={post} key={post.id}/>
  ))}
</div>

)


}

export default Posts;
