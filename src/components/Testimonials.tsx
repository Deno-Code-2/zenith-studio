import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Abhinav Singh',
        role: 'CallKaro AI - CEO',
        image: '/images/callkaro_ai_logo.jpeg',
        quote: 'One thing that truly stood out while working with Syed is his incredible speed. He has a rare ability to spin up clean, functional landing pages in no time. Whether it’s a quick iteration or a fresh build, you can always count on Zenith Studio to deliver with speed and precision.',
    },
    {
        name: 'Ayo Remi',
        role: 'Software Developer',
        image: '/images/blacklogo.svg',
        quote: 'Working with Syed was seamless. I came with just an idea, and he turned it into a sleek, high-performing eCommerce site. He handled everything—from design to development—while keeping me in the loop. Highly recommend him and the Zenith Studio team for turning vague visions into real products.',
    },
    {
        name: 'Syed Ifranulla',
        role: '',
        image: '',
        quote: 'I wanted a platform that captured my journey and love for Urdu — Syed delivered exactly that. The portfolio feels personal, professional, and culturally respectful. Grateful for the care and creativity he brought to the entire process.',
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
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Loved by the Community</h2>
                        {/*<p className="text-body mt-6">Harum quae dolore orrupti aut temporibus ariatur.</p>*/}
                    </div>
                    <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3 *:border-none *:shadow-none">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
