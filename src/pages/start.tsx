export default function Start() {
  const Hero = () => {
    return (
      <section className="bg-black text-white p-20">
        <h3 className="text-5xl">
          Hello Master the Power of React Beginner Course
        </h3>
        <h4 className="font-bold text-xl">
          Our React Course is your gateway to becoming a proficient React
          developer. Learn to build dynamic and interactive web applications
          using one of the most popular JavaScript libraries in the industry.
        </h4>
        <div className="flex justify-center">
          <button className="justify-center bg-white text-black p-2 rounded-lg">
            Enroll Today
          </button>
        </div>
      </section>
    );
  };
  const ThreeCols = () => {
    return (
      <section className="grid grid-cols-2 mt-10 p-5">
        <div className="pr-4">
          <img
            className="rounded-lg w-40"
            src="https://picsum.photos/id/237/200/300"
          />
        </div>
        <div className="p-2 items-center">
          <div className="text-4xl mt-2 mb-2">Online Course</div>
          <div className="text-gray-500">
            In this comprehensive React Course, you'll delve into the world of
            React, from its fundamentals to advanced techniques. Our expert
            instructors will guide you through every step.
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <h4 className="font-bold text-xl">Hands-On Projects</h4>
              <div>
                Apply your knowledge to real-world projects, building a robust
                portfolio.
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">Career Opportunities</h4>
              <div>
                React developers are in high demand and this course is designed
                for you!
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">Flexible Learning</h4>
              <div>
                Access course materials whenever it suits your schedule.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const TwoCols = () => {
    return (
      <section className="text-center">
        <OneCols
          title="Why choose our course?"
          subtitle="Discover the unique advantages, benefits, and standout features that
          set our course apart from the rest."
        />
        <div className="pt-20 pb-20 mx-auto px-4">
          <div className="flex-row flex grid-cols-2 p-2">
            <div className="w-half p-5 flex h-52 rounded-lg bg-gray-700 items-center text-center place-items-center text-white">
              <div>
                <h3 className="w-full text-center text-5xl m-2">
                  Expert Instructors
                </h3>
                <h4>
                  Learn from industry professionals with years of hands-on
                  experience in React development.
                </h4>
              </div>
            </div>

            <div className="flex-row text-left p-4 ">
              <div>
                <h4 className="font-bold text-xl">React Fundamentals</h4>
                <div>
                  Start with the basics. Understand React's core concepts,
                  component structure, and the virtual DOM.
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl">State and Props</h4>
                <div>
                  Learn how to manage component state and utilize props to pass
                  data between components.
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl">Component Lifecycle</h4>
                <div>
                  Dive into the lifecycle of React components and harness its
                  power to control your application's behavior.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse flex grid-cols-2 p-2">
            <div className="w-half p-5 flex rounded-lg h-52 bg-gray-700 items-center text-center place-items-center text-white">
              <div>
                <h3 className="w-full text-center text-5xl m-2">
                  Expert Instructors
                </h3>
                <h4>
                  Learn from industry professionals with years of hands-on
                  experience in React development.
                </h4>
              </div>
            </div>

            <div className="flex-row text-left p-4 ">
              <div>
                <h4 className="font-bold text-xl">Routing with React Router</h4>
                <div>
                  Create single-page applications (SPAs) with seamless
                  navigation using React Router.
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl">Handling Forms</h4>
                <div>
                  Master form handling in React and manage user input
                  effectively.
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl">State Management</h4>
                <div>
                  Explore state management options, including local component
                  state and global state using Redux or Context API.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const OneCols = ({ title, subtitle }) => {
    return (
      <div className="text-center p-20 w-full">
        <h3 className="text-4xl font-bold text-gray-600 m-4 ">{title}</h3>
        <h4 className="text-gray-500 text-xl w-half">{subtitle}</h4>
      </div>
    );
  };
  const Cards = () => {
    const carditems = [
      {
        title: "Future of Web Development: Trends and Innovations",
        description:
          "Discover the latest trends and innovations shaping the future of web development.",
      },
      {
        title: "WebDev Pro Code-a-Thon: Build a Responsive Website",
        description:
          "Participants will have 48 hours to create a responsive website from scratch using HTML, CSS, and JavaScript.",
      },
      {
        title: "Ask the Experts: Frontend Web Development",
        description:
          "Join our live Q&A session with our experienced instructors. Get answers to your queries, insights into best practices.",
      },
      {
        title: "Web Accessibility: Building Inclusive Websites",
        description:
          "Industry experts will discuss the importance of inclusive design and share strategies for creating websites.",
      },
    ];
    return (
      <section className="grid sx:grid-cols-1 md:grid-cols-4 gap-4 pt-20 pl-4 pr-4">
        {carditems &&
          carditems.map((item) => {
            return (
              <div>
                <div>
                  <img
                    className="rounded-lg border shadow-lg w-full h-52"
                    src="https://picsum.photos/seed/picsum/200/300"
                  />
                </div>
                <div className="pt-2">
                  <div className="font-bold text-xl">{item.title}</div>
                  <div>{item.description}</div>
                </div>
                <button className="uppercase bg-black pt-2 pb-2 pl-4 pr-4 text-sm text-white border rounded-lg">
                  Register for Free
                </button>
              </div>
            );
          })}
      </section>
    );
  };
  const MemberShipCard = () => {
    return (
      <section className="grid grid-cols-2 w-full container justify-end p-4 gap-6 mx-auto border-bottom-2 border rounded-lg">
        <div>
          <h3 className="font-bold text-3xl text-gray-500">
            React Course Membership
          </h3>
          <h5>
            Our Course Package offers full access to the React Course, including
            all course materials, assignments, and projects.
          </h5>
          <div>
            <div className="font-bold text-xl text-gray-500 mt-2 mb-2 ">
              What is included
            </div>
            <div className="grid grid-cols-2">
              <div>25 Classes </div>
              <div>200 Learning hours </div>
              <div>Expert-led instruction </div>
              <div>Certificate of completion </div>
            </div>
          </div>
        </div>
        <div className="font-bold justify-items-end items-right">
          <div>Pay once,own it forever </div>
          <div>$399</div>
          <div>
            <button className="bg-black text-white border rounded-lg pt-2 pb-2 pl-4 pr-4">
              Get Access
            </button>
          </div>
          <div>Get a free sample (20MB)</div>
        </div>
      </section>
    );
  };
  return (
    <div>
      <Hero />
      <ThreeCols />
      <TwoCols />
      <OneCols
        title="What Students Say"
        subtitle=" Discover what our students have to say about our course!"
      />
      <OneCols
        title="Best no-tricks pricing"
        subtitle="If you are not satisfied, contact us within the first 30 days and we will send you a full refund."
      />
      <MemberShipCard />
      <OneCols
        title="Other Courses"
        subtitle="Looking to elevate your web development skills? Browse through 1,000+ web development courses and find the one that fits your needs."
      />
      <Cards />
    </div>
  );
}
