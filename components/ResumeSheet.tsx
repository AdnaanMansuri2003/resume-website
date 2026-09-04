import {
  education,
  experience,
  profile,
  projects,
  skills,
  type Project,
} from "@/lib/data";

/**
 * Chrome's --print-to-pdf only carries http(s) and mailto hrefs through as PDF
 * link annotations; a `tel:` href is dropped entirely, so the phone number
 * would be dead text in the PDF.
 *
 * When rendered for PDF the phone therefore gets a same-length mailto
 * placeholder, which scripts/generate-resume-pdf.mjs swaps back to the real
 * tel: URI in the output bytes. Both strings are 16 characters, so the swap is
 * byte-for-byte and leaves the PDF xref offsets valid. The script fails loudly
 * if the placeholder ever goes missing — keep the two in sync.
 */
export const TEL_PDF_PLACEHOLDER = "mailto:m@mail.co";

/**
 * "full" is the two-page résumé; "short" is the one-page cut for career fairs
 * and cold outreach. Both read the same lib/data.ts so they cannot drift.
 */
export type ResumeVariant = "full" | "short";

const stripProtocol = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="r-side-heading">{children}</h2>;
}

function MainHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="r-main-heading">{children}</h2>;
}

/** Flagship keeps three bullets on the one-pager; everything else keeps one. */
const shortBulletCount = (project: Project) => (project.flagship ? 3 : 1);

function EntryHead({
  title,
  role,
  period,
}: {
  title: string;
  role: string;
  period: string;
}) {
  return (
    <div className="r-entry-head">
      <h3>
        {title}
        <span className="r-entry-role"> | {role}</span>
      </h3>
      <span className="r-meta">{period}</span>
    </div>
  );
}

export default function ResumeSheet({
  variant,
  forPdf,
}: {
  variant: ResumeVariant;
  forPdf: boolean;
}) {
  const short = variant === "short";
  const phoneHref = forPdf
    ? TEL_PDF_PLACEHOLDER
    : `tel:${profile.phoneHref}`;

  const work = experience.filter((item) => item.type === "work");
  const internships = experience.filter((item) => item.type === "internship");
  const schools = short
    ? education.filter((entry) => !entry.omitFromShort)
    : education;

  // On the one-pager only the featured projects get their own block; the rest
  // collapse into a single "also built" line so the links still travel.
  const mainProjects = short
    ? projects.filter((project) => project.featured)
    : projects;
  const alsoBuilt = short
    ? projects.filter((project) => !project.featured)
    : [];

  return (
    <div className={`resume-root${short ? " r-compact" : ""}`}>
      <article className="r-sheet">
        <header className="r-header">
          <h1>{profile.name}</h1>
          <p className="r-role">{profile.role}</p>
          <p className="r-contact">
            {profile.location}
            <span className="r-sep">|</span>
            <a className="r-contact-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <span className="r-sep">|</span>
            <a className="r-contact-link" href={phoneHref}>
              {profile.phone}
            </a>
            <span className="r-sep">|</span>
            <a className="r-contact-link" href={profile.linkedin}>
              LinkedIn
            </a>
            <span className="r-sep">|</span>
            <a className="r-contact-link" href={profile.github}>
              GitHub
            </a>
          </p>
        </header>

        <div className="r-body">
          <aside className="r-side">
            <section>
              <SidebarHeading>Education</SidebarHeading>
              {schools.map((entry) => (
                <div key={entry.school} className="r-side-block">
                  <h3>{entry.school}</h3>
                  <p className="r-strong">{entry.credential}</p>
                  <p>{entry.detail}</p>
                  <p className="r-meta">
                    {entry.period}
                    {entry.result ? ` | ${entry.result}` : ""}
                  </p>
                  <p className="r-meta">{entry.location}</p>
                </div>
              ))}
            </section>

            <section>
              <SidebarHeading>Links</SidebarHeading>
              <div className="r-side-block">
                <p>
                  <span className="r-strong">Portfolio:</span>{" "}
                  <a href={profile.portfolio}>
                    {stripProtocol(profile.portfolio)}
                  </a>
                </p>
                <p>
                  <span className="r-strong">GitHub:</span>{" "}
                  <a href={profile.github}>{stripProtocol(profile.github)}</a>
                </p>
                <p>
                  <span className="r-strong">LinkedIn:</span>{" "}
                  <a href={profile.linkedin}>
                    {stripProtocol(profile.linkedin)}
                  </a>
                </p>
                <p>
                  <span className="r-strong">Email:</span>{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
            </section>

            <section>
              <SidebarHeading>Skills</SidebarHeading>
              {skills.map((group) => (
                <div key={group.title} className="r-side-block">
                  <h3>{group.title}</h3>
                  <p>
                    {group.items
                      .map((item) =>
                        item.level === "Advanced"
                          ? `${item.name} (Advanced)`
                          : item.name,
                      )
                      .join(" · ")}
                  </p>
                </div>
              ))}
            </section>

            <section className="r-side-availability">
              <SidebarHeading>Availability</SidebarHeading>
              <div className="r-side-block">
                <p>
                  {short
                    ? "Canadian study permit. Open to Co-op, internship and part-time roles; full-time over winter and summer breaks."
                    : "Valid Canadian study permit. Open to Co-op, internship and part-time roles during the term, and full-time over the winter and summer breaks."}
                </p>
              </div>
            </section>
          </aside>

          <main className="r-main">
            <section>
              <MainHeading>Summary</MainHeading>
              <p className="r-summary">
                {short ? profile.shortSummary : profile.summary}
              </p>
            </section>

            <section>
              <MainHeading>Experience</MainHeading>
              {work.map((item) => (
                <div key={item.company + item.role} className="r-entry">
                  <EntryHead
                    title={item.company}
                    role={item.role}
                    period={item.period}
                  />
                  <p className="r-meta r-entry-loc">
                    {item.location}
                    {item.link ? (
                      <>
                        <span className="r-sep">|</span>
                        <a href={item.link.href}>
                          {stripProtocol(item.link.href)}
                        </a>
                      </>
                    ) : null}
                  </p>
                  <ul>
                    {(short
                      ? (item.shortBullets ??
                        (item.resumeBullets ?? item.bullets).slice(0, 2))
                      : (item.resumeBullets ?? item.bullets)
                    ).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <MainHeading>Projects</MainHeading>
              {mainProjects.map((project) => {
                const count = short ? shortBulletCount(project) : 2;
                const bullets = (
                  project.resumeBullets ?? project.bullets
                ).slice(0, count);

                return (
                  <div key={project.name} className="r-entry">
                    <EntryHead
                      title={project.name}
                      role={project.subtitle}
                      period={project.period}
                    />
                    {project.links?.length ? (
                      <p className="r-meta r-entry-loc">
                        {project.links.map((link) => (
                          <a key={link.href} href={link.href}>
                            {stripProtocol(link.href)}
                          </a>
                        ))}
                      </p>
                    ) : null}
                    <ul>
                      {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <p className="r-stack">
                      <span className="r-strong">Stack:</span>{" "}
                      {project.tags.slice(0, short ? 8 : 12).join(", ")}
                    </p>
                  </div>
                );
              })}

              {alsoBuilt.length ? (
                <p className="r-also-built">
                  <span className="r-strong">Also built:</span>{" "}
                  {alsoBuilt.map((project, i) => (
                    <span key={project.name}>
                      {i > 0 ? " · " : ""}
                      {project.name} —{" "}
                      {/* Subtitles can carry a trailing " — Role"; the
                          one-liner only wants the descriptor. */}
                      {project.subtitle.split(" — ")[0].toLowerCase()}
                      {project.links?.[0] ? (
                        <>
                          {" ("}
                          <a href={project.links[0].href}>
                            {stripProtocol(project.links[0].href)}
                          </a>
                          {")"}
                        </>
                      ) : null}
                    </span>
                  ))}
                </p>
              ) : null}
            </section>

            <section>
              <MainHeading>Internships</MainHeading>
              {internships.map((item) => (
                <div key={item.company} className="r-entry">
                  <EntryHead
                    title={item.company}
                    role={item.role}
                    period={item.period}
                  />
                  {short ? null : (
                    <>
                      <p className="r-meta r-entry-loc">{item.location}</p>
                      <ul>
                        {(item.resumeBullets ?? item.bullets)
                          .slice(0, 2)
                          .map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </section>
          </main>
        </div>
      </article>
    </div>
  );
}
