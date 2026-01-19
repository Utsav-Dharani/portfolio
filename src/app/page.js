import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import SocialRail from "@/components/SocialRail";
import SkillChips from "@/components/SkillChips";
import ExperiencePreview from "@/components/ExperiencePreview";
import PublicationsPreview from "@/components/PublicationsPreview";
import CertificatesPreviewCarousel from "@/components/CertificatesPreviewCarousel";
import Timeline from "@/components/Timeline";
import ProjectRow from "@/components/ProjectRow";
import ProjectsPreview from "@/components/ProjectsPreview";
import { getSite, getProjects, getExperience, getPublications, getCertificates } from "@/lib/content";

export default function HomePage() {
  const site = getSite();
  const projects = getProjects();
  const experience = getExperience();
  const publications = getPublications();
  const certificates = getCertificates();

  return (
    <main>
      <SocialRail links={site.links} />

      {/* HERO — Full screen cover */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container w-full">
          <div className="w-full text-center">

            <div className="mt-10">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                Hi, I&apos;m{" "}
                <span style={{ color: "rgb(var(--accent))" }}>
                  {site.firstName} {site.lastName}
                </span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-semibold mt-3">
                {site.headline}
              </h2>

              {/* Optional: small scroll hint */}
              <div className="mt-10">
                <Link className="btn-outline" href="/#about">
                  Scroll
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="sectionAlt">
  <div className="container">
    <SectionHeader title="About Me" />

    <div className="mt-8 grid gap-5 lg:grid-cols-2 items-start">
      {/* LEFT: Overview */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold">Overview</h3>

        {/* tighter text */}
        <div className="mt-3 space-y-2 text-slate-700 leading-6 text-[15px]">
          {site.about.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* RIGHT: Skills */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold">My Skills</h3>

        <div className="mt-3">
          <SkillChips groups={site.skills} />
        </div>
      </div>
    </div>
  </div>
</section>




      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <SectionHeader title="Experience" subtitle="" />

          {/* Preview only */}
          <ExperiencePreview items={experience} />

        
        </div>
      </section>



      {/* PROJECTS */}
      <section id="projects" className="sectionAlt">
        <div className="container">
          <SectionHeader
            title="Projects"
          />

          {/* preview only (no ProjectRow details) */}
          <ProjectsPreview items={projects} />
        </div>
      </section>


      {/* PUBLICATIONS (Preview only) */}
{/* PUBLICATIONS (Home preview) */}
<section id="publications" className="section">
  <div className="container">
    <SectionHeader title="Publications" subtitle="" />

    <div className="mt-6 grid gap-4">
      {publications.slice(0, 1).map((pub) => (
        <Link
          key={pub.title}
          href="/publications"
          className="card p-6 block hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold leading-snug">{pub.title}</h3>
          <p className="text-sm text-slate-600 mt-1">
            {pub.venue} • {pub.year}
          </p>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* CERTIFICATES */}
      <section id="certificates" className="sectionAlt">
        <div className="container">
          <SectionHeader title="Certificates" subtitle="" />

          <div className="mt-10">
            <CertificatesPreviewCarousel items={certificates} />
          </div>
        </div>
      </section>


      {/* RESUME SECTION */}
<section className="section">
  <div className="container">
    <div className="card p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Resume</h2>
          <p className="muted mt-2">
            One-page PDF with experience, projects, and skills.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Link className="btn" href="/resume">
            Open Resume
          </Link>
          <a className="btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="sectionAlt">
        <div className="container">
          <SectionHeader title="Contact Me" subtitle="" />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="card p-8">
              <h3 className="text-xl font-semibold">Let’s connect</h3>
              <p className="muted mt-2">
                Feel free to reach out for Internships, Full-time Job opportunities, Collaborations, or Project questions.
              </p>

              <div className="mt-6 space-y-2 text-slate-700">
                <p>
                  <span className="text-slate-500">Email:</span>{" "}
                  <a className="link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">Phone:</span> {site.phone}
                </p>
                {site.links
                  .filter((l) => !l.href.startsWith("mailto:"))
                  .map((l) => (
                    <p key={l.href}>
                      <span className="text-slate-500">{l.label}:</span>{" "}
                      <a className="link" href={l.href} target="_blank" rel="noreferrer">
                        {l.href}
                      </a>
                    </p>
                  ))}
              </div>
            </div>

            <form
              className="card p-8 space-y-4"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label className="label">Your name</label>
                <input className="input" name="name" placeholder="Your name" />
              </div>
              <div>
                <label className="label">Your email</label>
                <input className="input" name="email" placeholder="you@example.com" />
              </div>
              <div>
                <label className="label">Message</label>
                <textarea className="input min-h-[140px]" name="message" placeholder="Write your message..." />
              </div>
              <button className="btn" type="submit">
                Send
              </button>
              
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
