import Image from "next/image";
import Link from "next/link";
import classes from "./blogCard.module.css";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const BlogCard = ({ blog: { title, desc, img } }) => {
  const isliked = true;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link className={classes.imgContainer} href="/">
          <Image src={img} width="350" height="350" />
        </Link>
        <div className={classes.blogData}>
          <div className={classes.left}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>
              Created By: <span>1th of January</span>
            </span>
          </div>
          <div className={classes.right}>
            {12} {""}{" "}
            {isliked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
