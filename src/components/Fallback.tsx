import {FallbackProps} from 'react-error-boundary';
import {ReactNode} from 'react';

export default function Fallback(params: FallbackProps): ReactNode {
  const {error} = params;
  return (
    <div role="alert" style={{margin: 'auto'}}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
