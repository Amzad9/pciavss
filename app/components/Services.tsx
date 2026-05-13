import Image from "next/image";
import { BadgeCheck, Handshake, Medal, Users } from "lucide-react";

export function Services() {
  return (
    <>
      <section className="bg-white py-5 dark:bg-background">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[24px] bg-surface shadow-soft ring-1 ring-black/10 dark:bg-surface">
              <Image
                src="/assets/AVS.png"
                alt="AVSS security services"
                width={1400}
                height={800}
                className="h-auto w-full object-cover"
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-display text-[34px] font-extrabold leading-[0.95] text-black dark:text-foreground">
              Why Businesses Choose AVSS
            </h2>
            <div className="mt-7 grid gap-4">
              {[
                {
                  title: "Proven experience securing commercial properties",
                  Icon: Medal,
                },
                {
                  title: "Fast, reliable installations",
                  Icon: Handshake,
                },
                {
                  title: "Clear communication from start to finish",
                  Icon: BadgeCheck,
                },
                {
                  title: "Long-term support & system maintenance",
                  Icon: Users,
                },
              ].map(({ title, Icon }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gold-500/15 ring-1 ring-brand-gold-500/25">
                    <Icon className="h-5 w-5 text-brand-gold-600" />
                  </div>
                  <div>
                    <div className="text-[14px] font-extrabold uppercase tracking-[0.14em] text-black dark:text-foreground">
                      {title}
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
