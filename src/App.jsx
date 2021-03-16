import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import JobListContainer from './components/JobListContainer';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <div className="container mx-auto h-screen flex">
        <div className="w-1/4 h-full border-l">
          <JobListContainer className="w-full" />
        </div>
        <div className="w-3/4">hello</div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
