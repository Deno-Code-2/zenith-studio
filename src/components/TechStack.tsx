import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                {/* Moved heading to top center */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-black font-syne">
                    The Tech <span className="text-custom-orange">stack</span> We Use <span className="text-custom-orange">For You.</span>
                    </h2>
                </div>

                <div className="relative py-6">
                    <InfiniteSlider
                        speedOnHover={20}
                        speed={40}
                        gap={112}>
                        {/* Frontend Technologies */}
                        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit dark:invert"
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                alt="React Logo"
                            />
                        </a>

                        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit dark:invert"
                                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                                alt="Next.js Logo"
                            />
                        </a>

                        {/* JavaScript Ecosystem */}
                        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                                alt="Vite Logo"
                            />
                        </a>

                        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                alt="Tailwind CSS Logo"
                            />
                        </a>

                        <a href="https://webpack.js.org" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg"
                                alt="Webpack Logo"
                            />
                        </a>

                        {/* Cloud Providers */}
                        <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                                alt="AWS Logo"
                            />
                        </a>

                        <a href="https://azure.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                                alt="Azure Logo"
                            />
                        </a>

                        <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit"
                                src="/images/supabase.png"
                                alt="Supabase Logo"
                            />
                        </a>

                        {/* Backend Technologies */}
                        <a href="https://www.nginx.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg"
                                alt="NGINX Logo"
                            />
                        </a>

                        <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
                                alt="Flutter Logo"
                            />
                        </a>

                        <a href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
                                alt="Django Logo"
                            />
                        </a>

                        {/* Development Tools */}
                        <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/images/gitlab-logo.jpg"
                                alt="GitLab Logo"
                            />
                        </a>

                        <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-11 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
                                alt="Postman Logo"
                            />
                        </a>

                        <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
                                alt="MySQL Logo"
                            />
                        </a>

                        <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png"
                                alt="WordPress Logo"
                            />
                        </a>

                        {/* AI & Payments */}
                        <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/openai.svg"
                                alt="OpenAI Logo"
                            />
                        </a>

                        <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                                alt="VS Code Logo"
                            />
                        </a>

                        <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-9 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                alt="PayPal Logo"
                            />
                        </a>

                        {/* Core Web Technologies */}
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                                alt="HTML5 Logo"
                            />
                        </a>

                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                                alt="CSS3 Logo"
                            />
                        </a>

                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                                alt="JavaScript Logo"
                            />
                        </a>

                        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                                alt="TypeScript Logo"
                            />
                        </a>
                    </InfiniteSlider>

                    <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                    <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                    <ProgressiveBlur
                        className="pointer-events-none absolute left-0 top-0 h-full w-20"
                        direction="left"
                        blurIntensity={1}
                    />
                    <ProgressiveBlur
                        className="pointer-events-none absolute right-0 top-0 h-full w-20"
                        direction="right"
                        blurIntensity={1}
                    />
                </div>
            </div>
        </section>
    )
}