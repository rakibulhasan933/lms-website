import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-6 bg-white dark:bg-gray-800">
        <Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
          LMS
        </Link>
        <nav className="flex gap-4">
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            Courses
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            About
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold text-center mb-4">Discover Your Next Course</h1>
            <div className="flex justify-center">
              <Input className="w-full max-w-lg" placeholder="Search for courses..." type="search" />
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <Image
                    alt="Course"
                    className="w-full h-48 object-cover rounded-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-lg font-bold">Web Development</h3>
                  <p className="text-gray-500 dark:text-gray-400">Learn the basics of web development.</p>
                  <Button>Enroll Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <Image
                    alt="Course"
                    className="w-full h-48 object-cover rounded-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-lg font-bold">Data Science</h3>
                  <p className="text-gray-500 dark:text-gray-400">Dive into the world of data science.</p>
                  <Button>Enroll Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <Image
                    alt="Course"
                    className="w-full h-48 object-cover rounded-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-lg font-bold">Graphic Design</h3>
                  <p className="text-gray-500 dark:text-gray-400">Master the art of graphic design.</p>
                  <Button>Enroll Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">Student Testimonials</h2>
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4">
                      <Avatar>
                        <AvatarImage alt="Student" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-center">
                        <p className="text-lg font-semibold">
                          This platform has been a game changer for my learning journey.
                        </p>
                        <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400">- Jared Palmer</footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardContent className="flex flex-col items-center space-y-4">
                      <Avatar>
                        <AvatarImage alt="Student" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-center">
                        <p className="text-lg font-semibold">The courses are well-structured and easy to follow.</p>
                        <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400">- Jane Doe</footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">Trending Topics</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">Data Science</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Web Development</Badge>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between p-6 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
        <form className="flex items-center gap-2">
          <Input className="w-48" placeholder="Enter your email" type="email" />
          <Button>Subscribe</Button>
        </form>
      </footer>
    </div>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
