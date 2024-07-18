import './wineInfoTagsList.scss';

type Props = {
  tags: string[] | number;
};

export const WineInfoTagsList: React.FC<Props> = ({ tags }) => {
  return Array.isArray(tags) ? (
    <>
      {tags.map(tag => (
        <p className="wineInfoTagsList__tag" key={tag}>
          {tag}
        </p>
      ))}
    </>
  ) : (
    <p className="wineInfoTagsList__tag">{tags}</p>
  );
};
