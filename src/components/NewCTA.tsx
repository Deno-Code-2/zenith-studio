
import { Link } from "react-router-dom";

export default function NewCTA() {
  return (
    <section className="mx-auto mb-24 flex w-full max-w-7xl flex-col items-center justify-center">
      <div className="w-full">
        <div className="relative z-20 h-[400px] w-full overflow-hidden rounded-xl border border-border bg-green-800 shadow-xl md:h-[400px]">
          <img
            alt="Agent CTA Background"
            className="absolute inset-0 object-cover object-right md:object-center h-full w-full"
            src="/cta-bg.webp"
          />
          <div className="absolute inset-0 -top-32 flex flex-col items-center justify-center md:-top-40">
            <h1 className="max-w-xs bg-gradient-to-r from-zinc-200/60 via-zinc-50 to-zinc-200/60 bg-clip-text text-center text-4xl font-medium tracking-tighter text-transparent md:max-w-xl md:text-7xl">
              Build. Customize. Deploy Quickly.
            </h1>
            <div className="absolute bottom-16 flex flex-col items-center justify-center gap-2">
              <Link
                className="flex h-10 w-fit items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black shadow-md"
                to="/#contact"
              >
                Start with Zenith Studio Today
              </Link>
              <span className="text-sm text-white">
                Your dream, our code — launched in days.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
