import classes from "./page.module.css";
import BlogCard from "./components/blogCard/BlogCard";
import { blogs } from "./lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className={classes.container}>
      <h2>Kerapahel Blog</h2>
      <div className={classes.wrapper}>
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
}
