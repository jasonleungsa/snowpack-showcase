import * as R from 'ramda';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Virtuoso } from 'react-virtuoso';
import JobCard from './JobCard';

const JobListContainer = ({ className }) => {
  const { data = {}, fetchNextPage } = useInfiniteQuery(
    'jobs',
    async ({ pageParam = 1 }) => {
      const request = await fetch(
        `/search?siteKey=AU-Main&sourcesystem=houston&where=All+Australia&hadPremiumListings=true&isDesktop=true&page=${pageParam}`,
      );
      return request.json();
    },
    {
      getNextPageParam: (lastPage) => Number(lastPage.searchParams.page) + 1,
    },
  );

  const items = useMemo(
    () => R.compose(R.unnest, R.pluck('data'))(data.pages || []),
    [data.pages],
  );

  return (
    <Virtuoso
      useWindowScroll
      className={className}
      overscan={20}
      data={items}
      endReached={fetchNextPage}
      itemContent={(index, job) => <JobCard index={index} job={job} />}
    />
  );
};

export default JobListContainer;
