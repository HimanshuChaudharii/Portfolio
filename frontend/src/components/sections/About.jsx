import AnimatedSection from '../ui/AnimatedSection';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Content */}
          <div className="lg:w-1/2 transition-all duration-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-brandAccent">Me</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              I am Himanshu Chaudhari, a Computer Science and Engineering undergraduate at Lovely Professional University with a strong passion for building intelligent, data-driven, and scalable software solutions. My core interests include Artificial Intelligence, Data Analytics, and Backend Development.
              <br /><br />
              I have hands-on experience with Java, Python, C++, C, and SQL, along with data analysis tools like Pandas, NumPy, Matplotlib, and Seaborn. My strong foundation in Data Structures and Algorithms helps me write efficient and optimized code.
              <br /><br />
              I am a fast learner, problem solver, and team player who is always eager to explore new technologies and build impactful solutions.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="/Himanshu new cv 2025.pdf"
                download
                className="px-6 py-3 bg-brandAccent text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            

          {/* Right Image */}
          <div className="lg:w-1/2 relative transition-all duration-800">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
              <div className="w-full aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden glass p-2 group shadow-2xl transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none group-hover:border-brandAccent/40 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brandAccent/30 to-transparent opacity-60 group-hover:opacity-0 transition duration-500 z-10"></div>
                <img
                  src="/image1.jpeg"
                  alt="Himanshu Chaudhari"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Tilt>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;