import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'

const HeroSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Delhi University <span className="text-primary">Study Resources</span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Access previous year question papers, solved answers, digital books,
                            and study materials for all courses in one place.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full max-w-md space-y-2">
                        <div className="relative">
                            <Input
                                className="h-12 w-full rounded-lg border-gray-300 pl-4 pr-12 shadow-sm dark:border-gray-700"
                                placeholder="Search for courses, subjects, or materials..."
                                type="search"
                            />
                            <Button className="absolute right-2 top-1/2 -translate-y-1/2 transform" size="sm">
                                Search
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Try &quot;B.A. Program English PYQs&quot; or &quot;B.Com 2nd Year Notes&quot;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">PYQs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Previous year question papers with solutions
                                </CardDescription>
                                <Button variant="link" className="px-0 mt-2" asChild>
                                    <Link href="/pyqs">Browse all</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">Notes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Comprehensive subject notes and summaries
                                </CardDescription>
                                <Button variant="link" className="px-0 mt-2" asChild>
                                    <Link href="/notes">Browse all</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">Books</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Digital textbooks and reference materials
                                </CardDescription>
                                <Button variant="link" className="px-0 mt-2" asChild>
                                    <Link href="/books">Browse all</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">Courses</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Resources organized by course and year
                                </CardDescription>
                                <Button variant="link" className="px-0 mt-2" asChild>
                                    <Link href="/courses">Browse all</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection