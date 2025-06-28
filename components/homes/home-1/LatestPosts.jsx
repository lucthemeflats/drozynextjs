"use client";

import { gridPosts } from "@/data/blogs";
import React from "react";
import BlogCard1 from "@/components/blog-cards/BlogCard1";

export default function LatestPosts() {
  return (
    <div className="tf-container tf-spacing-1">
      <div className="heading-section mb_28">
        <h3 className="title">Latest Posts</h3>
      </div>
      <div className="tf-grid-layout xxl-col-4 sm-col-2">
        {gridPosts.map((post, index) => (
          <BlogCard1 key={index} post={post} />
        ))}
        <div className="newsletter-item d-flex flex-column justify-content-between">
          <h4 className="mb_20">
            Subscribe Now To Stay Updated With Top News!
          </h4>
          <div>
            <form
              id="subscribe-form-2"
              acceptCharset="utf-8"
              data-mailchimp="true"
              onSubmit={(e) => e.preventDefault()}
              className="form-newslate mb_20"
            >
              <div id="subscribe-content-2" className="position-relative">
                <fieldset className="fieldset-item">
                  <input
                    type="email"
                    placeholder="E-mail"
                    id="subscribe-email-2"
                    aria-required="true"
                    required
                  />
                </fieldset>
                <div className="box-btn">
                  <button
                    id="subscribe-button-2"
                    type="button"
                    className="btn-submit animate-hover-btn"
                  >
                    <span className="icon-PaperPlaneTilt" />
                  </button>
                </div>
              </div>
              <div id="subscribe-msg-2" />
            </form>
            <div className="box-fieldset-item d-flex">
              <fieldset className="d-flex gap_12">
                <input type="checkbox" className="tf-check" />
              </fieldset>
              <p className="text-body-1">
                By clicking the Subscribe button, you acknowledge that you have
                read and agree to our
                <a href="#" className="text_on-surface-color link">
                  Privacy Policy
                </a>
                and
                <a href="#" className="text_on-surface-color link">
                  Terms Of Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
