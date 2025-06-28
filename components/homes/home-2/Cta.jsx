"use client";

export default function Cta() {
  return (
    <div className="tf-container w-xxl">
      <div className="newsletter-item style-1 d-flex justify-content-between">
        <h3 className="title">Subscribe Now To Stay Updated With Top News!</h3>
        <p className="description">
          Subscribe now to stay updated with all the top news, exclusive
          insights, and weekly highlights you won’t want to miss.
        </p>
        <div className="form">
          <form
            id="subscribe-form-2"
            onSubmit={(e) => e.preventDefault()}
            className="form-newslate mb_12"
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
  );
}
