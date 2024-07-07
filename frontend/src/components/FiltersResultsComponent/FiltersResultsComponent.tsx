import { FiltersResultsList } from '../FiltersResultsList';
import { Layout } from '../Layout';
import './filtersResultsComponent.scss';

type Props = {};

export const FiltersResultsComponent: React.FC<Props> = () => {
  return (
    <div className="filtersResults">
      <Layout>
        <div className="filtersResults__content">
          <h3 className="filtersResults__title">Results</h3>
          <FiltersResultsList />
        </div>
      </Layout>
    </div>
  );
};
