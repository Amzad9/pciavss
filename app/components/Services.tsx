import Image from "next/image";
import { BadgeCheck, Handshake, Medal, Users } from "lucide-react";
import { homeUnsplash } from "../lib/homeImages";

export function Services() {
  return (
    <>
      <section className="bg-white py-12 dark:bg-background">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[24px] bg-surface shadow-soft ring-1 ring-black/10 dark:bg-surface">
              <Image
                src={homeUnsplash.teamCommitment}
                alt="Security and technology professionals collaborating as a team"
                width={1400}
                height={800}
                className="h-auto w-full object-cover"
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute left-6 top-6 rounded-xl bg-black/65 px-4 py-3 ring-1 ring-white/15">
                <div className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-brand-gold-500">
                  2,000+
                </div>
                <div className="text-[20px] font-extrabold leading-tight text-white">
                  Businesses
                  <br />
                  Secured
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="font-display text-[34px] font-extrabold leading-[0.95] text-black dark:text-foreground">
              TEAM COMMITMENT
            </div>
            <div className="mt-2 text-[18px] font-bold uppercase tracking-wide text-black/70 dark:text-foreground/75">
              Client commitment:
              <br />
              Our service philosophy
            </div>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Based out of Austin, our security professionals are dedicated to
              quality installs, clear communication, and systems that are
              configured for your space.
            </p>

            <div className="mt-7 grid gap-4">
              {[
                {
                  title: "Excellence reputation",
                  body: "Proven expertise in security solutions.",
                  Icon: Medal,
                },
                {
                  title: "Partnership focused",
                  body: "We build relationships for long-term security.",
                  Icon: Handshake,
                },
                {
                  title: "Commitment guided",
                  body: "Professional installation and management.",
                  Icon: BadgeCheck,
                },
                {
                  title: "Team of specialists",
                  body: "Security design and support staff.",
                  Icon: Users,
                },
              ].map(({ title, body, Icon }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gold-500/15 ring-1 ring-brand-gold-500/25">
                    <Icon className="h-5 w-5 text-brand-gold-600" />
                  </div>
                  <div>
                    <div className="text-[14px] font-extrabold uppercase tracking-[0.14em] text-black dark:text-foreground">
                      {title}
                    </div>
                    <div className="mt-1 text-[14px] leading-6 text-muted">
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
