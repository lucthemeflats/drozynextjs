import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard1({ post }) {
  return (
    <div className="feature-post-item style-default hover-image-translate">
      {post.imgSrc ? (
        <div className="img-style mb_24">
          <Image
            className="lazyload"
            srcSet={`${post.imgSrc} 328w`}
            sizes="(max-width: 328px) 100vw, 328px"
            width={328}
            height={246}
            alt="feature post"
            src={post.imgSrc}
          />

          <Link
            href={`/categories-1`}
            className="tag categories text-caption-2 text_white"
          >
            {post.category}
          </Link>
          <div className="tag time text-caption-2 text_white">
            <i className="icon-Timer" /> 4 Mins read
          </div>
          <Link href={`/single-post-1/${post.id}`} className="overlay-link" />
        </div>
      ) : (
        ""
      )}
      <div className="content">
        <ul className="meta-feature fw-7 d-flex text-caption-2 text-uppercase mb_12">
          <li>{post.date}</li>
          <li>
            <span className="text_secodary2-color">POST BY</span>
            <a href="#" className="link">
              {post.author}
            </a>
          </li>
        </ul>
        <h5 className="title">
          <Link
            href={`/single-post-1/${post.id}`}
            className="line-clamp-2 link"
          >
            {post.title}
          </Link>
        </h5>
        {post.excerpt ? (
          <p className="text-body-1 line-clamp-2">{post.excerpt}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
