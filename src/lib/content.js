import site from "@/content/site.json";
import projects from "@/content/projects.json";
import experience from "@/content/experience.json";
import publications from "@/content/publications.json";
import certificates from "@/content/certificates.json";

export function getSite() { return site; }
export function getProjects() { return projects; }
export function getProject(slug) { return projects.find((p) => p.slug === slug); }
export function getExperience() { return experience; }
export function getPublications() { return publications; }
export function getCertificates() { return certificates; }
