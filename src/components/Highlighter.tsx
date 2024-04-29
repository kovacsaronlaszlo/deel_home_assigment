export const highlightMatch = (text: string, query: string, classes: string): JSX.Element => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return <span>{text}</span>;

    const beforeMatch = text.substring(0, index);
    const match = text.substring(index, index + query.length);
    const afterMatch = text.substring(index + query.length);

    return (
      <span>
        {beforeMatch}
        <strong className={classes}>{match}</strong>
        {afterMatch}
      </span>
    );
  };