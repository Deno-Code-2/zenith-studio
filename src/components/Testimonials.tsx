
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
    location: string  // Added location field
    results?: string  // Added optional results field
}

const testimonials: Testimonial[] = [
    {
        name: 'Abhinav Singh',
        role: 'CallKaro AI - CEO',
        image: '/images/callkaro_ai_logo.jpeg',
        quote: 'One thing that truly stood out while working with Syed is his incredible speed. He has a rare ability to spin up clean, functional landing pages in no time. Whether it's a quick iteration or a fresh build, you can always count on Zenith Studio to deliver with speed and precision.',
        location: 'Bangalore, India',
        results: 'Reduced development time by 40% and increased user engagement by 25%'
    },
    {
        name: 'Ayo Remi',
        role: 'Software Developer',
        image: '/images/blacklogo.svg',
        quote: 'Working with Syed was seamless. I came with just an idea, and he turned it into a sleek, high-performing eCommerce site. He handled everything—from design to development—while keeping me in the loop. Highly recommend him and the Zenith Studio team for turning vague visions into real products.',
        location: 'California, USA',
        results: 'Launched MVP in just 3 weeks with 95% positive user feedback'
    },
    {
        name: 'Syed Ifranulla',
        role: 'Content Creator',
        image: '',
        quote: 'I wanted a platform that captured my journey and love for Urdu — Syed delivered exactly that. The portfolio feels personal, professional, and culturally respectful. Grateful for the care and creativity he brought to the entire process.',
        location: 'Dubai, UAE',
        results: 'Audience growth of 35% since website launch'
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-title text-3xl font-semibold font-syne">Loved by the <span className="text-green-600">Community</span></h2>
                        <p className="text-body mt-4">Hear what our clients from around the world have to say</p>
                    </motion.div>
                    <div className="mt-10 grid gap-4 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-4 *:border-none *:shadow-none">
                                {chunk.map(({ name, role, quote, image, location, results }, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="hover:shadow-md transition-shadow duration-300">
                                            <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                                <Avatar className="size-12">
                                                    <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                    <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                                </Avatar>

                                                <div>
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="font-medium">{name}</h3>
                                                        <Badge variant="outline" className="text-xs px-2 py-0 ml-2">
                                                            {location}
                                                        </Badge>
                                                    </div>

                                                    <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                    <blockquote className="mt-3">
                                                        <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                    </blockquote>
                                                    
                                                    {results && (
                                                        <div className="mt-3 text-green-600 text-sm font-medium">
                                                            ✓ {results}
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
