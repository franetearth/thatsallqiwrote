import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl mb-8">I'm a passionate developer creating amazing web experiences</p>
        <div className="space-x-4">
          <Link
            href="/links"
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            My Links
          </Link>
          <Link
            href="#about"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            About Me
          </Link>
        </div>
      </div>
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Hello! I'm [Your Name], a passionate web developer with expertise in React, Next.js, and modern frontend
              technologies. I love creating responsive and user-friendly web applications that solve real-world
              problems.
            </p>
            <p className="text-lg mb-4">
              With [X] years of experience in the industry, I've worked on a variety of projects ranging from small
              business websites to large-scale enterprise applications. My goal is to continue learning and growing as a
              developer while delivering high-quality solutions to my clients and employers.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me [your hobbies or interests, e.g., hiking in the mountains,
              experimenting with new recipes in the kitchen, or contributing to open-source projects].
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
