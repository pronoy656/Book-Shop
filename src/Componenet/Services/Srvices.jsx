import React from "react";

const Srvices = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex items-center gap-x-6 mt-6">
      <div className="md:w-[610px]">
        <img src="https://i.ibb.co/kc9MtKC/SL-050620-30640-14.jpg" alt="" />
      </div>
      <div className="md:w-[610px] mt-6 md:mt-0">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            When is the best time to start promotion efforts for a manuscript or
            book?
          </div>
          <div className="collapse-content">
            <p>
              I believe the best time to start book promotion is when you have
              the idea for the book. Right at that time of inception, start
              talking about the book. Start sharing your thoughts via your
              social networks and/or blog.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can new writers (those who don’t yet have many publication
            credits yet) begin to reach out to an audience for their work?
          </div>
          <div className="collapse-content">
            <p>
              Build a community, aka a tribe, online. The best way to do that is
              by writing a blog and then interacting with other like-minded
              bloggers, website editors, ezine editors, and other book authors
              writing on your subject. These interactions should drive traffic
              to your blog where you can capture the names and emails of
              potential readers.{" "}
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What advice do you have for authors who are introverts or who are
            not good at getting out there and selling their books?
          </div>
          <div className="collapse-content">
            <p>
              The neat thing about most Internet promotion and social networks
              is that they allow book authors to interact with the world while
              remaining at their desk.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Srvices;
