import { useParams } from 'react-router-dom';

function GrammarStructures() {
  const {structure} = useParams()

  return (
    <div>
      {structure === 'adjectives' && (<div className="flex flex-col justify-center" >


      <h1 className=" text-4xl text-red-flag mt-10 text-center " >Adjectives</h1>
    <p  className=" text-xl text-center text-blue-flag mt-4">adjectives can change based on the type of pronoun they accompany. The changes occur for different pronoun types: singular, plural, and indefinite. Here's an overview of how adjectives change:</p>
    
    <h1 className=" text-3xl text-red-flag mt-10 text-start" >Singular pronouns</h1>
    <p  className=" text-1xl text-left mt-2">For a singular pronoun (ik - I, jij - you, hij/zij/het - he/she/it), the adjective remains in its base form.</p>
    <p  className=" text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span> "Ik ben een groot persoon." (I am a tall person.)</p>

<div className='items-start justify-start' >
<p className=" text-3xl text-red-flag mt-10">Plural pronouns</p>
    <p className=" text-1xl text-left mt-2">For plural pronouns (e.g., "wij" - we, "jullie" - you all, "zij" - they), the adjective receives the ending "-e" when it precedes the noun.</p>
    <p  className=" text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span> "Wij zijn groene appels aan het eten." (We are eating green apples.)</p>

</div>

<div className='items-start justify-start' >
<p className=" text-3xl text-red-flag mt-10">Indefinite pronouns</p>
    <p className=" text-1xl text-left mt-2">For indefinite pronouns (e.g., "iedereen" - everyone, "niemand" - nobody, "alles" - everything), the adjective also receives the ending "-e" when it comes before the noun</p>
    <p className="text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span> "Iedereen heeft een nieuwe auto." (Everyone has a new car.)</p>

    <p className=" text-1xl text-left mt-2">If the adjective follows the noun, no ending is added.</p>
    <p  className=" text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span> "De auto's zijn nieuw." (The cars are new.)</p>
</div>




      </div>)}


    </div>
  )
}

export default GrammarStructures