import { Reveal } from '../../components/reveal';

const team=[
  {name:'Amine Smaoui',role:'Directeur général',image:'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85'},
  {name:'Eslem Zalila',role:'Directrice administrative',image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85'},
  {name:'Saifeddine Trabelsi',role:'Clinical Application Specialist',image:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85'},
  {name:'Mestiri Malek',role:'Spécialiste Field Applications',image:'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85'},
  {name:'Hmaidia Borhen',role:'Application Engineer',image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85'},
  {name:'Mdallah Ahmed',role:'Responsable Supply Chain & Affaires réglementaires',image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85'},
  {name:'Issam Mrabet',role:'Commercial',image:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85'}
];

export default function Team(){return <><section className="page-hero team-hero"><p className="kicker red">Freedom Distribution</p><h1>Une équipe engagée<br/><em>à vos côtés.</em></h1><p>Une équipe pluridisciplinaire au service de l’ophtalmologie, de la précision clinique et de la performance technique.</p></section><section className="team-page"><Reveal><p className="kicker red">L’humain au cœur</p><h2>Expertise technique, proximité et accompagnement.</h2></Reveal><div className="team-grid">{team.map((member,index)=><Reveal key={member.name} delay={index*.06}><article className="team-card"><div className="team-photo"><img src={member.image} alt={`Portrait illustratif de ${member.name}`}/><span>0{index+1}</span></div><p>{member.role}</p><h3>{member.name}</h3><i>Portrait illustratif temporaire</i></article></Reveal>)}</div></section><section className="team-note"><Reveal><p className="kicker red">Notre promesse</p><h2>Une présence locale.<br/><em>Une expertise spécialisée.</em></h2></Reveal></section></>}
