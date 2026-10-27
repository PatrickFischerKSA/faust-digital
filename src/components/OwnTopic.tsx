import {useState} from 'react';
import {Plus} from 'lucide-react';
import type {Project} from '../model';
import {topicIdeas} from '../data/topics';
import {Field} from './UI';
export default function OwnTopic({project,update}:{project:Project;update:(p:Partial<Project>)=>void}){
 const own=Boolean(project.topic&&!topicIdeas.some(t=>t.title===project.topic));
 const [title,setTitle]=useState(own?project.topic:'');
 const [question,setQuestion]=useState('');
 const [message,setMessage]=useState('');
 return <section className="paper own-topic"><details><summary><span><span className="eyebrow">DEINE IDEE / DEIN ZUGANG</span><span className="own-topic-title">Eigenes Thema vorschlagen</span></span><Plus size={24} aria-hidden="true"/></summary><p className="muted">Dein Gedanke passt in keine Schublade? Formuliere ein eigenes Thema – auch quer zu den Vorschlägen. Es wird für dein Projekt gespeichert und im Lovable-Briefing berücksichtigt.</p><form onSubmit={e=>{e.preventDefault();if(!title.trim())return;update({topic:title.trim(),...(question.trim()?{question:question.trim()}:{})});setMessage('Dein Thema wurde für dein Projekt übernommen und wird automatisch lokal gespeichert.')}}><Field label="Dein Themenvorschlag" value={title} onChange={v=>{setTitle(v);setMessage('')}} placeholder="Zum Beispiel: Faust und das Recht auf ein unauffälliges Leben"/><Field label="Eigene Leitfrage (optional)" value={question} onChange={v=>{setQuestion(v);setMessage('')}} multiline rows={3} placeholder="Welche offene Frage möchtest du am Drama untersuchen?"/><p className="small muted">{question.trim()&&project.question.trim()?'Die eingetragene Leitfrage ersetzt deine bisherige Leitfrage.':'Ohne neue Leitfrage bleibt deine bisherige Leitfrage erhalten.'} Szenenauswahl, Belege und Storyboard bleiben erhalten.</p><button className="button" type="submit" disabled={!title.trim()}>Vorschlag für mein Projekt übernehmen</button><p className="copy-status" role="status">{message}</p></form><p className="small muted">Zum Schärfen: Welcher Begriff ist strittig? Welche Szenen könnten deine Vermutung widerlegen? Eigene Themen brauchen dieselbe sorgfältige Textgrundlage wie Katalogthemen.</p></details>{project.topic&&<div className="own-topic-current"><span className="eyebrow">AKTUELLES PROJEKTTHEMA{own?' / EIGENER VORSCHLAG':''}</span><p>{project.topic}</p></div>}</section>
}
