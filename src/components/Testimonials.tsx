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
        quote: 'Working with Syed was an incredible experience. I approached him with the idea for Cloth Village, but without a fixed design or detailed plan. I simply told him to trust his instincts—and I’m glad I did. He took full ownership of the project, from UI/UX to development, and delivered a sleek, functional, and fast eCommerce platform that exceeded my expectations. His ability to understand the brand, make design decisions independently, and still keep me in the loop was impressive. Highly recommend him and full zenith studio team if you are looking for someone who can bring your vision to life—even when it is not fully defined.',
    },
    {
        name: 'Syed Ifranulla',
        role: '',
        image: '',
        quote: 'I wanted a platform to represent my journey, services, and dedication to promoting Urdu across India. Syed understood this vision deeply and created a portfolio that beautifully reflects my work and values. The design feels personal yet professional, and it allows me to connect with students and communities in a meaningful way. He made the entire process smooth and respectful of the language and culture I cherish. I’m truly grateful for the care and creativity he brought into building this site',
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
