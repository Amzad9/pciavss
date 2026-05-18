import Image from "next/image";
import { BadgeCheck, Handshake, Medal, Users } from "lucide-react";

export function Services() {
  return (
    <>
      <section className="bg-white py-10 dark:bg-background">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-[48px] font-extrabold   text-black">
              Protecting Businesses Across Orange County
            </h2>
            <h4 className="mt-3 font-display text-[20px] font-extrabold leading-[1.05] text-black dark:text-foreground sm:text-[20px]">
              Warehouses • Offices • Construction Sites • Manufacturing
              Facilities • Retail Properties
            </h4>

            <div className="mt-6 grid gap-3">
              {[
                "Security Cameras",
                "Access Control",
                "Remote Monitoring",
                "Preventive Maintenance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                 <span className="mt-[8px] inline-flex h-2 w-2 items-center justify-center rounded-full bg-brand-gold-600 text-brand-gold-600 ring-1 ring-brand-gold-500/25">
                  
                  </span>
                  <p className="text-[22px] font-semibold leading-6 text-black/85 dark:text-foreground/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-[18px] leading-7 text-black/70 dark:text-foreground/70">
            AVSS designs and installs professional commercial surveillance and access control systems built for reliability, visibility, and long-term protection
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[24px] bg-surface shadow-soft ring-1 ring-black/10 dark:bg-surface">
              <Image
                src="/70439 (1).jpg"
                alt="Commercial security cameras installed for businesses in Orange County"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

       
      </section>
      <section className="bg-gray-100 py-8">
      <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
          <div className="order-1 lg:order-2 lg:col-span-7">
            <h3 className="font-display text-[30px] font-extrabold leading-[0.98] text-black dark:text-foreground sm:text-[34px]">
              Why Businesses Choose AVSS
            </h3>
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
                  title: "Ongoing maintenance and support",
                  Icon: Users,
                },
              ].map(({ title, Icon }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gold-500/15 ring-1 ring-brand-gold-500/25">
                    <Icon className="h-5 w-5 text-brand-gold-600" />
                  </div>
                  <div className="text-[14px] font-extrabold uppercase tracking-[0.14em] text-black dark:text-foreground">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto  overflow-hidden rounded-[24px] bg-surface shadow-soft ring-1 ring-black/10 dark:bg-surface">
              <div className="relative h-[200px] sm:h-[300px]">
                <Image
                  src="/assets/AVS.png"
                  alt="AVSS security services"
                  fill
                  className="object-cover"
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
