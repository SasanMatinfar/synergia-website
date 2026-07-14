'use client';

import { useState } from 'react';
import {
  principalInvestigators,
  coordinationTeam,
  researchTeam,
  clinicalTeam,
  externalCollaborators,
} from '@/data/people';

function formatBioPreview(bio: string, maxLength = 220) {
  if (bio.length <= maxLength) {
    return bio;
  }

  const truncated = bio.slice(0, maxLength);
  const trimmedToWord = truncated.replace(/\s+\S*$/u, '');
  return trimmedToWord.replace(/(\.{3,}|…)+$/u, '').replace(/[\s,;:–—]+$/u, '').trim();
}

function TeamMemberCard({ member, showRole = true }: { member: (typeof principalInvestigators)[number]; showRole?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const preview = member.bio ? formatBioPreview(member.bio, 220) : '';
  const isLong = (member.bio?.length ?? 0) > 220;

  return (
    <div className="card p-6 hover:shadow-lg transition-shadow">
      {member.image ? (
        <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden">
          <img
            src={`/images/people/${member.image}?v=23062026o`}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{
              objectPosition: member.id === 'matinfar' ? '50% 20%' : '50% 50%',
              transform: member.id === 'matinfar' ? 'translateY(4%) scale(1.08)' : undefined,
            }}
          />
        </div>
      ) : (
        <div className="w-24 h-24 bg-gradient-to-br from-academic-blue to-academic-navy rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
          {member.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
      )}

      <h3 className="text-heading-sm font-bold text-academic-navy text-center mb-1">
        {member.website ? (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-academic-blue hover:text-academic-navy"
          >
            {member.name}
          </a>
        ) : (
          member.name
        )}
      </h3>
      {member.role === 'Principal Investigator' ? (
        <>
          <div className="text-academic-gray text-center text-xs mb-3 font-medium space-y-1">
            {member.id === 'fairhurst' ? (
              <>
                <a
                  href="https://tu-dresden.de/ing/elektrotechnik/ias/socialtouch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Chair for Social Affective Touch
                </a>
                <a
                  href="https://ceti.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Centre for Tactile Internet with Human-in-the-Loop
                </a>
                <a
                  href="https://tu-dresden.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Technical University of Dresden
                </a>
              </>
            ) : member.id === 'navab' ? (
              <>
                <a
                  href="https://www.cs.cit.tum.de/camp/start/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Chair for Computer Aided Medical Procedures
                </a>
                <a
                  href="https://www.tum.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Technical University of Munich
                </a>
              </>
            ) : member.id === 'nasseri' ? (
              <>
                <a
                  href="https://augenklinik.mri.tum.de/de/Forschung-und-Lehre/MAPS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Medical Autonomy and Precision Surgery Lab
                </a>
                <a
                  href="https://www.tum.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Technical University of Munich
                </a>
              </>
            ) : (
              <p>{member.affiliation}</p>
            )}
          </div>
          <p className="text-black font-bold text-center text-sm mb-2">
            {member.title}
          </p>
        </>
      ) : (
        <>
          <p className="text-black font-bold text-center text-sm mb-2">
            {member.title}
          </p>
          <div className="text-academic-gray text-center text-xs mb-3 font-medium space-y-1">
            {member.id === 'fairhurst' ? (
              <>
                <a
                  href="https://tu-dresden.de/ing/elektrotechnik/ias/socialtouch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Chair for Social Affective Touch
                </a>
                <a
                  href="https://ceti.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Centre for Tactile Internet with Human-in-the-Loop
                </a>
                <a
                  href="https://tu-dresden.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Technical University of Dresden
                </a>
              </>
            ) : member.id === 'navab' ? (
              <>
                <a
                  href="https://www.cs.cit.tum.de/camp/start/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Chair for Computer Aided Medical Procedures
                </a>
                <a
                  href="https://www.tum.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Technical University of Munich
                </a>
              </>
            ) : member.id === 'nasseri' ? (
              <>
                <a
                  href="https://augenklinik.mri.tum.de/de/Forschung-und-Lehre/MAPS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Medical Autonomy and Precision Surgery Lab
                </a>
                <a
                  href="https://www.tum.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-blue hover:text-academic-navy font-semibold block"
                >
                  Technical University of Munich
                </a>
              </>
            ) : (
              <p>{member.affiliation}</p>
            )}
          </div>
        </>
      )}

      {showRole && member.role && (
        <div className="bg-academic-light rounded px-3 py-2 text-center mb-4">
          <p className="text-xs font-semibold text-academic-blue">{member.role}</p>
        </div>
      )}

      {member.bio && (
        <div className="mb-4">
          <p className="text-sm text-academic-gray text-center leading-relaxed">
            {expanded || !isLong ? member.bio : preview}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mt-2 text-sm font-semibold text-academic-blue hover:text-academic-navy"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      )}

      <div className="space-y-2 text-xs">
        {member.email && (
          <p className="text-center">
            <a
              href={`mailto:${member.email}`}
              className="text-academic-blue hover:text-academic-navy font-semibold"
            >
              {member.email}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default function TeamPageClient() {
  return (
    <div>
      <section className="bg-gradient-to-br from-academic-navy to-academic-blue text-white py-16">
        <div className="section-container">
          <h1 className="text-display mb-6">Our Team</h1>
          <p className="text-2xl text-blue-100">
            Researchers, clinicians, and collaborators advancing multisensory surgical innovation
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-12">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
              Principal Investigators
            </h2>
            <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
            <p className="text-academic-gray mt-4">
              Leading the Synergia project across key research and clinical areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principalInvestigators.map((member) => (
              <TeamMemberCard key={member.id} member={member} showRole={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-academic-light">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-12">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
              Project Coordination & Research Leadership
            </h2>
            <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
            <p className="text-academic-gray mt-4">
              Central coordination of research activities and leadership of key research themes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinationTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-12">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
              Research Team
            </h2>
            <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
            <p className="text-academic-gray mt-4">
              PhD researchers and Postdoctoral fellows conducting cutting-edge research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-academic-light">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-12">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
              Clinical Collaborators
            </h2>
            <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
            <p className="text-academic-gray mt-4">
              Surgeons and clinicians providing surgical expertise and validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicalTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="mb-12">
            <h2 className="text-heading-lg font-bold text-academic-navy mb-2">
              External Collaborators
            </h2>
            <div className="h-1 w-16 bg-academic-blue rounded-full"></div>
            <p className="text-academic-gray mt-4">
              Academic and industry partners contributing specialized expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {externalCollaborators.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-gradient-to-r from-academic-blue to-academic-navy text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading-md font-bold mb-4">Interested in Joining?</h2>
          <p className="text-lg text-blue-100 mb-8">
            We're always looking for talented researchers, students, and collaborators to join our
            multidisciplinary team.
          </p>
          <a href="mailto:sasan.matinfar@tum.de" className="btn-primary bg-white text-academic-navy hover:bg-blue-50">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
