import test from 'node:test';
import assert from 'node:assert/strict';
import {buildLovablePrompt} from './lovable.ts';
import {createProject,parseProject} from './model.ts';
import {topicIdeas,philosophicalTopics} from './data/topics.ts';
import {scenes} from './data/faust.ts';
test('Briefing erhält den redaktionellen Projektstand und den Prüfstatus',()=>{
 const p=createProject();p.mode='theme';p.topic=philosophicalTopics[1].title;p.question='Wie verändert der Ausgang das Urteil?';p.scenes=['scene-20','scene-29'];p.notes[3]='Auf die Prosaszene achten.';p.blocks=[{id:'b',title:'Gegenprobe',body:'Absicht und Folge trennen.',medium:'Diagramm',interaction:'Vergleich'}];p.evidence=[{id:'a',scene:'Kerker',text:'Ungeprüftes Testmaterial',verses:'noch offen',source:'Quelle offen',analysis:'Eine vorläufige Deutung.',verified:false}];
 const text=buildLovablePrompt(p);
 for(const expected of [p.question,p.topic,p.notes[3],p.blocks[0].title,p.blocks[0].body,p.evidence[0].analysis,'UNGEPRÜFT','Marthens Garten','Kerker','Gegenposition','Erfinde keine Textstellen, Verse'])assert.ok(text.includes(expected),expected);
 assert.ok(text.includes(philosophicalTopics[1].counter));
 assert.deepEqual(parseProject(JSON.stringify(p)),p);
 p.evidence[0].verified=true;assert.ok(buildLovablePrompt(p).includes('von der Projektredaktion selbst geprüft'));
});
test('Ein leeres Projekt erzeugt offene Arbeitsaufträge statt scheinbar fertiger Inhalte',()=>{const text=buildLovablePrompt(createProject());assert.ok(text.includes('LEITFRAGE FEHLT'));assert.ok(text.includes('Noch keine Textbelege'));assert.ok(text.includes('Noch kein Storyboard'));assert.ok(text.includes('Keine Datenbank anlegen'))});
test('Denkwege haben eindeutige Titel und verweisen auf existierende Werkabschnitte',()=>{assert.ok(philosophicalTopics.length>=20);assert.equal(new Set(topicIdeas.map(t=>t.title)).size,topicIdeas.length);for(const topic of topicIdeas){for(const field of ['title','hook','concept','question','counter','format'] as const)assert.ok(topic[field].trim());assert.ok(topic.scenes.length>=3);for(const id of topic.scenes)assert.ok(scenes.some(s=>s.id===id),`${topic.title}: ${id}`)}});

test('Neue Schwerpunkte sind erschlossen und ihre methodischen Grenzen gehen ins Briefing ein',async()=>{
 const {focusFields,focusTopics,focusReadings,focusContexts}=await import('./data/focusTopics.ts');
 const {topicReadings}=await import('./data/topics.ts');
 for(const field of focusFields){const items=focusTopics.filter(t=>t.field===field);assert.ok(items.length>=3);for(const topic of items){assert.ok(focusReadings[topic.title]?.[0].url.startsWith('https://plato.stanford.edu/'));const p=createProject();p.mode='theme';p.topic=topic.title;const briefing=buildLovablePrompt(p);assert.ok(briefing.includes(focusContexts[field]));assert.ok(briefing.includes(topicReadings[topic.title][0].url))}}
 const moralLuck=topicIdeas.find(t=>t.title==='Schuld im Konjunktiv: das moralische Pech')!;assert.equal(topicReadings[moralLuck.title][0].url,'https://plato.stanford.edu/entries/moral-luck/');
});
