import { useParams } from 'react-router-dom';

function VerbTenses() {
const {verbtime} = useParams()


  return (
    <div>

{verbtime === 'past' && (<div className="flex flex-col justify-center" >
    
    <h1 className=" text-4xl text-red-flag mt-10 text-center " >Past Tenses</h1>
    <p  className=" text-xl text-center text-blue-flag mt-4">The past tense in Dutch, known as <span className="text-red-flag">"Verleden Tijd"</span>,  is used to describe completed actions or events that occurred in the past. It indicates that something happened and is no longer ongoing.</p>
    
    <h1 className=" text-3xl text-red-flag mt-10 text-start" >Verbal Change</h1>
    <p  className=" text-1xl text-left text-blue-flag mt-2 mb-2">In Dutch, the past tense is formed by adding specific endings to the verb stem. The endings depend on the subject pronoun and the verb's infinitive form. Here is a general breakdown of how the past tense is formed:</p>

<div className='items-start justify-start' >
<p className=" text-2xl text-red-flag mt-2">Regular Verbs</p>
    <p>- For regular verbs, the past tense is formed by adding the suffix "-te" or "-de" to the verb stem.</p>
    <p>- The suffix used depends on the final sound of the verb stem.</p>

    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p>Infinitive: werken (to work) - Past Tense: werkte (worked)</p>
    <p>Infinitive: lopen (to walk) - Past Tense: liep (walked)</p>
</div>

<div className='items-start justify-start' >
<p className=" text-2xl text-red-flag mt-6" >Irregular Verbs</p>
    <p>- Irregular verbs have their own unique conjugation patterns in the past tense.</p>
    <p>- They may undergo vowel changes, consonant changes, or have completely irregular forms.</p>
    <p>- Here you can find the list with all the irregular verbs</p>

    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p>Infinitive: zijn (to be) - Past Tense: was (was/were)</p>
    <p>Infinitive: lopen (to walk) - Past Tense: liep (walked)</p>
</div>


<h1 className=" text-3xl text-red-flag mt-10 text-center" >Past Simple (Verleden Tijd)</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Past Simple tense is used to describe completed actions or events in the past.</p>
    <div className='items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik werkte hard aan mijn project. (I worked hard on my project.)</p>
    <p className="mb-5 text-1xl">- Hij bezocht gisteren zijn oma. (He visited his grandmother yesterday.)</p>
    <p className="mb-5 text-1xl">- We speelden samen in het park. (We played together in the park.)</p>
    <p className="mb-5 text-1xl">- Jullie kochten nieuwe kleren. (You bought new clothes.)</p>
    <p className="mb-5 text-1xl">- Ze zongen een lied tijdens het concert. (They sang a song during the concert.)</p>
    <p className="mb-5 text-1xl">- De kat sprong op de tafel. (The cat jumped on the table.)</p>
    <p className="mb-5 text-1xl">- Hij opende de deur voor haar. (He opened the door for her.)</p>
    <p className="mb-5 text-1xl">- We aten pizza voor het avondeten. (We ate pizza for dinner.)</p>
    <p className="mb-5 text-1xl">- Ik las een interessant boek. (I read an interesting book.)</p>
    <p className="mb-5 text-1xl">- Jullie sliepen lang vannacht. (You slept long last night.)</p>
</div>


<h1 className=" text-3xl text-red-flag mt-10 text-center" >Past Continuous (Onvoltooide Verleden Tijd):</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Past Continuous tense is used to describe ongoing or continuous actions in the past.</p>
    <div className='flex flex-col items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik was aan het studeren toen de telefoon ging. (I was studying when the phone rang.)</p>
    <p className="mb-5 text-1xl">- Hij was aan het koken terwijl ik tv keek. (He was cooking while I was watching TV.)</p>
    <p className="mb-5 text-1xl">- We waren aan het wandelen in het bos. (We were walking in the forest.)</p>
    <p className="mb-5 text-1xl">- Jullie waren aan het dansen op het feest. (You were dancing at the party.)</p>
    <p className="mb-5 text-1xl">- Ze waren aan het spelen in de tuin. (They were playing in the garden.)</p>
    <p className="mb-5 text-1xl">- Hij was aan het rennen in het park. (He was running in the park.)</p>
    <p className="mb-5 text-1xl">- We waren aan het praten over onze vakantieplannen. (We were talking about our vacation plans.)</p>
    <p className="mb-5 text-1xl">- Jullie waren aan het oefenen voor de wedstrijd. (You were practicing for the match.)</p>
    <p className="mb-5 text-1xl">- Ze was aan het schilderen in haar atelier. (She was painting in her studio.)</p>
    <p className="mb-5 text-1xl">- De kinderen waren aan het lachen om de grappen. (The children were laughing at the jokes.)</p>
</div>


<h1 className=" text-3xl text-red-flag mt-10 text-center" >Past Perfect (Voltooide Verleden Tijd):</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Past Perfect tense is used to indicate actions or events that were completed before another point in the past.</p>
    <div className='flex flex-col items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ze had al gegeten voordat ze naar het feest ging. (She had already eaten before she went to the party.)</p>
    <p className="mb-5 text-1xl">- Ik had het boek al gelezen voordat de film uitkwam. (I had already read the book before the movie came out.)</p>
    <p className="mb-5 text-1xl">- Hij had zijn huiswerk gemaakt voordat hij ging spelen. (He had done his homework before he went to play.)</p>
    <p className="mb-5 text-1xl">- We hadden al gereisd voordat we ons huis kochten. (We had already traveled before we bought our house.)</p>
    <p className="mb-5 text-1xl">- Ik had mijn huiswerk gemaakt voordat de les begon. (I had done my homework before the class started.)</p>
    <p className="mb-5 text-1xl">- Hij had al gegeten voordat hij naar de bioscoop ging. (He had already eaten before he went to the cinema.)</p>
    <p className="mb-5 text-1xl">- We hadden de film al gezien voordat hij in de bioscoop kwam. (We had already seen the movie before he arrived at the cinema.)</p>
    <p className="mb-5 text-1xl">- Jullie hadden al gereisd voordat je aankwam op het vliegveld. (You had already traveled before you arrived at the airport.)</p>
    <p className="mb-5 text-1xl">- Ze had haar sleutels verloren voordat ze thuiskwam. (She had lost her keys before she came home.)</p>
    <p className="mb-5 text-1xl">- De kinderen hadden hun huiswerk af voordat ze gingen spelen. (The children had finished their homework before they went out to play.)</p>
</div>

</div>)}



{verbtime === 'present' && (<div className="flex flex-col justify-center mx-4" >
    
    <h1 className=" text-4xl text-red-flag mt-10 text-center " >Present Tenses</h1>
    <p  className=" text-xl text-center text-blue-flag mt-4">The present tense in Dutch, known as <span className="text-red-flag">"Tegenwoordige Tijd"</span>, is used to describe actions or states that are happening in the present or are generally true. It refers to what is currently happening or what happens regularly.</p>
    
    <h1 className=" text-3xl text-red-flag mt-10 text-start" >Verbal Change</h1>
    <p  className=" text-1xl text-left text-blue-flag mt-2 mb-2">In Dutch, the present tense is formed by adding specific endings to the verb stem. The endings depend on the subject pronoun. Here is a general breakdown of how the present tense is formed:</p>

<div className='items-start justify-start' >
<p className=" text-2xl text-red-flag mt-2">Regular Verbs</p>
    <p>- For singular subjects (I, you, he/she/it): The verb stem remains unchanged.</p>
    <p>- For plural subjects (we, you, they): The verb stem is followed by the suffix "-en."</p>

    <p className=" text-1xl text-blue-flag mt-6" >Example with the verb "werken" (to work):</p>
    <p className="mb-2 text-1xl">Ik werk (I work)</p>
    <p className="mb-2 text-1xl">Jij werkt (You work)</p>
    <p className="mb-2 text-1xl">Hij/Zij/Het werkt (He/She/It works)</p>
    <p className="mb-2 text-1xl">Wij werken (We work)</p>
    <p className="mb-2 text-1xl">Jullie werken (You work)</p>
    <p className="mb-2 text-1xl">Zij werken (They work)</p>
</div>

<div className='items-start justify-start' >
<p className=" text-2xl text-red-flag mt-6" >Irregular Verbs</p>
    <p>For irregular verbs, the present tense forms vary. Some verbs undergo vowel changes or have irregular conjugations.</p>
    <p className=" text-1xl text-blue-flag mt-6" >Example with the irregular verb "zijn" (to be):</p>
    <p className="mb-2 text-1xl">Ik ben (I am)</p>
    <p className="mb-2 text-1xl">Jij bent (You are)</p>
    <p className="mb-2 text-1xl">Hij/Zij/Het is (He/She/It is)</p>
    <p className="mb-2 text-1xl">Wij zijn (We are)</p>
    <p className="mb-2 text-1xl">Jullie zijn (You are)</p>
    <p className="mb-2 text-1xl">Zij zijn (They are)</p>

    <p className=" text-1xl text-blue-flag mt-6" >Example with the irregular verb "hebben" (to have):</p>
    <p className="mb-2 text-1xl">Ik heb (I have)</p>
    <p className="mb-2 text-1xl">Jij hebt (You have)</p>
    <p className="mb-2 text-1xl">Hij/Zij/Het heeft (He/She/It has)</p>
    <p className="mb-2 text-1xl">Wij hebben (We have)</p>
    <p className="mb-2 text-1xl">Jullie hebben (You have)</p>
    <p className="mb-2 text-1xl">Zij hebben (They have)</p>
</div>


<h1 className="text-3xl text-red-flag mt-10 text-center" >Present Simple  (Onvoltooide Tegenwoordige Tijd)</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Present Simple tense is used to express habitual actions or general truths.</p>
    <div className='items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik eet elke ochtend ontbijt. (I eat breakfast every morning.)</p>
    <p className="mb-5 text-1xl">- Hij werkt in een ziekenhuis. (He works in a hospital.)</p>
    <p className="mb-5 text-1xl">- We studeren elke dag Nederlands. (We study Dutch every day.)</p>
    <p className="mb-5 text-1xl">- Jullie wonen in Amsterdam. (You live in Amsterdam.)</p>
    <p className="mb-5 text-1xl">- Ze spreekt vloeiend Engels. (She speaks fluent English.)</p>
    <p className="mb-5 text-1xl">- De kat slaapt veel. (The cat sleeps a lot.)</p>
    <p className="mb-5 text-1xl">- We sporten regelmatig. (We exercise regularly.)</p>
    <p className="mb-5 text-1xl">- Jullie reizen graag. (You enjoy traveling.)</p>
    <p className="mb-5 text-1xl">- Ze houdt van lezen. (She loves reading.)</p>
    <p className="mb-5 text-1xl">- De zon schijnt altijd in de zomer. (The sun always shines in the summer.)</p>
</div>


<h1 className=" text-3xl text-red-flag mt-10 text-center" >Present Continuous (Onvoltooide Tegenwoordige Tijd):</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Present Continuous tense is used to describe actions happening at the present moment or ongoing actions.</p>
    <div className='flex flex-col items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik ben aan het koken. (I am cooking.)</p>
    <p className="mb-5 text-1xl">- Hij is naar de film aan het kijken. (He is watching a movie.)</p>
    <p className="mb-5 text-1xl">- We zijn aan het wandelen in het park. (We are walking in the park.)</p>
    <p className="mb-5 text-1xl">- Jullie zijn aan het praten met vrienden. (You are talking to friends.)</p>
    <p className="mb-5 text-1xl">- Ze is aan het studeren voor haar examen. (She is studying for her exam.)</p>
    <p className="mb-5 text-1xl">- De kinderen zijn aan het spelen in de tuin. (The children are playing in the garden.)</p>
    <p className="mb-5 text-1xl">- We zijn aan het winkelen in de stad. (We are shopping in the city.)</p>
    <p className="mb-5 text-1xl">- Jullie zijn aan het dansen op het feest. (You are dancing at the party.)</p>
    <p className="mb-5 text-1xl">- Ze is aan het schilderen op het doek. (She is painting on the canvas.)</p>
    <p className="mb-5 text-1xl">- De zon is aan het ondergaan. (The sun is setting.)</p>
</div>


<h1 className=" text-3xl text-red-flag mt-10 text-center">Present Perfect (Voltooide Tegenwoordige Tijd):</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Present Perfect tense is used to express actions or events that happened in the past with a connection to the present. The present perfect tense is formed by combining the auxiliary verb "hebben" with the past participle of the main verb.</p>
    <div className='flex flex-col items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik heb mijn huiswerk gedaan. (I have done my homework.)</p>
    <p className="mb-5 text-1xl">- Hij heeft een nieuwe baan gekregen. (He has gotten a new job.)</p>
    <p className="mb-5 text-1xl">- We hebben een film gekeken. (We have watched a movie.)</p>
    <p className="mb-5 text-1xl">- Jullie hebben veel gereisd. (You have traveled a lot.)</p>
    <p className="mb-5 text-1xl">- Ze heeft een boek gelezen. (She has read a book.)</p>
    <p className="mb-5 text-1xl">- Ik ben nog nooit naar Parijs geweest. (I have never been to Paris.)</p>
    <p className="mb-5 text-1xl">- Hij heeft al gegeten. (He has already eaten.)</p>
    <p className="mb-5 text-1xl">- We hebben veel ervaring opgedaan. (We have gained a lot of experience.)</p>
    <p className="mb-5 text-1xl">- Jullie hebben goed je best gedaan. (You have done well.)</p>
    <p className="mb-5 text-1xl">- Hij heeft een nieuwe auto gekocht. (He has bought a new car.)</p>
</div>

</div>)}



{verbtime === 'future' && (<div className="flex flex-col justify-center mx-4" >
    
    <h1 className=" text-4xl text-red-flag mt-10 text-center " >Future Tenses</h1>
    <p  className=" text-xl text-center text-blue-flag mt-4">The future tense in Dutch, known as <span className="text-red-flag">"Toekomende Tijd"</span>, is used to express actions that will happen in the future. It indicates an action or event that is yet to occur.</p>
    
    <h1 className=" text-3xl text-red-flag mt-10 text-start" >Verbal Change</h1>
    <p  className=" text-1xl text-left text-blue-flag mt-2 mb-2">In Dutch, the future tense is formed using the auxiliary verb "zullen" (to will) or "gaan" (to go) followed by the infinitive form of the main verb.</p>

    <p className=" text-1xl text-blue-flag mt-6" >Example with the verb "werken" (to work):</p>
    <p className="mb-2 text-1xl">Ik zal werken. (I will work.)</p>
    <p className="mb-2 text-1xl">Jij zult werken. (You will work.)</p>
    <p className="mb-2 text-1xl">Hij/Zij/Het zal werken. (He/She/It will work.)</p>
    <p className="mb-2 text-1xl">Wij zullen werken. (We will work.)</p>
    <p className="mb-2 text-1xl">Jullie zullen werken. (You will work.)</p>
    <p className="mb-2 text-1xl">Zij zullen werken. (They will work.)</p>
    
    <p className=" text-1xl text-blue-flag mt-6" >Example with the verb "werken" (to work):</p>
    <p className="mb-2 text-1xl">Ik ga werken. (I am going to work.)</p>
    <p className="mb-2 text-1xl">Jij gaat werken. (You are going to work.)</p>
    <p className="mb-2 text-1xl">Hij/Zij/Het gaat werken. (He/She/It is going to work.)</p>
    <p className="mb-2 text-1xl">Wij gaan werken. (We are going to work.)</p>
    <p className="mb-2 text-1xl">Jullie gaan werken. (You are going to work.)</p>
    <p className="mb-2 text-1xl">Zij gaan werken. (They are going to work.)</p>



<div className='items-start justify-start' >
<p className=" text-2xl text-red-flag mt-6" >Irregular Verbs</p>
    <p>For irregular verbs, the future tense forms vary. Irregular verbs do not follow the standard conjugation patterns of regular verbs.</p>
    <p className=" text-1xl text-blue-flag mt-6" >Example with the irregular verb "zijn" (to be):</p>
    <p className="mb-2 text-1xl">Ik zal zijn. (I will be.)</p>
    <p className="mb-2 text-1xl">Jij zult zijn. (You will be.)</p>
    <p className="mb-2 text-1xl">Hij/Zij/Het zal zijn. (He/She/It will be.)</p>
    <p className="mb-2 text-1xl">Wij zullen zijn. (We will be.)</p>
    <p className="mb-2 text-1xl">Jullie zullen zijn. (You will be.)</p>
    <p className="mb-2 text-1xl">Zij zullen zijn. (They will be.)</p>
</div>


<h1 className="text-3xl text-red-flag mt-10 text-center" >Future Simple (Toekomende Tijd)</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Future Simple tense is used to express actions that will happen in the future.</p>
    <div className='items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik zal morgen naar de stad gaan. (I will go to the city tomorrow.)</p>
    <p className="mb-5 text-1xl">- Hij zal volgende week op vakantie gaan. (He will go on vacation next week.)</p>
    <p className="mb-5 text-1xl">- We zullen je later opbellen. (We will call you later.)</p>
    <p className="mb-5 text-1xl">- Jullie zullen over een uur aankomen. (You will arrive in an hour.)</p>
    <p className="mb-5 text-1xl">- Ze zal haar diploma behalen. (She will obtain her diploma.)</p>
    <p className="mb-5 text-1xl">- De trein zal om 9 uur vertrekken. (The train will depart at 9 o'clock.)</p>
    <p className="mb-5 text-1xl">- We zullen hard werken om ons doel te bereiken. (We will work hard to achieve our goal.)</p>
    <p className="mb-5 text-1xl">- Jullie zullen genieten van de reis. (You will enjoy the trip.)</p>
    <p className="mb-5 text-1xl">- Ze zal haar presentatie geven tijdens de vergadering. (She will give her presentation during the meeting.)</p>
    <p className="mb-5 text-1xl">- De zon zal morgen opkomen om 6 uur. (The sun will rise tomorrow at 6 o'clock.)</p>
</div>


<h1 className=" text-3xl text-red-flag mt-10 text-center" >Future Continuous (Toekomende Tijd Continu)</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Future Continuous tense is used to describe ongoing or continuous actions that will happen in the future.</p>
    <div className='flex flex-col items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik zal morgen aan het werk zijn. (I will be working tomorrow.)</p>
    <p className="mb-5 text-1xl">- Hij zal volgende week aan het studeren zijn. (He will be studying next week.)</p>
    <p className="mb-5 text-1xl">- We zullen vanavond aan het koken zijn. (We will be cooking tonight.)</p>
    <p className="mb-5 text-1xl">- Jullie zullen in de tuin aan het werken zijn. (You will be working in the garden.)</p>
    <p className="mb-5 text-1xl">- Ze zal tijdens de vakantie aan het relaxen zijn. (She will be relaxing during the vacation.)</p>
    <p className="mb-5 text-1xl">- We zullen aan het dansen zijn op het feest. (We will be dancing at the party.)</p>
    <p className="mb-5 text-1xl">- Jullie zullen aan het wandelen zijn in het park. (You will be walking in the park.)</p>
    <p className="mb-5 text-1xl">- Ze zal aan het lezen zijn in haar favoriete boek. (She will be reading her favorite book.)</p>
    <p className="mb-5 text-1xl">- Ik zal aan het schilderen zijn op het doek. (I will be painting on the canvas.)</p>
    <p className="mb-5 text-1xl">- De zon zal ondergaan terwijl we aan het picknicken zijn. (The sun will set while we are having a picnic.)</p>
</div>


<h1 className=" text-3xl text-red-flag mt-10 text-center">Future Perfect (Voltooide Toekomende Tijd)</h1>
    <p  className=" text-1xl text-center text-blue-flag mt-1">The Future Perfect tense is used to express actions that will be completed before a certain time or event in the future.  the future perfect tense is formed using the auxiliary verb "zullen" (to will) followed by the past participle of the main verb.</p>
    <div className='flex flex-col items-start justify-start' >
    <p className=" text-1xl text-blue-flag mt-6" >Exemples:</p>
    <p className="mb-5 text-1xl">- Ik zal de hele dag gewerkt hebben. (I will have worked the entire day.)</p>
    <p className="mb-5 text-1xl">- Jij zult je diploma behaald hebben. (You will have obtained your diploma.)</p>
    <p className="mb-5 text-1xl">- Hij zal alle boeken gelezen hebben. (He will have read all the books.)</p>
    <p className="mb-5 text-1xl">- Wij zullen de taart gebakken hebben. (We will have baked the cake.)</p>
    <p className="mb-5 text-1xl">- Jullie zullen de reis gepland hebben. (You will have planned the trip.)</p>
    <p className="mb-5 text-1xl">- Zij zullen het huis schoongemaakt hebben. (They will have cleaned the house.)</p>
    <p className="mb-5 text-1xl">- Het team zal de wedstrijd gewonnen hebben. (The team will have won the match.)</p>
    <p className="mb-5 text-1xl">- De vrachtwagenchauffeur zal alle pakketten afgeleverd hebben. (The truck driver will have delivered all the packages.)</p>
    <p className="mb-5 text-1xl">- De kinderen zullen hun huiswerk afgerond hebben. (The children will have completed their homework.)</p>
    <p className="mb-5 text-1xl">- De bouwvakkers zullen het gebouw opgeleverd hebben. (The construction workers will have completed the building.)</p>
</div>

</div>)}

    </div>
  )
}

export default VerbTenses