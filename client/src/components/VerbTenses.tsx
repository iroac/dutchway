import { useParams } from 'react-router-dom';

function VerbTenses() {
const {verbtime} = useParams()


  return (
    <div>
{verbtime === 'past' && (<div>
    <h1>Past</h1>
</div>)}

{verbtime === 'present' && (<div>
    <h1>Present</h1>
</div>)}

{verbtime === 'future' && (<div>
    <h1>Future</h1>
</div>)}

    </div>
  )
}

export default VerbTenses