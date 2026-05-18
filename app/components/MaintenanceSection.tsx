import Image from "next/image";

export function MaintenanceSection() {
  return (
    <section className="bg-gray-200 py-10 dark:bg-background">
      <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <h2 className="text-[48px] font-extrabold  text-black">
            Preventive Maintenance Plans
          </h2>
          <h4 className="mt-3 font-display text-[32px] font-extrabold leading-[1.02] text-black dark:text-foreground sm:text-[22px]">
            Keep your systems running at peak performance
          </h4>
          <p className="mt-5 max-w-xl text-[22px] leading-7 text-black/70 dark:text-foreground/70">
            Keep your surveillance and access control systems operating at peak
            performance with scheduled maintenance services.
          </p>

          <div className="mt-6 grid gap-3">
            {[
              "Camera Cleaning",
              "Recording System Checks",
              "Remote Access Testing",
              "Access Control Inspections",
              "Troubleshooting Support",
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

          <p className="mt-6 text-[15px] font-semibold leading-7 text-black/80 dark:text-foreground/80">
            Monthly, bi-monthly, and quarterly service plans available.
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="relative overflow-hidden rounded-[24px] bg-surface shadow-soft ring-1 ring-black/10 dark:bg-surface">
            <Image
              src="/image (17).png"
              alt="Technician performing preventive maintenance for surveillance and access control systems"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

