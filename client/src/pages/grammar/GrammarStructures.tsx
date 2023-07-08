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


      {structure === 'modalverbs' && (<div className="flex flex-col justify-center" >


      <h1 className=" text-4xl text-red-flag mt-10 text-center " >Modal Verbs - "modale werkwoorden"</h1>
    <p  className=" text-xl text-center text-blue-flag mt-4">Modal verbs in Dutch, also known as "modale werkwoorden," play an important role in expressing attitudes, abilities, permissions, and obligations. Here's an overview of how modal verbs work in Dutch</p>

    <p className=" text-xl text-blue-flag mt-10">The modal verbs include:</p>
    <p className="text-1xl text-left text-blue-flag mb-2">Kunnen<span className="text-red-flag">(can, to be able to)</span></p>
    <p className="text-1xl text-left text-blue-flag mb-2">Mogen<span className="text-red-flag">(may, to be allowed to)</span></p>
    <p className="text-1xl text-left text-blue-flag mb-2">Moeten<span className="text-red-flag">(must, to have to)</span></p>
    <p className="text-1xl text-left text-blue-flag mb-2">Willen<span className="text-red-flag">(want, to want to)</span></p>
    <p className="text-1xl text-left text-blue-flag mb-2">Zullen<span className="text-red-flag">(shall/will, to intend to)</span></p>
    
    <h1 className=" text-3xl text-red-flag mt-10 text-start">Verb Usage</h1>
    <p  className=" text-1xl text-left mt-2">Modal verbs are typically used together with the base form of another verb. The second verb appears in its infinitive form, without any conjugation.</p>
    <p  className=" text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span> Ik kan zwemmen. (I can swim.)</p>

<div className='items-start justify-start' >
<p className=" text-3xl text-red-flag mt-10">Sentence Structure</p>
    <p className=" text-1xl text-left mt-2">In Dutch, modal verbs are placed in the second position in a sentence, followed by the subject and the main verb in the infinitive form.</p>
    <p  className=" text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span> Ik wil een boek lezen. (I want to read a book.)</p>
</div>

<div className='items-start justify-start' >
<p className=" text-3xl text-red-flag mt-10">Negation</p>
    <p className=" text-1xl text-left mt-2">To form negative sentences with modal verbs, the word "niet" is placed after the modal verb.</p>
    <p  className=" text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span>Ik kan niet komen. (I cannot come.)</p>
</div>



<div className='items-start justify-start' >
<p className=" text-3xl text-red-flag mt-10">Questions and Interrogative Sentences</p>
    <p className=" text-1xl text-left mt-2">In questions, modal verbs are placed at the beginning of the sentence, followed by the subject and the main verb in the infinitive form.</p>
    <p className="text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span> Mag ik naar buiten? (May I go outside?)</p>
</div>

<div className='items-start justify-start' >
<p className=" text-3xl text-red-flag mt-10">Conditional Sentences</p>
    <p className=" text-1xl text-left mt-2">Modal verbs are often used in conditional sentences to express possibilities, permissions, or requirements.</p>
    <p  className=" text-1xl text-left text-blue-flag mb-2"> <span className="text-red-flag">Example:</span>Als het regent, moet ik mijn paraplu meenemen. (If it rains, I must take my umbrella.)</p>
</div>
      </div>)}


      {structure === 'articles' && (<div className="flex flex-col justify-center" >


<h1 className=" text-4xl text-red-flag mt-10 text-center " >Articles</h1>
<p  className=" text-xl text-center text-blue-flag mt-4">Articles are used to indicate the definiteness or indefiniteness of a noun. There are three main types of articles in Dutch: definite articles, indefinite articles, and zero articles. Here's an explanation of how they work:</p>

<h1 className=" text-3xl text-red-flag mt-10 text-start" >Definite articles</h1>
<p  className=" text-1xl text-left mt-2">Definite articles indicate that the noun refers to a specific or known entity. In Dutch, the definite article is "de" for common gender nouns and "het" for neuter gender nouns.</p>
<p  className=" text-1xl text-left text-blue-flag">Examples:</p>
<p  className=" text-1xl text-left text-blue-flag">De kat<span className="text-red-flag">(The cat)</span></p>
<p  className=" text-1xl text-left text-blue-flag">Het huis<span className="text-red-flag">(The house)</span></p>


<h1 className=" text-3xl text-red-flag mt-10 text-start" >Indefinite articles</h1>
<p  className=" text-1xl text-left mt-2">Indefinite articles indicate that the noun refers to a non-specific or unknown entity. In Dutch, the indefinite article is "een" for both common gender and neuter gender nouns.</p>
<p  className=" text-1xl text-left text-blue-flag">Examples:</p>
<p  className=" text-1xl text-left text-blue-flag">Een hond<span className="text-red-flag">(A dog)</span></p>
<p  className=" text-1xl text-left text-blue-flag">Een boek<span className="text-red-flag">(A book)</span></p>


<h1 className=" text-3xl text-red-flag mt-10 text-start" >Zero articles</h1>
<p  className=" text-1xl text-left mt-2">Dutch also has cases where no article is used. This occurs in certain contexts such as when referring to general concepts, plural nouns, or with certain types of nouns.</p>
<p  className=" text-1xl text-left text-blue-flag">Examples:</p>
<p  className=" text-1xl text-left text-blue-flag">Katten zijn speels<span className="text-red-flag">(Cats are playful)</span></p>
<p  className=" text-1xl text-left text-blue-flag">Mensen houden van chocolade<span className="text-red-flag"> (People love chocolate.)</span></p>

<div className='items-start justify-start' >
<p className=" text-3xl text-red-flag mt-10">"Het" VS "De"</p>
<p className=" text-1xl text-left mt-2">Determining when to use "het" or "de" in Dutch can be a bit challenging, as there is no strict rule that applies in all cases. However, there are some general guidelines to consider</p>

<h1 className=" text-2xl text-red-flag mt-10 text-start" >Gender</h1>
<p  className=" text-1xl text-left mt-2">Nouns can be categorized as either common gender (de-words) or neuter gender (het-words). Unfortunately, there are no foolproof rules to determine the gender of a noun, and it's often something you have to learn along with the vocabulary. However, there are some tendencies that can help.</p>
<p  className=" text-1xl text-left text-red-flag">For Examples:</p>
<p  className=" text-1xl text-left text-blue-flag">Most nouns ending in "-ing" are common gender (de-words), while many nouns ending in "-je" are neuter gender (het-words).</p>

<h1 className=" text-2xl text-red-flag mt-10 text-start" >Context and Usage</h1>
<p  className=" text-1xl text-left mt-2">Pay attention to the words that are used in relation to the noun. Sometimes, the choice of "het" or "de" is based on common usage and conventions.</p>
<p  className=" text-1xl text-left text-blue-flag">For instance, certain words are almost always used with "het" or "de" based on tradition and custom, rather than strict grammatical rules.</p>

<h1 className=" text-2xl text-red-flag mt-10 text-start" >Memorization and Exposure</h1>
<p  className=" text-1xl text-left mt-2">Learning the gender of nouns in Dutch is best achieved through exposure to the language and practice.</p>
<p  className=" text-1xl text-left text-blue-flag">As you encounter new vocabulary, make note of the gender and the accompanying definite or indefinite articles.</p>

</div>



</div>)}


    </div>
  )
}

export default GrammarStructures